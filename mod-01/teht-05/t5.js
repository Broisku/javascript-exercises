'use strict';

const year = parseInt(prompt('Enter year'));
let message = document.getElementById('message');

if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
  message.textContent = year + ' is a leap year';
}
else {
  message.textContent = year + ' is not a leap year';
}