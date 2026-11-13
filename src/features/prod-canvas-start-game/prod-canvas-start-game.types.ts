export const STATE_APPLICATION_REF = "STATE_APPLICATION";
export const ACT_START_GAME_REF = "ACT_START_GAME";
export const ENTITY_GAME_PROGRESS_REF = "ENTITY_GAME_PROGRESS";
export const PERSIST_HIGH_SCORE_REF = "PERSIST_HIGH_SCORE_LOCAL_STORAGE";
export const HIGH_SCORE_STORAGE_KEY = "setfarm.canvas_start_game.high_score_local_storage.v1";

export type GameSessionStatus = "ready" | "playing";

export interface ApplicationState {
  status: GameSessionStatus;
  high_score: number | null;
}

export interface GameProgressEntity {
  high_score: number;
}
