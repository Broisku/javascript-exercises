'use strict';

const numbers = []


let number;
do {
    number = parseInt(prompt('give a number'));
    numbers.push(number);
} while (number !== 0);

const numbers_sorted = numbers.sort((a, b) => a - b);
console.log(numbers_sorted.reverse())