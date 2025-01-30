var y=t=>{throw TypeError(t)};var U=(t,e,s)=>e.has(t)||y("Cannot "+s);var p=(t,e,s)=>(U(t,e,"read from private field"),s?s.call(t):e.get(t)),f=(t,e,s)=>e.has(t)?y("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,s);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(n){if(n.ep)return;n.ep=!0;const o=s(n);fetch(n.href,o)}})();var u,_;class b{constructor(){f(this,u,"cAC0PQfupJc4LZexavuatT33ADOVunkK");f(this,_,"https://app.ticketmaster.com/discovery/v2/events.json");this.page=0,this.pageSize=12,this.searchQuery=""}async fetchEvents(){const e=new URLSearchParams({apikey:p(this,u),page:this.page,size:this.pageSize,keyword:this.searchQuery,sort:"rendom"}),s=`${p(this,_)}?${e}&classificationName=music`,a=await fetch(s);if(!a.ok)throw new Error("Failed to fetch events");return a.json()}async fetchEventsById(e){const s=new URLSearchParams({apikey:p(this,u)}),a=`https://app.ticketmaster.com/discovery/v2/events/${e}.json?${s}`,n=await fetch(a);if(!n.ok)throw new Error("Failed to fetch events");return n.json()}}u=new WeakMap,_=new WeakMap;function w(t){return t.map(s=>{var r,m;const a=((r=s.images[0])==null?void 0:r.url)||"",n=s.name||"No name avaible",o=s.dates.start.localDate||"Unknown Date",i=((m=s._embedded)==null?void 0:m.venues[0].name)||"Unknown Location",c=s.url||"#";return`
<li class="cards__item" data-id="${s.id}">
          <img src="${a}" alt="${n}" class="cards__img" />
          <h4 class="cards__event">${n}</h4>
          <p class="cards__date">${o}</p>
        <a href="${c}" target="_blank" rel="noopener noreferrer" class="cards__location">
          <svg class="cards__icon">
            <use href="/imgs/icons/symbol-defs.svg#location"></use>
          </svg>
          ${i}
        </a>
      </li>
    `}).join("")}function M(t,e,s){const a=document.querySelector(".pagination__list");a.innerHTML="";const o=B(t,e).map(c=>c==="..."?`<li class="pagination__list__item">
          <span class="pagination__dots">...</span>
        </li>`:`<li class="pagination__list__item">
        <button class="pagination__list__button ${c===e?"active":""}" data-page="${c}">${c+1}</button>
      </li>`).join("");a.insertAdjacentHTML("beforeend",o),a.addEventListener("click",i);function i(c){if(c.target.tagName!=="BUTTON")return;const r=Number(c.target.dataset.page);r!==e&&s(r)}}function B(t,e){const s=[];if(t<=5)for(let n=0;n<t;n++)s.push(n);else{e>2&&s.push(0),e>3&&s.push("...");const n=Math.max(0,e-1),o=Math.min(t,e+2);for(let i=n;i<o;i++)s.push(i);e<t-3&&s.push("..."),e<t-2&&s.push(t-1)}return s}const L=document.getElementById("js-list"),I=document.querySelector(".pagination__list"),E=document.getElementById("searchInput");document.getElementById("headerForm");const d=new b;E.addEventListener("input",S);async function S(t){t.preventDefault(),d.searchQuery=E.value.trim(),d.page=0,$(),x(),await h()}h();async function h(){var t;try{const e=await d.fetchEvents(),s=((t=e._embedded)==null?void 0:t.events)||[],a=w(s);L.insertAdjacentHTML("beforeend",a);const n=e.page.totalPages;M(n,d.page,T)}catch(e){console.error(e)}}function $(){L.innerHTML=""}function T(t){t!==d.page&&(d.page=t,$(),h())}function x(){I.innerHTML=""}function O(t){var r,m,g,v;const e=((r=t.images[0])==null?void 0:r.url)||"",s=t.description||"No description available",a=t.dates.start.localDate||"Unknown Date",n=((m=t._embedded.venues[0])==null?void 0:m.name)||"Unknown Location",o=((g=t._embedded.venues[0])==null?void 0:g.city.name)||"",i=((v=t._embedded.venues[0])==null?void 0:v.country.name)||"",c=t.name||"No name avaible";return`
    <div class="modal" id="js-modal">
        <button type="button" class="modal__btn-close">
            <svg class="modal__icon-close">
                <use href="/imgs/icons/symbol-defs.svg#close"></use>
            </svg>
        </button>

        <img src="${e}" alt="${c}" class="modal__img" />

        <div class="modal__box">
            <img src="${e}" alt="${c}" class="modal__main-img" />

            <div class="modal__info">
                <h4 class="modal__title">INFO</h4>
                <p class="modal__text">${s}</p>

                <h4 class="modal__title">WHEN</h4>
                <p class="modal__text">${a}</p>
                <p class="modal__text">${time}</p>

                <h4 class="modal__title">WHERE</h4>
                <p class="modal__text">${n}</p>
                <p class="modal__text">${o}, ${i}</p>

                <h4 class="modal__title">WHO</h4>
                <p class="modal__text">${c}</p>

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
    `}const j=document.getElementById("js-list"),l=document.getElementById("modal-card"),A=new b;j.addEventListener("click",H);async function H(t){const e=t.target.closest(".cards__item");if(!e)return;const s=e.dataset.id;console.log(s);try{const a=await A.fetchEventsById(s),n=O(a);l.insertAdjacentHTML("beforeend",n),l.classList.remove("hidden"),l.addEventListener("click",k)}catch(a){console.error(a)}}function k(t){(t.target.classList.contains("modal__btn-close")||t.target===l)&&(l.classList.add("hidden"),l.removeEventListener("click",k),l.innerHTML="")}
//# sourceMappingURL=index.js.map
