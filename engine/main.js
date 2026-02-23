/**
 * Easter Company WebGPU Engine (Main Entry)
 * Part of the Easter Wasm Framework Project
 */

import { Engine } from './core/Engine.js?v=17';
import { RenderSystem } from './systems/RenderSystem.js?v=17';
import { UISystem } from './systems/UISystem.js?v=17';
import { TerminalSystem } from './systems/TerminalSystem.js?v=17';
import { ChatSystem } from './systems/ChatSystem.js?v=17';

// Initialize the Engine
const engine = new Engine('hero-canvas');

// Add Systems
engine.addSystem(new RenderSystem());
engine.addSystem(new UISystem());
engine.addSystem(new TerminalSystem());
engine.addSystem(new ChatSystem());

// Start
engine.init().catch(err => {
  console.error("Easter Engine Verification Failed:", err);
});
