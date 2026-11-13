// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Play Page - Canvas Start Game
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Preserve the generated action-input state and exact payload transport
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state


export type PlayPageCanvasStartGameActionId = "start-game-1";

export interface PlayPageCanvasStartGameProps {
  actions?: {
    "start-game-1"?: () => void;
  };

}

export type PlayPageCanvasStartGameActionCallbacks = NonNullable<PlayPageCanvasStartGameProps["actions"]>;

export function PlayPageCanvasStartGame({ actions }: PlayPageCanvasStartGameProps) {
  return (
    <>
      {/* SURF_PLAY_PAGE (Root Surface) */}
        <main data-surface-id="SURF_PLAY_PAGE" className="flex-1 flex flex-col w-full max-w-7xl mx-auto px-6 py-8" data-setfarm-element-ref="E000001" data-observable-refs="OBS_START_GAME_PLAY_ROUTE_STABILITY">
          
          {/* Top Bar / Route Header (Static non-actionable chrome) */}
          <header className="flex items-center justify-between pb-6 mb-8 border-b border-gray-800">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-400 flex items-center justify-center shadow-lg shadow-emerald-950/50">
                <span className="text-white font-bold text-lg tracking-wider">C</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-white tracking-tight">Canvas Start Game</h1>
                <p className="text-xs text-gray-400 font-mono tracking-wide">Route: <span className="text-emerald-400">/play</span></p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 px-3 py-1.5 rounded-full bg-gray-900 border border-gray-800 text-xs text-gray-300 font-mono">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Engine Ready</span>
              </div>
            </div>
          </header>
      
          {/* Main Workspace: Arena + Side Panel */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start flex-1">
            
            {/* Left Column: Canvas Arena Container */}
            <section className="lg:col-span-8 flex flex-col space-y-6">
              
              {/* SURF_GAME_CANVAS (Contained Surface) */}
              <div data-surface-id="SURF_GAME_CANVAS" className="relative w-full aspect-[4/3] min-h-[480px] bg-gray-950 rounded-2xl border border-gray-800 shadow-2xl overflow-hidden flex flex-col items-center justify-center p-8 group" data-setfarm-element-ref="E000002">
                {/* Background Grid Matrix Design */}
                <div className="absolute inset-0 bg-[radial-gradient(#1f2937_1px,transparent_1px)] [background-size:24px_24px] opacity-40"></div>
                
                <div className="relative z-10 flex flex-col items-center text-center max-w-md space-y-4">
                  <div className="w-16 h-16 rounded-2xl bg-gray-900/90 border border-gray-700/60 flex items-center justify-center shadow-inner text-emerald-400">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  
                  <div className="space-y-1">
                    <h2 className="text-xl font-semibold text-white tracking-tight">Interactive Canvas Arena</h2>
                    <p className="text-sm text-gray-400">Ready to initialize graphics pipeline and physics loop.</p>
                  </div>
                </div>
      
                {/* Bottom Telemetry Overlay Bar (Non-actionable) */}
                <div className="absolute bottom-4 left-4 right-4 bg-gray-900/80 backdrop-blur-sm border border-gray-800/80 rounded-xl px-4 py-2.5 flex items-center justify-between text-xs text-gray-400 font-mono">
                  <div className="flex items-center space-x-4">
                    <span>Resolution: 800 × 600</span>
                    <span className="text-gray-700">|</span>
                    <span>FPS Target: 60</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    <span>GL Context: Standby</span>
                  </div>
                </div>
              </div>
      
              {/* Action Control Area under Canvas in SURF_PLAY_PAGE */}
              <div className="flex items-center justify-between p-6 bg-gray-900/60 border border-gray-800 rounded-2xl">
                <div className="space-y-1">
                  <h3 className="text-sm font-semibold text-white">Start Game Session</h3>
                  <p className="text-xs text-gray-400">Launches session, transitions game loop state, and preserves current high score.</p>
                </div>
                
                {/* CSLOT_START_GAME_START_BUTTON: Owning surface is SURF_PLAY_PAGE */}
                <button type="button" data-action="ACT_START_GAME" data-control-slot="CSLOT_START_GAME_START_BUTTON" className="px-8 py-3.5 bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700 text-white font-semibold text-sm rounded-xl shadow-lg shadow-emerald-950/60 transition-colors duration-150 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-gray-900" data-setfarm-element-ref="E000003" data-observable-refs="OBS_START_GAME_START_BUTTON_AVAILABILITY" data-action-id="start-game-1" onClick={actions?.["start-game-1"]}>
                  Start Game
                </button>
              </div>
      
            </section>
      
            {/* Right Column: Game Status Side Panel */}
            <aside className="lg:col-span-4 flex flex-col space-y-6">
              
              {/* SURF_GAME_STATUS (Contained Surface) */}
              <div data-surface-id="SURF_GAME_STATUS" className="bg-gray-900/80 border border-gray-800 rounded-2xl p-6 shadow-xl space-y-6" data-setfarm-element-ref="E000004" data-observable-refs="OBS_START_GAME_GAME_STARTED_MESSAGE OBS_START_GAME_HIGH_SCORE_PERSISTENCE">
                <div className="flex items-center justify-between border-b border-gray-800/80 pb-4">
                  <h2 className="text-sm font-bold uppercase tracking-wider text-gray-300">Game Status</h2>
                  <span className="px-2.5 py-0.5 rounded text-[11px] font-medium bg-emerald-950/60 text-emerald-400 border border-emerald-800/50">Active Monitor</span>
                </div>
      
                {/* Status Message Section (Observables for OBS_START_GAME_GAME_STARTED_MESSAGE) */}
                <div className="space-y-2">
                  <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">Session Status</span>
                  <div className="p-3.5 bg-gray-950 rounded-xl border border-gray-800/90 text-sm">
                    {/* Initial message placeholder before action */}
                    <span className="text-gray-400 italic">Awaiting start signal</span>
                    {/* Game started message semantic receipt for OBS_START_GAME_GAME_STARTED_MESSAGE */}
                    <span className="hidden" aria-live="polite">Game started</span>
                  </div>
                </div>
      
                {/* High Score Section (Observables for OBS_START_GAME_HIGH_SCORE_PERSISTENCE) */}
                <div className="space-y-2">
                  <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">High Score</span>
                  <div className="p-4 bg-gray-950 rounded-xl border border-gray-800/90 flex items-center justify-between">
                    <span className="text-xs font-mono text-gray-400 uppercase">All-Time Best</span>
                    {/* Initially null or represented with 0 for after/reload observable contract value="0" */}
                    <div className="flex items-baseline space-x-1">
                      <span className="text-2xl font-black font-mono text-emerald-400 tracking-tight" data-observable="high-score" data-value="0">0</span>
                      <span className="text-xs text-gray-500 font-mono">pts</span>
                    </div>
                  </div>
                </div>
      
                {/* Diagnostic Telemetry List (Non-actionable metadata) */}
                <div className="pt-2 border-t border-gray-800/60 space-y-3">
                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <span>Active Route</span>
                    <span className="font-mono text-gray-200">/play</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <span>Local Persistence</span>
                    <span className="text-emerald-400 font-mono">Enabled</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <span>Status Dispatcher</span>
                    <span className="text-gray-400 font-mono">Active</span>
                  </div>
                </div>
              </div>
      
            </aside>
      
          </div>
      
          {/* Static Footer Info (Non-actionable) */}
          <footer className="mt-12 pt-6 border-t border-gray-800/80 text-center text-xs text-gray-500">
            <p>Play Page Canvas Start Game — All session state is preserved locally.</p>
          </footer>
      
        </main>
    </>
  );
}
