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


const timerContent = document.querySelector('.timer__content');
const timerRemaining = document.querySelector('.timer__remaining');

const setTimer = (time) => {

  const initialTime = Date.now();

  const interval = 100;
  timerContent.style.transition = `transform ${interval}ms`;

  const intervalId = setInterval(() => {

    const currentTime = Date.now();
    const elapsedTime = currentTime - initialTime;
    const percent = (elapsedTime / time) * 100;

    const remainingTime = time - elapsedTime;
    timerRemaining.innerHTML = millisToMinutesAndSeconds(remainingTime);

    timerContent.style.transform = `translate(0%, ${percent}%)`;

    if(elapsedTime > time) {
      clearInterval(intervalId);
    }

  }, interval);
}

function millisToMinutesAndSeconds(millis) {
  if(millis < 0) millis = 0;
  var minutes = Math.floor(millis / 60000);
  var seconds = ((millis % 60000) / 1000).toFixed(0);
  return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
}



const tHandleArray = document.querySelectorAll('.thandle');
tHandleArray.forEach((tHandle) => {
  const arrowUp = tHandle.querySelector('.thandle__arrow--up');
  const arrowDown = tHandle.querySelector('.thandle__arrow--down');
  const number = tHandle.querySelector('.thandle__number');

  arrowUp.addEventListener('click', () => {
    let value = parseInt(number.innerText);
    value++;
    if(value > 60) return;
    number.innerText = (value < 10 ? '0' : '') + value;
  });

  arrowDown.addEventListener('click', () => {
    let value = parseInt(number.innerText);
    value--;
    if(value < 0) return;
    number.innerText = (value < 10 ? '0' : '') + value;
  });
});


const controlsBtn = document.querySelector('.controls__start');
controlsBtn.addEventListener('click', () => {

  const min = tHandleArray[0].querySelector('.thandle__number').innerText;
  const sec = tHandleArray[1].querySelector('.thandle__number').innerText;
  const millis = parseInt(min) * 60000 + parseInt(sec) * 1000;

  setTimer(millis);
});
