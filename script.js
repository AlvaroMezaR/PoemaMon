// script.js

document.getElementById('open-btn').addEventListener('click', function() {
    const card = document.getElementById('card');
    const cardInner = document.getElementById('card-inner');

    if (card.style.transform === 'rotateY(180deg)') {
      card.style.transform = 'rotateY(0deg)';
    } else {
      card.style.transform = 'rotateY(180deg)';
    }
  });
  