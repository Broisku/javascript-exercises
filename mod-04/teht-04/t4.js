'use strict';

const tvForm = document.querySelector('form');
tvForm.addEventListener('submit', async function(evt) {
  evt.preventDefault();
  const value = document.querySelector('input[name=q]').value;
  try {
    const response = await fetch(`https://api.tvmaze.com/search/shows?q=${value}`);
    const json = await response.json();
    console.log(json)

    const body = document.querySelector('body');
    let results = document.getElementById('results');
    if (!results) {
      results = document.createElement('div');
      results.id = 'results';
      body.appendChild(results)
    }

    results.innerHTML = ''

    json.forEach((item) => {
      const name = document.createElement('h2');
      const link = document.createElement('a');
      const image = document.createElement('img');
      const div = document.createElement('div');
      const summary = item.show.summary;
      const article = document.createElement('article');

      name.textContent = item.show.name;
      link.textContent = 'link to details';
      link.href = item.show.url;
      link.target = '_blank';

      image.src = item.show.image && item.show.image.medium
        ? item.show.image.medium
        : 'https://placehold.co/210x295?text=Not%20Found';

      image.alt = 'image';

      article.appendChild(name);
      article.appendChild(link);
      article.appendChild(image);
      div.innerHTML = summary;
      article.appendChild(div);
      results.appendChild(article);
    });
  }
  catch (error) {
    console.error(error.message);
  }
});