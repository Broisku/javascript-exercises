'use strict';

const select = document.getElementById('operation');
const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const result = document.getElementById('result');
const button = document.getElementById('start');

button.addEventListener('click', function() {
  const n1 = num1.value
  const n2 = num2.value

  const operation = select.value;

  if (operation === 'add') {
    result.textContent = String(parseInt(n1) + parseInt(n2));
  }
  else if (operation === 'sub') {
    result.textContent = String(parseInt(n1) - parseInt(n2));
  }
  else if (operation === 'multi') {
    result.textContent = String(parseInt(n1) * parseInt(n2));
  }
  else {
    result.textContent = String(parseInt(n1) / parseInt(n2));
  }
});