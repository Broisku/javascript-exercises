'use strict';

const tvForm = document.querySelector('form');
tvForm.addEventListener('submit', async function(evt) {
  evt.preventDefault();
  const value = document.querySelector('input[name=q]').value;
  try {
    const response = await fetch(`https://api.tvmaze.com/search/shows?q=${value}`);
    const json = await response.json();
    console.log(json)
  }
  catch (error) {
    console.error(error);
  }
})