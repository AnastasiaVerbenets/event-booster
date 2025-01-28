var v=e=>{throw TypeError(e)};var k=(e,t,s)=>t.has(e)||v("Cannot "+s);var m=(e,t,s)=>(k(e,t,"read from private field"),s?s.call(e):t.get(e)),p=(e,t,s)=>t.has(e)?v("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function s(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(a){if(a.ep)return;a.ep=!0;const o=s(a);fetch(a.href,o)}})();var u,_;class y{constructor(){p(this,u,"cAC0PQfupJc4LZexavuatT33ADOVunkK");p(this,_,"https://app.ticketmaster.com/discovery/v2/events.json");this.page=0,this.pageSize=12,this.searchQuery=""}async fetchEvents(){const t=new URLSearchParams({apikey:m(this,u),page:this.page,size:this.pageSize,keyword:this.searchQuery}),s=`${m(this,_)}?${t}&classificationName=music`,n=await fetch(s);if(!n.ok)throw new Error("Failed to fetch events");return n.json()}async fetchEventsById(t){const s=new URLSearchParams({apikey:m(this,u),page:this.page,size:this.pageSize,keyword:this.searchQuery}),n=`${m(this,_)}/${t}?${s}`,a=await fetch(n);if(!a.ok)throw new Error("Failed to fetch events");return a.json()}}u=new WeakMap,_=new WeakMap;function w(e){return e.map(s=>{var l,d;const n=((l=s.images[0])==null?void 0:l.url)||"",a=s.name||"No name avaible",o=s.dates.start.localDate||"Unknown Date",c=((d=s._embedded)==null?void 0:d.venues[0].name)||"Unknown Location",i=s.url||"#";return`
<li class="cards__item" data-id="${s.id}">
          <img src="${n}" alt="${a}" class="cards__img" />
          <h4 class="cards__event">${a}</h4>
          <p class="cards__date">${o}</p>
        <a href="${i}" target="_blank" rel="noopener noreferrer" class="cards__location">
          <svg class="cards__icon">
            <use href="/imgs/icons/symbol-defs.svg#location"></use>
          </svg>
          ${c}
        </a>
      </li>
    `}).join("")}const b=document.getElementById("js-list"),U=document.querySelector(".pagination__list"),E=document.getElementById("searchInput");document.getElementById("headerForm");const h=new y;E.addEventListener("input",I);async function I(e){e.preventDefault(),h.searchQuery=E.value.trim(),h.page=0,S(),P(),await L()}L();async function L(){var e;try{const s=((e=(await h.fetchEvents())._embedded)==null?void 0:e.events)||[],n=w(s);b.insertAdjacentHTML("beforeend",n)}catch(t){console.error(t)}}function S(){b.innerHTML=""}function P(){U.innerHTML=""}function O(e){var l,d,f,g;const t=((l=e.images[0])==null?void 0:l.url)||"",s=e.description||"No description available",n=e.dates.start.localDate||"Unknown Date",a=((d=e._embedded.venues[0])==null?void 0:d.name)||"Unknown Location",o=((f=e._embedded.venues[0])==null?void 0:f.city.name)||"",c=((g=e._embedded.venues[0])==null?void 0:g.country.name)||"",i=e.name||"No name avaible";return`
    <div class="modal" id="js-modal">
        <button type="button" class="modal__btn-close">
            <svg class="modal__icon-close">
                <use href="/imgs/icons/symbol-defs.svg#close"></use>
            </svg>
        </button>

        <img src="${t}" alt="${i}" class="modal__img" />

        <div class="modal__box">
            <img src="${t}" alt="${i}" class="modal__main-img" />

            <div class="modal__info">
                <h4 class="modal__title">INFO</h4>
                <p class="modal__text">${s}</p>

                <h4 class="modal__title">WHEN</h4>
                <p class="modal__text">${n}</p>
                <p class="modal__text">${time}</p>

                <h4 class="modal__title">WHERE</h4>
                <p class="modal__text">${a}</p>
                <p class="modal__text">${o}, ${c}</p>

                <h4 class="modal__title">WHO</h4>
                <p class="modal__text">${i}</p>

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
    `}const A=document.getElementById("js-list"),r=document.getElementById("modal-card"),M=new y;A.addEventListener("click",x);async function x(e){const t=e.target.closest(".cards__item");if(!t)return;const s=t.dataset.id;console.log(s);try{const n=await M.fetchEventsById(s),a=O(n);r.insertAdjacentHTML("beforeend",a),r.classList.remove("hidden"),r.addEventListener("click",$)}catch(n){console.error(n)}}function $(e){(e.target.classList.contains("modal__btn-close")||e.target===r)&&(r.classList.add("hidden"),r.removeEventListener("click",$),r.innerHTML="")}
//# sourceMappingURL=index.js.map
