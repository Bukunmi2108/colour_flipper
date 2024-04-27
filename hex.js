const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];

const button = document.querySelector('.btn');
const span = document.querySelector('.colour');

window.addEventListener('DOMContentLoaded', randomColour)

button.addEventListener('click', colour)

function colour() {
  let hexCode = '#';

  for (let i = 0;i < 6;i++) {
    hexCode += hex[getRandomNumber()];
  }

  document.body.style.backgroundColor = hexCode;

  span.textContent = hexCode;

  span.style.color = hexCode;
}

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}

function randomColour(){
  setInterval(colour, 10000)
}
