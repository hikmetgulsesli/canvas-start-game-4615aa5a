import type { ApplicationState, GameProgressEntity } from "../features/prod-canvas-start-game/prod-canvas-start-game.types";

export const INITIAL_APPLICATION_STATE: ApplicationState = {
  status: "ready",
  high_score: null,
};

export const STARTED_APPLICATION_STATE: ApplicationState = {
  status: "playing",
  high_score: 0,
};

export const GAME_PROGRESS_FIXTURE: GameProgressEntity = {
  high_score: 0,
};
