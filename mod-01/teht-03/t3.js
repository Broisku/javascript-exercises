'use strict';

const number1Str = prompt('Enter first number:');
const number2Str = prompt('Enter second number:');
const number3Str = prompt('Enter third number:');

const number1 = parseInt(number1Str)
const number2 = parseInt(number2Str)
const number3 = parseInt(number3Str)

const numbers_sum = number1 + number2 + number3
const messageSum = document.querySelector('#messageSum')
messageSum.textContent = numbers_sum

const numbers_product = number1 * number2 * number3
const messageProduct = document.querySelector('#messageProduct')
messageProduct.textContent = numbers_product

const numbers_average = numbers_sum / 3
const messageAverage = document.querySelector('#messageAverage')
messageAverage.textContent = numbers_average