export default function modalMarkUp(event) {
    const eventUrl = event.url || '#';
    const imgUrl = event.images[2]?.url || '';
    const description = event.info || event.description || 'No description available';
    const date = event.dates.start.localDate || 'Unknown Date';
    const time = formatTime(event.dates.start.localTime);
    const location = event._embedded.venues[0]?.name || 'Unknown Location';
    const city = event._embedded.venues[0]?.city.name || '';
    const country = event._embedded.venues[0]?.country.name || '';
    const artist = event.name || 'No name avaible';

    const priceRanges = event.priceRanges || [];
    const standardPrice = priceRanges.find(price => price.type === 'standard') || '';
    const vipPrice = priceRanges.find(price => price.type === 'vip') || '';
    const standardMin = Math.round(standardPrice.min);
    const standardMax = Math.round(standardPrice.max);
    const vipMin = Math.round(vipPrice.min);
    const vipMax = Math.round(vipPrice.max);

    const standardBox = standardPrice ? `
        <p class="modal__text modal__text-ticket ">
           <img src="../imgs/modal/ticket.svg" alt="" class="modal__ticket">
            Standart ${standardMin}-${standardMax} ${standardPrice.currency}
        </p>
        <button class="modal__buy-btn">BUY TICKETS</button>`
        :
        `<p class="modal__text modal__text-ticket modal__text-standart">
        <img src="../imgs/modal/ticket.svg" alt="" class="modal__ticket">
             Standart tickets are not available
        </p>`;

    const vipBox = vipPrice ? `
        <p class="modal__text modal__text-ticket">
           <img src="../imgs/modal/ticket.svg" alt="" class="modal__ticket">
            VIP ${vipMin}-${vipMax} ${vipPrice.currency}
        </p>
        <button class="modal__buy-btn">BUY TICKETS</button>` :
        `<p class="modal__text modal__text-ticket">
        <img src="../imgs/modal/ticket.svg" alt="" class="modal__ticket">
             VIP tickets are not available
        </p>`;

    function formatTime(timeString) {
        if (!timeString) return 'Unknown Time';
        const [hours, minutes] = timeString.split(':');
        return `${hours}:${minutes}`;
    };

    return `
    <div class="modal">
        <button type="button" class="modal__btn-close" >
            <svg class="modal__icon-close">
                <use href="/imgs/icons/symbol-defs.svg#close"></use>
            </svg>
        </button>

        <img src="${imgUrl}" alt="${artist}" class="modal__img" />

        <div class="modal__box">
            <img src="${imgUrl}" alt="${artist}" class="modal__main-img" />

            <div class="modal__info">
                <h4 class="modal__title">INFO</h4>
                <p class="modal__text modal__description ">${description}</p>

                <h4 class="modal__title">WHEN</h4>
                <p class="modal__text modal__text--none">${date}</p>
                <p class="modal__text">${time} (${city}/${country})</p>

                <h4 class="modal__title">WHERE</h4>
                <p class="modal__text modal__text--none">${location}</p>
                <p class="modal__text">${city}, ${country}</p>

                <h4 class="modal__title">WHO</h4>
                <p class="modal__text">${artist}</p>

                <h4 class="modal__title">PRICES</h4>
                ${standardBox}
                ${vipBox}
            </div>
        </div>
        <button class="modal__more-btn">MORE FROM THIS AUTHOR</button>
    </div>
    `;
}