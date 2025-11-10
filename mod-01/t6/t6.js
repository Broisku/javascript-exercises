'use strict';

const message = document.querySelector('#message');

const answer = confirm('Should I calculate the square root?')

if (answer) {
  const number = parseInt(prompt('Enter a number'));
  if (number < 0) {
    message.textContent = 'The square root of a negative number is not defined.'}
  else {
    const squared = Math.sqrt(number)
    message.textContent = 'The square root of ' + number + ' is ' + squared.toString()}
}

else {
  message.textContent = 'The square root is not calculated.'
}