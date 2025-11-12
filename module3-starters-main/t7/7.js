'use strict';

const trigger = document.getElementById('trigger');
const target = document.getElementById('target');
trigger.addEventListener('mouseover', function () {
    target.src = 'img/picB.jpg';
    target.alt = 'this is now changed';
});

trigger.addEventListener('mouseleave', function () {
    target.src = 'img/picA.jpg';
    target.alt = 'image is not back';
})