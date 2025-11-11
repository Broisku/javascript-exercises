'use strict';

const numbers = [];
const numbers_reversed = [];

for (let i = 1; i <= 5; i++) {
    const number = parseInt(prompt('Enter number'));
    numbers.push(number);
}
console.log(`List: ${numbers}`)
for (let j = 4; j >= 0; j--) {
    numbers_reversed.push(numbers[j])
}
console.log(`Reversed list: ${numbers_reversed}`)