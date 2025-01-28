export default function modalMarkUp(event) {
    const imgUrl = event.images[0]?.url || '';
    const description = event.description || 'No description available';
    const date = event.dates.start.localDate || 'Unknown Date';
    // const time = event;
    const location = event._embedded.venues[0]?.name || 'Unknown Location';
    const city = event._embedded.venues[0]?.city.name || '';
    const country = event._embedded.venues[0]?.country.name || '';
    const artist = event.name || 'No name avaible';


    return `
    <div class="modal" id="js-modal">
        <button type="button" class="modal__btn-close">
            <svg class="modal__icon-close">
                <use href="/imgs/icons/symbol-defs.svg#close"></use>
            </svg>
        </button>

        <img src="${imgUrl}" alt="${artist}" class="modal__img" />

        <div class="modal__box">
            <img src="${imgUrl}" alt="${artist}" class="modal__main-img" />

            <div class="modal__info">
                <h4 class="modal__title">INFO</h4>
                <p class="modal__text">${description}</p>

                <h4 class="modal__title">WHEN</h4>
                <p class="modal__text">${date}</p>
                <p class="modal__text">${time}</p>

                <h4 class="modal__title">WHERE</h4>
                <p class="modal__text">${location}</p>
                <p class="modal__text">${city}, ${country}</p>

                <h4 class="modal__title">WHO</h4>
                <p class="modal__text">${artist}</p>

                <h4 class="modal__title">PRICES</h4>
                <p class="modal__text modal__text-ticket">
                    <svg class="modal__ticket">
                        <use href="/imgs/icons/symbol-defs.svg#ticket"></use>
                    </svg> Prices vary
                </p>
                <button class="modal__buy-btn">BUY TICKETS</button>
            </div>
        </div>
        <button class="modal__more-btn">MORE FROM THIS AUTHOR</button>
    </div>
    `;
}