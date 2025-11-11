'use strict';

const list = []

const number = parseInt(prompt('Enter a number'));

const message = document.querySelector('#message');

for (let i = 1; i <= number; i++) {
  if (number % i === 0) {
    list.push(i)
  }
}

if (list.length > 2) {
  console.log('ei ole alkuluku');
  message.textContent = number.toString() + ' ei ole alkuluku'
}

else {
  console.log('on alkuluku');
  message.textContent = number.toString() + ' on alkuluku'
}