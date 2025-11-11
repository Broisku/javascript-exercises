'use strict';

function concat(array) {
  return array.reduce((partialSum, a) => a + partialSum);

}
const array = ['Johnny', 'DeeDee', 'Joey', 'Marky'];
const joined = concat(array)

const message = document.querySelector('#message');

message.textContent = joined