import { STATE_APPLICATION_REF } from "../features/prod-canvas-start-game/prod-canvas-start-game.types";
import type { ApplicationState } from "../features/prod-canvas-start-game/prod-canvas-start-game.types";

export const TEST_BRIDGE_GLOBAL_NAME = "__SETFARM_TEST_BRIDGE__";
export const SCENARIO_MODE_GLOBAL_NAME = "__SETFARM_SCENARIO_MODE__";
export const SCENARIO_MODE_VALUE = "manual";

export type ActionInvocationInput = Record<string, unknown>;

export interface ActionInvocationPayload {
  actionRef?: string;
  actionId?: string;
  inputs?: ActionInvocationInput;
}

export type ActionHandler = (actionRef: string, inputs: ActionInvocationInput) => void | Promise<void>;

export type BridgeStateSnapshot = Record<string, ApplicationState>;

export interface TestBridge {
  invokeAction(
    invocation: string | ActionInvocationPayload,
    inputs?: ActionInvocationInput,
  ): Promise<{ ok: boolean; actionRef: string }>;
  getState(): { states: BridgeStateSnapshot };
  readonly states: BridgeStateSnapshot;
}

const actionHandlers = new Map<string, ActionHandler>();
let stateProvider: (() => ApplicationState) | null = null;

export function registerActionHandler(actionRef: string, handler: ActionHandler): () => void {
  actionHandlers.set(actionRef, handler);
  return () => {
    if (actionHandlers.get(actionRef) === handler) {
      actionHandlers.delete(actionRef);
    }
  };
}

export function registerStateProvider(provider: () => ApplicationState): () => void {
  stateProvider = provider;
  return () => {
    if (stateProvider === provider) {
      stateProvider = null;
    }
  };
}

export function getBridgeStates(): BridgeStateSnapshot {
  const state = stateProvider
    ? stateProvider()
    : ({ status: "ready", high_score: null } as ApplicationState);
  return { [STATE_APPLICATION_REF]: state };
}

function resolveActionRef(invocation: string | ActionInvocationPayload): string {
  if (typeof invocation === "string") {
    return invocation;
  }
  return invocation.actionRef ?? invocation.actionId ?? "";
}

export function installTestBridge(): void {
  const scope = globalThis as unknown as Record<string, unknown>;
  scope[SCENARIO_MODE_GLOBAL_NAME] = SCENARIO_MODE_VALUE;

  const bridge: TestBridge = {
    invokeAction: async (
      invocation: string | ActionInvocationPayload,
      inputs?: ActionInvocationInput,
    ): Promise<{ ok: boolean; actionRef: string }> => {
      const actionRef = resolveActionRef(invocation);
      const handler = actionHandlers.get(actionRef);
      if (!handler) {
        throw new Error(`ACTION_NOT_REGISTERED:${actionRef}`);
      }
      const invocationInputs =
        (typeof invocation === "object" && invocation ? invocation.inputs : undefined) ?? inputs ?? {};
      await handler(actionRef, invocationInputs);
      return { ok: true, actionRef };
    },
    getState: () => ({ states: getBridgeStates() }),
    get states(): BridgeStateSnapshot {
      return getBridgeStates();
    },
  };

  scope[TEST_BRIDGE_GLOBAL_NAME] = bridge;
}

installTestBridge();
