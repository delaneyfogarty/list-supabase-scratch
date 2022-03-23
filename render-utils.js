export function renderAllPlacements(placement) {
	const div = document.createElement('div');
	const a = document.createElement('a');
	const img = document.createElement('img');
	const p = document.createElement('p');

	div.classList.add('placement-list');

	p.textContent = placement.Placement;
	img.src = placement.Image;
	a.href = `./detail/?id=${placement.id}`;

	div.append(p, img);
	a.append(div);
	return a;
}

export function renderPlacementDetail(placement) {
	const myChartEl = document.createElement('div');
	const placementEl = document.createElement('h2');
	const signEl = document.createElement('h4');
	const imgEl = document.createElement('img');
	const rulingPlanetEl = document.createElement('p');
	const qualityElementEl = document.createElement('p');
	const attributesEl = document.createElement('ul');

	div.classList.add('placement-detail');

	placementEl.textContent = placement.Placement;
	signEl.textContent = placement.Sign;
	imgEl.src = placement.Image;
	rulingPlanetEl.textContent = placement.Ruling_Planet;
	qualityElementEl.textContent = placement.Quality_And_Element;

	for (let attribute of placement.Attributes){
		const attributeEl = document.createElement('li');
		attributeEl.textContent = attribute;
		attributesEl.append(attributeEl);
	}

	myChartEl.append(placementEl, signEl, imgEl, rulingPlanetEl, qualityElementEl, attributesEl);

	return myChartEl;

}