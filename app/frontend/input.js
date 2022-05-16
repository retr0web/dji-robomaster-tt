const speedControl = document.querySelector('#speed');
const speedLabel = document.querySelector('label[for="speed"]');
const speedButton = document.querySelector('#speedChange');
function handleSpeed() {
  speedLabel.innerHTML = `Speed: ${speedControl.value}`;
  speedButton.dataset.command = `speed ${speedControl.value}`;
}

speedControl.addEventListener('change', handleSpeed);

const color = document.querySelector('#color');
const colorButton = document.querySelector('#colorButton');

function handleColor() {
  const input = this.value;
  const r = parseInt(input.substr(1,2), 16);
  const g = parseInt(input.substr(3,2), 16);
  const b = parseInt(input.substr(5,2), 16);
  colorButton.dataset.command = `EXT led ${r} ${g} ${b}`;
}

color.addEventListener('change', handleColor);

const text = document.querySelector('#textToDisplay');
const textButton = document.querySelector('#textButton');

function handleText() {
  textButton.dataset.command = `EXT mled l b 1 ${text.value}`;
  console.log(textButton.dataset.command);
}

text.addEventListener('keyup', handleText);