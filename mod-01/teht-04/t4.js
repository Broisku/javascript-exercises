'use strict';

const nimi = prompt('syötä nimi');
const huone = Math.floor(Math.random() * 4) + 1;

switch (huone) {
  case 1:
    const message1 = document.querySelector('#message');
    message1.textContent = nimi + ', you are Gryffindor!';
    break;
  case 2:
    const message2 = document.querySelector('#message');
    message2.textContent = nimi + ', you are Slytherin!';
    break;
  case 3:
    const message3 = document.querySelector('#message');
    message3.textContent = nimi + ', you are Hufflepuff!';
    break;
  case 4:
    const message4 = document.querySelector('#message');
    message4.textContent = nimi + ', you are Ravenclaw!';
    break;
}