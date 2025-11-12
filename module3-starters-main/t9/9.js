'use strict';

const button = document.getElementById('start');
const result = document.getElementById('result');

button.addEventListener('click', function() {
  const input = document.getElementById('calculation').value;
  if (input.includes('+')) {
    const numbers = input.split('+')
    const sum = parseInt(numbers[0]) + parseInt(numbers[1]);
    result.textContent = sum.toString()
  }
  else if (input.includes('-')) {
    const numbers = input.split('-')
    result.textContent = (numbers[0] - numbers[1]).toString();
  }
  else if (input.includes('*')) {
    const numbers = input.split('*')
    result.textContent = (numbers[0] * numbers[1]).toString();
  }
  else {
    const numbers = input.split('/')
    result.textContent = (numbers[0] / numbers[1]).toString();
  }
});