// Ideas Tab Logic (Roadmap + Blueprints)
import { getRoadmapContent, updateRoadmapTab } from './roadmap.js';
import { getBlueprintsContent, updateBlueprintsTab } from './blueprints.js';

export const getIdeasContent = () => `
    <div class="ideas-container">
        <div class="roadmap-section" style="margin-bottom: 30px;">
            <div class="system-section-header" style="margin-bottom: 15px; display: flex; align-items: center; gap: 10px;">
                <i class='bx bx-map-alt' style="color: #bb86fc;"></i>
                <h2 style="font-size: 1.1em; margin: 0; text-align: left;">Strategic Roadmap</h2>
            </div>
            ${getRoadmapContent()}
        </div>

        <div class="blueprints-section">
            <div class="system-section-header" style="margin-bottom: 15px; display: flex; align-items: center; gap: 10px;">
                <i class='bx bx-paint' style="color: #bb86fc;"></i>
                <h2 style="font-size: 1.1em; margin: 0; text-align: left;">Architectural Blueprints</h2>
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
