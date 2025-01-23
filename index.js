var p=e=>{throw TypeError(e)};var v=(e,s,t)=>s.has(e)||p("Cannot "+t);var r=(e,s,t)=>(v(e,s,"read from private field"),t?t.call(e):s.get(e)),m=(e,s,t)=>s.has(e)?p("Cannot add the same private member more than once"):s instanceof WeakSet?s.add(e):s.set(e,t);(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function t(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(a){if(a.ep)return;a.ep=!0;const o=t(a);fetch(a.href,o)}})();var d,i;class f{constructor(){m(this,d,"cAC0PQfupJc4LZexavuatT33ADOVunkK");m(this,i,"https://app.ticketmaster.com/discovery/v2/events.json");this.page=0,this.pageSize=12}getApiKey(){return r(this,d)}getBaseUrl(){return r(this,i)}async fetchEvents({id:s=null}={}){const t=new URLSearchParams({apikey:r(this,d),page:this.page,size:this.pageSize}),n=s?`${r(this,i)}/${s}?${t}`:`${r(this,i)}?${t}&classificationName=music`,a=await fetch(n);if(!a.ok)throw new Error("Failed to fetch events");return a.json()}}d=new WeakMap,i=new WeakMap;function y(e){return e.map(t=>{var _,u;const n=((_=t.images[0])==null?void 0:_.url)||"",a=t.name||"No name avaible",o=t.dates.start.localDate||"Unknown Date",l=((u=t._embedded)==null?void 0:u.venues[0].name)||"Unknown Location",h=t.url||"#";return`
<li class="cards__item" data-id="${t.id}">
          <img src="${n}" alt="${a}" class="cards__img" />
          <h4 class="cards__event">${a}</h4>
          <p class="cards__date">${o}</p>
        <a href="${h}" target="_blank" rel="noopener noreferrer" class="cards__location">
          <svg class="cards__icon">
            <use href="/imgs/icons/symbol-defs.svg#location"></use>
          </svg>
          ${l}
        </a>
      </li>
    `}).join("")}const b=document.getElementById("js-list");document.querySelector(".pagination__list");const E=new f;k();async function k(){var e;try{const t=((e=(await E.fetchEvents())._embedded)==null?void 0:e.events)||[],n=y(t);b.insertAdjacentHTML("beforeend",n)}catch(s){console.error(s)}}function U(e){return`
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
    `}const L=document.getElementById("js-list"),c=document.getElementById("modal-card"),A=new f;L.addEventListener("click",x);async function x(e){const s=e.target.closest(".cards__item");if(s){s.dataset.id;try{const t=await A.fetchEvents("1a9Zk7Y34xAZe56"),n=U(t);c.insertAdjacentHTML("beforeend",n),c.classList.remove("hidden"),c.addEventListener("click",g)}catch(t){console.error(t)}}}function g(e){(e.target.classList.contains("modal__btn-close")||e.target===c)&&(c.classList.add("hidden"),c.removeEventListener("click",g),c.innerHTML="")}
//# sourceMappingURL=index.js.map
