import { fetchAllPlacements } from './fetch-utils.js';
import { renderAllPlacements } from './render-utils.js';

const placementListEl = document.querySelector('.placement-list');
window.addEventListener('load', async () => {
    fetchAndDisplayPlacements();
});

async function fetchAndDisplayPlacements() {

    const placements = await fetchAllPlacements();

    for (let placement of placements) {
        const placementEl = renderAllPlacements(placement);

        placementListEl.append(placementEl);
    }
}
