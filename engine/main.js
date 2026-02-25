/**
 * Easter Company WebGPU Engine (Main Entry)
 * Part of the Easter Wasm Framework Project
 */

// 1. Build Hash Detection & Cache Busting
// We extract the hash from the current script URL (e.g. main.js?h=12345)
const buildHash = new URL(import.meta.url).searchParams.get('h');
if (buildHash) {
  const lastHash = localStorage.getItem('dex_build_hash');
  if (lastHash && lastHash !== buildHash) {
    console.warn(`New Build Detected [${buildHash}]. Purging local storage...`);
    localStorage.clear();
  }
  localStorage.setItem('dex_build_hash', buildHash);
}

import { Engine } from './core/Engine.js?h=1772010793';
import { RenderSystem } from './systems/RenderSystem.js?h=1772010793';
import { UISystem } from './systems/UISystem.js?h=1772010793';
import { ChatSystem } from './systems/ChatSystem.js?h=1772010793';

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
