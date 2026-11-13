import {
  ACT_START_GAME_REF,
  ENTITY_GAME_PROGRESS_REF,
  PERSIST_HIGH_SCORE_REF,
} from "../prod-canvas-start-game/prod-canvas-start-game.types";
import type { ApplicationState, GameProgressEntity } from "../prod-canvas-start-game/prod-canvas-start-game.types";

export const START_GAME_STATUS = "playing";
export const START_GAME_HIGH_SCORE = 0;

export interface StartGamePersistenceEffect {
  policyRef: string;
  entityRef: string;
  payload: GameProgressEntity;
}

export interface StartGameResult {
  actionRef: string;
  nextState: ApplicationState;
  persistence: StartGamePersistenceEffect;
}

/**
 * ACT_START_GAME state deltas, exactly as bound by the sealed product contract:
 * set STATE_APPLICATION /status = "playing" and /high_score = 0, staying on the
 * current route, and write ENTITY_GAME_PROGRESS through the local storage
 * persistence policy.
 */
export function applyStartGame(state: ApplicationState): StartGameResult {
  const nextState: ApplicationState = {
    status: START_GAME_STATUS,
    high_score: START_GAME_HIGH_SCORE,
  };
  return {
    actionRef: ACT_START_GAME_REF,
    nextState,
    persistence: {
      policyRef: PERSIST_HIGH_SCORE_REF,
      entityRef: ENTITY_GAME_PROGRESS_REF,
      payload: { high_score: nextState.high_score },
    },
  };
}
