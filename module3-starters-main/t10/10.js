'use strict';

const form = document.getElementById('source')

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const first_name = form.firstname.value;
  const last_name = form.lastname.value;

  const target = document.getElementById('target');
  target.textContent = 'Your name is ' + first_name + ' ' + last_name;
});