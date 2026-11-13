import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
import type { ReactNode } from "react";

import { INITIAL_APPLICATION_STATE } from "../../__fixtures__/prod-canvas-start-game.fixture";
import { createGameRuntime } from "../../game/game-runtime";
import type { GameRuntime } from "../../game/game-runtime";
import { registerActionHandler, registerStateProvider } from "../../test/bridge";
import { applyStartGame } from "../surf-play-page/act_start_game";
import { readHighScore, writeHighScore } from "./prod-canvas-start-game.repo";
import { ACT_START_GAME_REF } from "./prod-canvas-start-game.types";
import type { ApplicationState } from "./prod-canvas-start-game.types";

export interface ApplicationStateContextValue {
  state: ApplicationState;
  startGame: () => void;
}

const ApplicationStateContext = createContext<ApplicationStateContextValue | null>(null);

export function ApplicationStateProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<ApplicationState>(INITIAL_APPLICATION_STATE);
  const stateRef = useRef<ApplicationState>(state);
  const runtimeRef = useRef<GameRuntime | null>(null);

  if (runtimeRef.current === null) {
    runtimeRef.current = createGameRuntime();
  }

  useEffect(() => {
    stateRef.current = state;
  }, [state]);

  // Persistence rehydration: the local storage policy is rehydrated at
  // initialization so a reload restores the persisted high score.
  useEffect(() => {
    const persisted = readHighScore();
    if (persisted === null) {
      return;
    }
    setState((previous) =>
      previous.high_score === persisted ? previous : { ...previous, high_score: persisted },
    );
  }, []);

  const startGame = useCallback(() => {
    const { nextState, persistence } = applyStartGame(stateRef.current);
    writeHighScore(persistence.payload.high_score);
    stateRef.current = nextState;
    setState(nextState);
  }, []);

  useEffect(() => {
    const runtime = runtimeRef.current;
    if (!runtime) {
      return;
    }
    if (state.status === "playing") {
      runtime.start();
    } else {
      runtime.stop();
    }
  }, [state.status]);

  useEffect(() => {
    const unregisterAction = registerActionHandler(ACT_START_GAME_REF, () => {
      startGame();
    });
    const unregisterState = registerStateProvider(() => stateRef.current);
    return () => {
      unregisterAction();
      unregisterState();
    };
  }, [startGame]);

  const value = useMemo<ApplicationStateContextValue>(
    () => ({ state, startGame }),
    [state, startGame],
  );

  return (
    <ApplicationStateContext.Provider value={value}>{children}</ApplicationStateContext.Provider>
  );
}

export function useApplicationState(): ApplicationStateContextValue {
  const context = useContext(ApplicationStateContext);
  if (!context) {
    throw new Error("APPLICATION_STATE_PROVIDER_MISSING");
  }
  return context;
}
