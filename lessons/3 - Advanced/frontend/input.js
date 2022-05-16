const speedControl = document.querySelector('#speed');
const speedLabel = document.querySelector('label[for="speed"]');
const speedButton = document.querySelector('#speedChange');
function handleSpeed() {
  speedLabel.innerHTML = `Speed: ${speedControl.value}`;
  speedButton.dataset.command = `speed ${speedControl.value}`;
}

speedControl.addEventListener('change', handleSpeed);