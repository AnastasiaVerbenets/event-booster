export default function modalMarkUp(modal) {
    return `
    <div class="modal" id="js-modal">
        <button type="button" class="modal__btn-close">
            <svg class="modal__icon-close">
                <use href="../imgs/icons/symbol-defs.svg#close"></use>
            </svg>
        </button>

        <img src="../imgs/modal/artist.png" alt="" class="modal__img" />

        <div class="modal__box">
            <img src="../imgs/modal/main-img.png" alt="" class="modal__main-img" />

            <div class="modal__info">
                <h4 class="modal__title">INFO</h4>
                <p class="modal__text">Atlas Weekend is the largest music festival in Ukraine.
                    More than 200 artists will create a proper music festival atmosphere on 10 stages</p>

                <h4 class="modal__title">WHEN</h4>
                <p class="modal__text modal__text--none">2021-06-09</p>
                <p class="modal__text">20:00 (Kyiv/Ukraine)</p>

                <h4 class="modal__title">WHERE</h4>
                <p class="modal__text modal__text--none">Kyiv, Ukraine</p>
                <p class="modal__text">VDNH</p>

                <h4 class="modal__title">WHO</h4>
                <p class="modal__text">The Black Eyed Peas</p>

                <h4 class="modal__title">PRICES</h4>
                <p class="modal__tex modal__text-ticket">
                    <svg class="modal__ticket">
                        <use href="../imgs/icons/symbol-defs.svg#ticket"></use>
                    </svg> Standart 300-500 UAH
                </p>
                <button class="modal__buy-btn">BUY TICKETS</button>

                <p class="modal__text modal__text-ticket">
                    <svg class="modal__ticket">
                        <use href="../imgs/icons/symbol-defs.svg#ticket"></use>
                    </svg>
                    VIP 1000-1500 UAH
                </p>
                <button class="modal__buy-btn">BUY TICKETS</button>
            </div>
        </div>
        <button class="modal__more-btn">MORE FROM THIS AUTHOR</button>

    </div>
    `
}