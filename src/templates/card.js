export default function markUpEvents(events) {
  const markUp = events
    .map(
      event => {
        const imgUrl = event.images[0]?.url || '';
        const artist = event.name || 'No name avaible';
        const date = event.dates.start.localDate || 'Unknown Date';
        const location = event._embedded?.venues[0].name || 'Unknown Location';
        const eventUrl = event.url || '#';

        return `
<li class="cards__item" data-id="${event.id}">
          <img src="${imgUrl}" alt="${artist}" class="cards__img" />
          <h4 class="cards__event">${artist}</h4>
          <p class="cards__date">${date}</p>
        <a href="${eventUrl}" target="_blank" rel="noopener noreferrer" class="cards__location">
          <svg class="cards__icon">
            <use href="/imgs/icons/symbol-defs.svg#location"></use>
          </svg>
          ${location}
        </a>
      </li>
    `});

  return markUp.join('');
}
