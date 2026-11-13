import { useEffect } from "react";

import {
  ApplicationStateProvider,
  useApplicationState,
} from "./features/prod-canvas-start-game/prod-canvas-start-game.store";
import { PlayPageCanvasStartGame } from "./screens/PlayPageCanvasStartGame";
import { installTestBridge } from "./test/bridge";

function PlayPageCanvasStartGameScene() {
  const { startGame } = useApplicationState();

  return <PlayPageCanvasStartGame actions={{ "start-game-1": startGame }} />;
}

export default function App() {
  useEffect(() => {
    installTestBridge();
  }, []);

  return (
    <ApplicationStateProvider>
      <div
        data-setfarm-root="baseline"
        data-testid="setfarm-app-root"
        className="min-h-screen bg-[#0b0f19] text-gray-100"
      >
        <PlayPageCanvasStartGameScene />
      </div>
    </ApplicationStateProvider>
  );
}
