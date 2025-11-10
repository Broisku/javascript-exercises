'use strict';

const message = document.querySelector('#message');

const rolls = parseInt(prompt('Amount of rolls?'))

let i = 0

const numbers = [];

for (let i = 1; i <= rolls; i++) {
  const number = Math.floor(Math.random() * 6) + 1;
  console.log(number)
  numbers.push(number);
}

const sum = numbers.reduce((partialSum, a) => a + partialSum, 0);
console.log(sum)

message.textContent = 'The sum is ' + sum;