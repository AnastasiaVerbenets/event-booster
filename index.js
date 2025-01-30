var k=t=>{throw TypeError(t)};var A=(t,e,s)=>e.has(t)||k("Cannot "+s);var p=(t,e,s)=>(A(t,e,"read from private field"),s?s.call(t):e.get(t)),v=(t,e,s)=>e.has(t)?k("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,s);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(n){if(n.ep)return;n.ep=!0;const o=s(n);fetch(n.href,o)}})();var u,_;class M{constructor(){v(this,u,"cAC0PQfupJc4LZexavuatT33ADOVunkK");v(this,_,"https://app.ticketmaster.com/discovery/v2/events.json");this.page=0,this.pageSize=12,this.searchQuery=""}async fetchEvents(){const e=new URLSearchParams({apikey:p(this,u),page:this.page,size:this.pageSize,keyword:this.searchQuery,sort:"random"}),s=`${p(this,_)}?${e}&classificationName=music`,a=await fetch(s);if(!a.ok)throw new Error("Failed to fetch events");return a.json()}async fetchEventsById(e){const s=new URLSearchParams({apikey:p(this,u)}),a=`https://app.ticketmaster.com/discovery/v2/events/${e}.json?${s}`,n=await fetch(a);if(!n.ok)throw new Error("Failed to fetch events");return n.json()}}u=new WeakMap,_=new WeakMap;function H(t){return t.map(s=>{var r,m;const a=((r=s.images[2])==null?void 0:r.url)||"",n=s.name||"No name avaible",o=s.dates.start.localDate||"Unknown Date",i=((m=s._embedded)==null?void 0:m.venues[0].name)||"Unknown Location",c=s.url||"#";return`
      <li class="cards__item" data-id="${s.id}">
          <img src="${a}" alt="${n}" class="cards__img" />
          <h4 class="cards__event">${n}</h4>
          <p class="cards__date">${o}</p>
        <a href="${c}" target="_blank" rel="noopener noreferrer" class="cards__location">
          <svg class="cards__icon">
            <use href="/imgs/icons/symbol-defs.svg#location"></use>
          </svg>${i}
        </a>
      </li>
    `}).join("")}function N(t,e,s){const a=document.querySelector(".pagination__list");a.innerHTML="";const o=j(t,e).map(c=>c==="..."?`<li class="pagination__list__item">
          <span class="pagination__dots">...</span>
        </li>`:`<li class="pagination__list__item">
        <button class="pagination__list__button ${c===e?"active":""}" data-page="${c}">${c+1}</button>
      </li>`).join("");a.insertAdjacentHTML("beforeend",o),a.addEventListener("click",i);function i(c){if(c.target.tagName!=="BUTTON")return;const r=Number(c.target.dataset.page);r!==e&&s(r)}}function j(t,e){const s=[];if(t<=5)for(let n=0;n<t;n++)s.push(n);else{e>2&&s.push(0),e>3&&s.push("...");const n=Math.max(0,e-1),o=Math.min(t,e+2);for(let i=n;i<o;i++)s.push(i);e<t-3&&s.push("..."),e<t-2&&s.push(t-1)}return s}const U=document.getElementById("js-list"),R=document.querySelector(".pagination__list"),x=document.getElementById("searchInput");document.getElementById("headerForm");const d=new M;y();x.addEventListener("input",C);async function C(t){t.preventDefault(),d.searchQuery=x.value.trim(),d.page=0,w(),D(),await y()}async function y(){var t;try{const e=await d.fetchEvents(),s=((t=e._embedded)==null?void 0:t.events)||[],a=H(s);U.insertAdjacentHTML("beforeend",a);const n=e.page.totalPages;N(n,d.page,P)}catch(e){console.error(e.status)}}function w(){U.innerHTML=""}function P(t){t!==d.page&&(d.page=t,w(),y())}function D(){R.innerHTML=""}function F(t){var b,$,E,L;const e=((b=t.images[2])==null?void 0:b.url)||"",s=t.info||t.description||"No description available",a=t.dates.start.localDate||"Unknown Date",n=t.dates.start.localTime||"Unknown Time",o=(($=t._embedded.venues[0])==null?void 0:$.name)||"Unknown Location",i=((E=t._embedded.venues[0])==null?void 0:E.city.name)||"",c=((L=t._embedded.venues[0])==null?void 0:L.country.name)||"",r=t.name||"No name avaible",m=t.priceRanges||[],f=m.find(g=>g.type==="standard")||"",h=m.find(g=>g.type==="vip")||"",I=Math.round(f.min),S=Math.round(f.max),B=Math.round(h.min),O=Math.round(h.max);return`
    <div class="modal">
        <button type="button" class="modal__btn-close" >
            <svg class="modal__icon-close">
                <use href="/imgs/icons/symbol-defs.svg#close"></use>
            </svg>
        </button>

        <img src="${e}" alt="${r}" class="modal__img" />

        <div class="modal__box">
            <img src="${e}" alt="${r}" class="modal__main-img" />

            <div class="modal__info">
                <h4 class="modal__title">INFO</h4>
                <p class="modal__text modal__description ">${s}</p>

                <h4 class="modal__title">WHEN</h4>
                <p class="modal__text modal__text--none">${a}</p>
                <p class="modal__text">${n} (${i}/${c})</p>

                <h4 class="modal__title">WHERE</h4>
                <p class="modal__text modal__text--none">${o}</p>
                <p class="modal__text">${i}, ${c}</p>

                <h4 class="modal__title">WHO</h4>
                <p class="modal__text">${r}</p>

                <h4 class="modal__title">PRICES</h4>
                <p class="modal__text modal__text-ticket">
                    <svg class="modal__ticket">
                        <use href="/imgs/icons/symbol-defs.svg#ticket"></use>
                    </svg> Standart ${I}-${S} ${f.currency}
                </p>
                <button class="modal__buy-btn">BUY TICKETS</button>
                <p class="modal__text modal__text-ticket">
                    <svg class="modal__ticket">
                        <use href="/imgs/icons/symbol-defs.svg#ticket"></use>
                    </svg>  VIP ${B}-${O} ${h.currency}
                </p>
                <button class="modal__buy-btn">BUY TICKETS</button>
            </div>
        </div>
        <button class="modal__more-btn">MORE FROM THIS AUTHOR</button>
    </div>
    `}const K=document.getElementById("js-list"),l=document.getElementById("modal-card"),Q=new M;K.addEventListener("click",V);async function V(t){const e=t.target.closest(".cards__item");if(!e)return;const s=e.dataset.id;console.log(s);try{const a=await Q.fetchEventsById(s),n=F(a);l.insertAdjacentHTML("beforeend",n),l.classList.remove("hidden"),l.addEventListener("click",T)}catch(a){console.error(a)}}function T(t){(t.target.classList.contains("modal__btn-close")||t.target===l)&&(l.classList.add("hidden"),l.removeEventListener("click",T),l.innerHTML="")}
//# sourceMappingURL=index.js.map
