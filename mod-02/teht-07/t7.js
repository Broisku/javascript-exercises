'use strict';

const side_number = parseInt(prompt('enter amount of sides on the dice'))

function roll_dice(side_number) {
  return Math.floor(Math.random() * side_number) + 1
}

const list = document.querySelector('#list')
let number;

do {
  number = roll_dice(side_number);
  const li = document.createElement('li')
  li.textContent = number
  list.appendChild(li)
} while (number !== side_number)