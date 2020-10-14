const waveSvg = `<svg version="1.0" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
  viewBox="0 0 237.6 49">
  <path d="M0,48C59.4,48,59.4,0,118.8,0c59.4,0,59.4,48,118.8,48H0z"/>
</svg>`;

const timerWave = document.querySelector('.timer__wave');
const timerWaveBg = document.querySelector('.timer__wave--bg');

const createWaves = (length, parent) => {
  let html = '';
  Array.from({ length }).forEach(() => {
    html += waveSvg;
  });
  parent.innerHTML = html;
}

createWaves(6, timerWave);
createWaves(8, timerWaveBg);