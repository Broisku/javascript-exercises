'use strict';

const alku = prompt('Syötä aloitusvuosi');
const loppu = prompt('Syötä lopetusvuosi');

for(let i = alku; i <= loppu; i++){
    if ((i % 4) === 0) {
        console.log(i)

    }
}