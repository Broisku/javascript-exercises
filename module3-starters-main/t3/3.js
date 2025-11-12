'use strict';
const names = ['John', 'Paul', 'Jones'];

const list = document.getElementById('target')

for (let i = 0; i < names.length; i++) {
    const li = document.createElement('li')
    li.textContent = names[i]
    list.appendChild(li)
}