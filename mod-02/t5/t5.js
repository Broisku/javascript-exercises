'use strict';

let number;

const numbers = [];

do {
    number = parseInt(prompt('enter a number'));
    if (numbers.includes(number)) {
      console.log('number has already been given');
      const numbers_sorted = numbers.sort((a, b) => a - b);
      console.log(numbers_sorted);
      break;
    }
    else {
      numbers.push(number);
    }
} while (true);