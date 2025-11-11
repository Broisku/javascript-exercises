'use strict';

const real_list = ['First item', 'Second item', 'Third item'];

const list = document.querySelector('#target')

list.innerHTML = real_list.map(item => `<li>${item}</li>`).join('');