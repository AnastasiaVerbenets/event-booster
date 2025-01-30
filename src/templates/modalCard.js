export default function modalMarkUp(event) {
    const imgUrl = event.images[2]?.url || '';
    const description = event.info || event.description || 'No description available';
    const date = event.dates.start.localDate || 'Unknown Date';
    const time = event.dates.start.localTime || 'Unknown Time';
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
                <p class="modal__text modal__text-ticket">
                    <svg class="modal__ticket">
                        <use href="/imgs/icons/symbol-defs.svg#ticket"></use>
                    </svg> Standart ${standardMin}-${standardMax} ${standardPrice.currency}
                </p>
                <button class="modal__buy-btn">BUY TICKETS</button>
                <p class="modal__text modal__text-ticket">
                    <svg class="modal__ticket">
                        <use href="/imgs/icons/symbol-defs.svg#ticket"></use>
                    </svg>  VIP ${vipMin}-${vipMax} ${vipPrice.currency}
                </p>
                <button class="modal__buy-btn">BUY TICKETS</button>
            </div>
        </div>
        <button class="modal__more-btn">MORE FROM THIS AUTHOR</button>
    </div>
    `;
}