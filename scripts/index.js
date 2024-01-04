themeButton = document.querySelector('#theme-button');
container = document.querySelector('.container');
hourArrow = document.querySelector('.hour-arrow');
minuteArrow = document.querySelector('.minute-arrow');
secondArrow = document.querySelector('.second-arrow');
themeButton.addEventListener('click', () => {
  container.classList.toggle('container-dark');
  themeButton.innerText === 'Dark theme' ? themeButton.innerText = 'Light theme' : themeButton.innerText = 'Dark theme';
  themeButton.classList.toggle('theme-button-light');
  themeButton.classList.toggle('theme-button-dark');
  hourArrow.classList.toggle('arrow-border');
  minuteArrow.classList.toggle('arrow-border');
  secondArrow.src.split('/').pop() === 'second-arrow-light.png' ? secondArrow.src = './images/second-arrow-dark.png' : secondArrow.src = './images/second-arrow-light.png';
});

hourContainer = document.querySelector('#hour-container');
minuteContainer = document.querySelector('#minute-container');
secondContainer = document.querySelector('#second-container');

rotateArrows();
setInterval(rotateArrows, 1000);

function rotateArrows() {
  let currentDate = new Date();
  let hours = currentDate.getHours();
  let minutes = currentDate.getMinutes();
  let seconds = currentDate.getSeconds();
  secondContainer.style.transform = `rotate(${6 * seconds}deg)`;
  minuteContainer.style.transform = `rotate(${6 * minutes + 0.1 * seconds}deg)`;
  hourContainer.style.transform = `rotate(${30 * hours + 0.5 * minutes}deg)`;
};