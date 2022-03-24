import { fetchOnePlacement } from '../fetch-utils.js';
import { renderPlacementDetail } from '../render-utils.js';

const placementDetailEl = document.querySelector('.placement-detail');


window.addEventListener('load', async () => {
    const data = new URLSearchParams(window.location.search);
    const placementId = data.get('id');

    const placement = await fetchOnePlacement(placementId);
    const placementEl = renderPlacementDetail(placement);

    placementDetailEl.append(placementEl);

});


