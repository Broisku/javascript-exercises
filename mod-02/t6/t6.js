'use strict';

function roll_dice() {
  return Math.floor(Math.random() * 6) + 1
}

const list = document.querySelector('#list')
let number;

do {
  number = roll_dice()
  const li = document.createElement('li')
  li.textContent = number
  list.appendChild(li)
} while (number !== 6)