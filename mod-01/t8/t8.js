'use strict';

const alku = prompt('Syötä aloitusvuosi');
const loppu = prompt('Syötä lopetusvuosi');

const list = document.querySelector('#list');

for(let i = alku; i <= loppu; i++){
    if (i % 4 === 0 && i % 100 !== 0 || i % 400 === 0) {
        const li = document.createElement('li');
        li.textContent = i;
        list.appendChild(li);
    }
}