var k=t=>{throw TypeError(t)};var A=(t,s,e)=>s.has(t)||k("Cannot "+e);var p=(t,s,e)=>(A(t,s,"read from private field"),e?e.call(t):s.get(t)),v=(t,s,e)=>s.has(t)?k("Cannot add the same private member more than once"):s instanceof WeakSet?s.add(t):s.set(t,e);(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function e(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(n){if(n.ep)return;n.ep=!0;const o=e(n);fetch(n.href,o)}})();var u,_;class M{constructor(){v(this,u,"cAC0PQfupJc4LZexavuatT33ADOVunkK");v(this,_,"https://app.ticketmaster.com/discovery/v2/events.json");this.page=0,this.pageSize=12,this.searchQuery=""}async fetchEvents(){const s=new URLSearchParams({apikey:p(this,u),page:this.page,size:this.pageSize,keyword:this.searchQuery,sort:"random"}),e=`${p(this,_)}?${s}&classificationName=music`,a=await fetch(e);if(!a.ok)throw new Error("Failed to fetch events");return a.json()}async fetchEventsById(s){const e=new URLSearchParams({apikey:p(this,u)}),a=`https://app.ticketmaster.com/discovery/v2/events/${s}.json?${e}`,n=await fetch(a);if(!n.ok)throw new Error("Failed to fetch events");return n.json()}}u=new WeakMap,_=new WeakMap;function H(t){return t.map(e=>{var r,m;const a=((r=e.images[2])==null?void 0:r.url)||"",n=e.name||"No name avaible",o=e.dates.start.localDate||"Unknown Date",i=((m=e._embedded)==null?void 0:m.venues[0].name)||"Unknown Location",c=e.url||"#";return`
      <li class="cards__item" data-id="${e.id}">
          <img src="${a}" alt="${n}" class="cards__img" />
          <h4 class="cards__event">${n}</h4>
          <p class="cards__date">${o}</p>
        <a href="${c}" target="_blank" rel="noopener noreferrer" class="cards__location">
          <svg class="cards__icon">
            <use href="/imgs/icons/symbol-defs.svg#location"></use>
          </svg>${i}
        </a>
      </li>
    `}).join("")}function N(t,s,e){const a=document.querySelector(".pagination__list");a.innerHTML="";const o=j(t,s).map(c=>c==="..."?`<li class="pagination__list__item">
          <span class="pagination__dots">...</span>
        </li>`:`<li class="pagination__list__item">
        <button class="pagination__list__button ${c===s?"active":""}" data-page="${c}">${c+1}</button>
      </li>`).join("");a.insertAdjacentHTML("beforeend",o),a.addEventListener("click",i);function i(c){if(c.target.tagName!=="BUTTON")return;const r=Number(c.target.dataset.page);r!==s&&e(r)}}function j(t,s){const e=[];if(t<=5)for(let n=0;n<t;n++)e.push(n);else{s>2&&e.push(0),s>3&&e.push("...");const n=Math.max(0,s-1),o=Math.min(t,s+2);for(let i=n;i<o;i++)e.push(i);s<t-3&&e.push("..."),s<t-2&&e.push(t-1)}return e}const U=document.getElementById("js-list"),R=document.querySelector(".pagination__list"),w=document.getElementById("searchInput");document.getElementById("headerForm");const d=new M;w.addEventListener("input",C);async function C(t){t.preventDefault(),d.searchQuery=w.value.trim(),d.page=0,x(),D(),await y()}y();async function y(){var s;const t=await d.fetchEvents();console.log(t);try{const e=await d.fetchEvents(),a=((s=e._embedded)==null?void 0:s.events)||[],n=H(a);U.insertAdjacentHTML("beforeend",n);const o=e.page.totalPages;N(o,d.page,P)}catch(e){console.error(e.status)}}function x(){U.innerHTML=""}function P(t){t!==d.page&&(d.page=t,x(),y())}function D(){R.innerHTML=""}function F(t){var b,$,E,L;const s=((b=t.images[2])==null?void 0:b.url)||"",e=t.info||t.description||"No description available",a=t.dates.start.localDate||"Unknown Date",n=t.dates.start.localTime||"Unknown Time",o=(($=t._embedded.venues[0])==null?void 0:$.name)||"Unknown Location",i=((E=t._embedded.venues[0])==null?void 0:E.city.name)||"",c=((L=t._embedded.venues[0])==null?void 0:L.country.name)||"",r=t.name||"No name avaible",m=t.priceRanges||[],f=m.find(g=>g.type==="standard")||"",h=m.find(g=>g.type==="vip")||"",I=Math.round(f.min),S=Math.round(f.max),B=Math.round(h.min),O=Math.round(h.max);return`
    <div class="modal">
        <button type="button" class="modal__btn-close" >
            <svg class="modal__icon-close">
                <use href="/imgs/icons/symbol-defs.svg#close"></use>
            </svg>
        </button>

        <img src="${s}" alt="${r}" class="modal__img" />

        <div class="modal__box">
            <img src="${s}" alt="${r}" class="modal__main-img" />

            <div class="modal__info">
                <h4 class="modal__title">INFO</h4>
                <p class="modal__text modal__description ">${e}</p>

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
    `}const K=document.getElementById("js-list"),l=document.getElementById("modal-card"),Q=new M;K.addEventListener("click",V);async function V(t){const s=t.target.closest(".cards__item");if(!s)return;const e=s.dataset.id;console.log(e);try{const a=await Q.fetchEventsById(e),n=F(a);l.insertAdjacentHTML("beforeend",n),l.classList.remove("hidden"),l.addEventListener("click",T)}catch(a){console.error(a)}}function T(t){(t.target.classList.contains("modal__btn-close")||t.target===l)&&(l.classList.add("hidden"),l.removeEventListener("click",T),l.innerHTML="")}
//# sourceMappingURL=index.js.map
