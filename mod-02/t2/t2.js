'use strict';

const participant_number = parseInt(prompt('Number of participants?'))

const participants = []
const list = document.querySelector('#list');

for (let i = 1; i <= participant_number; i++) {
    const participant_name = prompt('Name of participant?')
    participants.push(participant_name)
    const li = document.createElement('li')
    li.textContent = participant_name
    list.appendChild(li)
}
console.log(participants)