'use strict';
const nimi = prompt('syötä nimi');
const huone = Math.floor(Math.random() * 4) + 1;

switch (huone) {
    case 1:
        console.log(nimi + ', you are Gryffindor!');
        break;
    case 2:
        console.log(nimi + ', you are Slytherin!');
        break;
    case 3:
        console.log(nimi + ', you are Hufflepuff!');
        break;
    case 4:
        console.log(nimi + ', you are Ravenclaw!');
}