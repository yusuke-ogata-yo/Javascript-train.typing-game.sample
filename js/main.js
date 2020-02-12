'use strict';

{
  const word = 'apple';

  const target = document.getElementById('target');
  target.textContent = word;
  window.addEventListener('keydown', (e) => {
    console.log(e.key);
  });
}