const list = document.querySelector('.cards__list');

function renderCards(cards) {
  const markUp = cards.map(card => {
    return `
       <li class="cards__item">
          <img src="${card.url}" alt="" class="cards__img" />
          <h4 class="cards__event">${card.name}</h4>
          <p class="cards__date">${card.dates}</p>
          <p class="cards__place">
            <img src="../img/place.svg" alt="" />
            ${card.locate}
          </p>
      </li>
        `;
  }).join('');

  list.insertAdjacentHTML('beforeend', markUp);
}
