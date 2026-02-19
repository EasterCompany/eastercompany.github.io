/**
 * Easter Company WebGPU Engine (Main Entry)
 * Part of the Easter Wasm Framework Project
 */

import { Engine } from './core/Engine.js';
import { RenderSystem } from './systems/RenderSystem.js';

// Initialize the Engine
const engine = new Engine('hero-canvas');

// Add Systems
engine.addSystem(new RenderSystem());

// Start
engine.init().catch(err => {
  console.error("Easter Engine Verification Failed:", err);
});
