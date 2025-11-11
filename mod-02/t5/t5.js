'use strict';

let number;

const numbers = [];

do {
    number = parseInt(prompt('enter a number'))
    if (number in numbers) {
        break;
    }
} while (! number in numbers)