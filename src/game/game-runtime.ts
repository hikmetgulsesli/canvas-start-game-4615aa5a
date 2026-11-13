export interface GameRuntimeFrame {
  timestamp: number;
  elapsedMs: number;
}

export interface GameRuntime {
  readonly running: boolean;
  start(): void;
  stop(): void;
  subscribe(listener: (frame: GameRuntimeFrame) => void): () => void;
}

/**
 * Session runtime for the play route. It owns the frame loop that is active
 * while the application state reports a "playing" session.
 */
export function createGameRuntime(): GameRuntime {
  const listeners = new Set<(frame: GameRuntimeFrame) => void>();
  let handle: number | null = null;
  let startedAt = 0;

  const tick = (timestamp: number) => {
    const frame: GameRuntimeFrame = {
      timestamp,
      elapsedMs: startedAt === 0 ? 0 : timestamp - startedAt,
    };
    for (const listener of Array.from(listeners)) {
      listener(frame);
    }
    handle = scheduleFrame(tick);
  };

  const scheduleFrame = (callback: (timestamp: number) => void): number | null => {
    const raf = (globalThis as unknown as { requestAnimationFrame?: (cb: FrameRequestCallback) => number })
      .requestAnimationFrame;
    if (typeof raf !== "function") {
      return null;
    }
    return raf(callback);
  };

  return {
    get running(): boolean {
      return handle !== null;
    },
    start(): void {
      if (handle !== null) {
        return;
      }
      startedAt = 0;
      handle = scheduleFrame(tick);
    },
    stop(): void {
      if (handle === null) {
        return;
      }
      const cancel = (globalThis as unknown as { cancelAnimationFrame?: (h: number) => void })
        .cancelAnimationFrame;
      if (typeof cancel === "function") {
        cancel(handle);
      }
      handle = null;
    },
    subscribe(listener: (frame: GameRuntimeFrame) => void): () => void {
      listeners.add(listener);
      return () => {
        listeners.delete(listener);
      };
    },
  };
}
