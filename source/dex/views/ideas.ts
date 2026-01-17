// Ideas Tab Logic (Roadmap + Blueprints + Progress + Chores)
import { getRoadmapContent, updateRoadmapTab, getRoadmapActions } from './roadmap.ts';
import { getBlueprintsContent, updateBlueprintsTab, getBlueprintActions } from './blueprints.ts';
import { getProgressContent, updateProgressTab } from './progress.ts';
import { getChoresContent, updateChoresTab } from './chores.ts';

export const getProgressTabContent = () => `
    <div class="ideas-container">
        <div class="progress-section">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px; flex-wrap: wrap; gap: 10px;">
                <div class="system-section-header" style="margin: 0; display: flex; align-items: center; gap: 10px;">
                    <i class='bx bx-loader-circle spin' style="color: #bb86fc;"></i>
                    <h2 style="font-size: 1.1em; margin: 0; text-align: left;">Live Progress</h2>
                </div>
            </div>
            ${getProgressContent()}
        </div>
    </div>
`;

export const getRoadmapTabContent = () => `
    <div class="ideas-container">
        <div class="roadmap-section" style="margin-bottom: 30px;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px; flex-wrap: wrap; gap: 10px;">
                <div class="system-section-header" style="margin: 0; display: flex; align-items: center; gap: 10px;">
                    <i class='bx bx-map-alt' style="color: #bb86fc;"></i>
                    <h2 style="font-size: 1.1em; margin: 0; text-align: left;">Strategic Roadmap</h2>
                </div>
                ${getRoadmapActions()}
            </div>
            ${getRoadmapContent()}
        </div>
    </div>
`;

export const getBlueprintsTabContent = () => `
    <div class="ideas-container">
        <div class="blueprints-section">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px; flex-wrap: wrap; gap: 10px;">
                <div class="system-section-header" style="margin: 0; display: flex; align-items: center; gap: 10px;">
                    <i class='bx bx-paint' style="color: #bb86fc;"></i>
                    <h2 style="font-size: 1.1em; margin: 0; text-align: left;">Architectural Blueprints</h2>
                </div>
                ${getBlueprintActions()}
            </div>
            ${getBlueprintsContent()}
        </div>
    </div>
`;

export const getChoresTabContent = () => `
    <div class="ideas-container">
        <div class="chores-section">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px; flex-wrap: wrap; gap: 10px;">
                <div class="system-section-header" style="margin: 0; display: flex; align-items: center; gap: 10px;">
                    <i class='bx bx-task' style="color: #bb86fc;"></i>
                    <h2 style="font-size: 1.1em; margin: 0; text-align: left;">Research Tasks</h2>
                </div>
            </div>
            ${getChoresContent()}
        </div>
    </div>
`;

export async function updateIdeasTab() {
  // When using tabs, we might want to update both or just the visible one.
  // For simplicity, we update both as they are separate data sources.
  await Promise.all([
    updateRoadmapTab(),
    updateBlueprintsTab(),
    updateProgressTab(),
    updateChoresTab(),
  ]);
}
