// Ideas Tab Logic (Roadmap + Blueprints)
import { getRoadmapContent, updateRoadmapTab, getRoadmapActions } from './roadmap.js';
import { getBlueprintsContent, updateBlueprintsTab, getBlueprintActions } from './blueprints.js';

export const getIdeasContent = () => `
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

export async function updateIdeasTab() {
    await Promise.all([
        updateRoadmapTab(),
        updateBlueprintsTab()
    ]);
}
