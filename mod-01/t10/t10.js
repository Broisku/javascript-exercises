'use strict';

const dice_number = parseInt(prompt('Enter dice number'));

const eye_sum = parseInt(prompt('Enter eye sum'));

let i = 0

const sums_list = []

while (i <= 10_000) {
  const numbers = [];

  for (let j = 1; j <= dice_number; j++) {
    const number = Math.floor(Math.random() * 6) + 1;
    numbers.push(number);
  }

  const sum = numbers.reduce((partialSum, a) => a + partialSum, 0);

  if (sum === eye_sum) {
    sums_list.push(sum);
  }

  i++
}

const probability = sums_list.length / 10_000
console.log(probability)
message.textContent = 'Probability of the sum ' + eye_sum.toString + ' with ' + dice_number.toString + ' dice is ' + probability.toString()