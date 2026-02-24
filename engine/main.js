/**
 * Easter Company WebGPU Engine (Main Entry)
 * Part of the Easter Wasm Framework Project
 */

import { Engine } from './core/Engine.js?h=1771888999';
import { RenderSystem } from './systems/RenderSystem.js?h=1771888999';
import { UISystem } from './systems/UISystem.js?h=1771888999';
import { ChatSystem } from './systems/ChatSystem.js?h=1771888999';

// Initialize the Engine
const engine = new Engine('hero-canvas');

// Add Systems
engine.addSystem(new RenderSystem());
engine.addSystem(new ChatSystem());
engine.addSystem(new UISystem());

// Start
window.easterEngine = engine;
engine.init().catch(err => {
  console.error("Easter Engine Verification Failed:", err);
});
