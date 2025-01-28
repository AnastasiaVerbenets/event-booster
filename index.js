var f=e=>{throw TypeError(e)};var k=(e,s,t)=>s.has(e)||f("Cannot "+t);var l=(e,s,t)=>(k(e,s,"read from private field"),t?t.call(e):s.get(e)),m=(e,s,t)=>s.has(e)?f("Cannot add the same private member more than once"):s instanceof WeakSet?s.add(e):s.set(e,t);(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const n of a)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function t(a){const n={};return a.integrity&&(n.integrity=a.integrity),a.referrerPolicy&&(n.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?n.credentials="include":a.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(a){if(a.ep)return;a.ep=!0;const n=t(a);fetch(a.href,n)}})();var d,i;class g{constructor(){m(this,d,"cAC0PQfupJc4LZexavuatT33ADOVunkK");m(this,i,"https://app.ticketmaster.com/discovery/v2/events.json");this.page=0,this.pageSize=12,this.searchQuery=""}async fetchEvents({id:s=null}={}){const t=new URLSearchParams({apikey:l(this,d),page:this.page,size:this.pageSize,keyword:this.searchQuery}),o=s?`${l(this,i)}/${s}?${t}`:`${l(this,i)}?${t}&classificationName=music`,a=await fetch(o);if(!a.ok)throw new Error("Failed to fetch events");return a.json()}}d=new WeakMap,i=new WeakMap;function L(e){return e.map(t=>{var _,p;const o=((_=t.images[0])==null?void 0:_.url)||"",a=t.name||"No name avaible",n=t.dates.start.localDate||"Unknown Date",r=((p=t._embedded)==null?void 0:p.venues[0].name)||"Unknown Location",E=t.url||"#";return`
<li class="cards__item" data-id="${t.id}">
          <img src="${o}" alt="${a}" class="cards__img" />
          <h4 class="cards__event">${a}</h4>
          <p class="cards__date">${n}</p>
        <a href="${E}" target="_blank" rel="noopener noreferrer" class="cards__location">
          <svg class="cards__icon">
            <use href="/imgs/icons/symbol-defs.svg#location"></use>
          </svg>
          ${r}
        </a>
      </li>
    `}).join("")}const h=document.getElementById("js-list"),U=document.querySelector(".pagination__list"),v=document.getElementById("searchInput");document.getElementById("headerForm");const u=new g;v.addEventListener("input",x);async function x(e){e.preventDefault(),u.searchQuery=v.value.trim(),u.page=0,A(),S(),await y()}y();async function y(){var e;try{const t=((e=(await u.fetchEvents())._embedded)==null?void 0:e.events)||[],o=L(t);h.insertAdjacentHTML("beforeend",o)}catch(s){console.error(s)}}function A(){h.innerHTML=""}function S(){U.innerHTML=""}function w(e){return`
    <div class="modal" id="js-modal">
        <button type="button" class="modal__btn-close">
            <svg class="modal__icon-close">
                <use href="/imgs/icons/symbol-defs.svg#close"></use>
            </svg>
        </button>

        <img src="/imgs/modal/artist.png" alt="" class="modal__img" />

        <div class="modal__box">
            <img src="/imgs/modal/main-img.png" alt="" class="modal__main-img" />

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
    `}const I=document.getElementById("js-list"),c=document.getElementById("modal-card"),H=new g;I.addEventListener("click",T);async function T(e){const s=e.target.closest(".cards__item");if(s){s.dataset.id;try{const t=await H.fetchEvents("1a9Zk7Y34xAZe56"),o=w(t);c.insertAdjacentHTML("beforeend",o),c.classList.remove("hidden"),c.addEventListener("click",b)}catch(t){console.error(t)}}}function b(e){(e.target.classList.contains("modal__btn-close")||e.target===c)&&(c.classList.add("hidden"),c.removeEventListener("click",b),c.innerHTML="")}
//# sourceMappingURL=index.js.map
