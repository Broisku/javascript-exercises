'use strict';

function even(array) {
  let new_array = []
  for (let number of array) {
    if (number % 2 === 0) {
      new_array.push(number);
    }
  }
  return new_array;
}

const array = [2, 7, 4, 3, 9, 8]

const print = even(array);

console.log(`Original array: ${array}`)
console.log(`New array: ${print}`)