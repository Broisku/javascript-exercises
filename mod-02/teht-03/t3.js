'use strict';

const names = [];

for (let i = 1; i <= 6; i++) {
    const name = prompt('enter dog name')
    names.push(name)
}
const names_sorted = names.sort()
const names_reversed = names_sorted.reverse()
console.log(names_reversed)
const list = document.querySelector('#list')

for (let name of names_reversed) {
    const li = document.createElement('li')
    li.textContent = name
    list.appendChild(li)
}