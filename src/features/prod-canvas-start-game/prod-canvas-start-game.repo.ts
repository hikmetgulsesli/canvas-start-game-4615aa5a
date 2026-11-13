import { HIGH_SCORE_STORAGE_KEY } from "./prod-canvas-start-game.types";
import type { GameProgressEntity } from "./prod-canvas-start-game.types";

function getLocalStorage(): Storage | null {
  try {
    const scope = globalThis as unknown as { localStorage?: Storage };
    return scope.localStorage ?? null;
  } catch {
    return null;
  }
}

export function writeHighScore(highScore: number): boolean {
  const storage = getLocalStorage();
  if (!storage) {
    return false;
  }
  const payload: GameProgressEntity = { high_score: highScore };
  try {
    storage.setItem(HIGH_SCORE_STORAGE_KEY, JSON.stringify(payload));
    return true;
  } catch {
    return false;
  }
}

export function readHighScore(): number | null {
  const storage = getLocalStorage();
  if (!storage) {
    return null;
  }
  try {
    const raw = storage.getItem(HIGH_SCORE_STORAGE_KEY);
    if (raw === null) {
      return null;
    }
    const parsed = JSON.parse(raw) as Partial<GameProgressEntity> | number;
    if (typeof parsed === "number") {
      return Number.isFinite(parsed) ? parsed : null;
    }
    const value = parsed?.high_score;
    return typeof value === "number" && Number.isFinite(value) ? value : null;
  } catch {
    return null;
  }
}
