var b=t=>{throw TypeError(t)};var j=(t,e,s)=>e.has(t)||b("Cannot "+s);var E=(t,e,s)=>(j(t,e,"read from private field"),s?s.call(t):e.get(t)),f=(t,e,s)=>e.has(t)?b("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,s);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function s(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(a){if(a.ep)return;a.ep=!0;const i=s(a);fetch(a.href,i)}})();var h,_;class H{constructor(){f(this,h,"cAC0PQfupJc4LZexavuatT33ADOVunkK");f(this,_,"https://app.ticketmaster.com/discovery/v2/events.json");this.page=0,this.pageSize=12,this.searchQuery=""}async fetchEvents(){const e=new URLSearchParams({apikey:E(this,h),page:this.page,size:this.pageSize,keyword:this.searchQuery,sort:"random"}),s=`${E(this,_)}?${e}&classificationName=music`,n=await fetch(s);if(!n.ok)throw new Error("Failed to fetch events");return n.json()}async fetchEventsById(e){const s=new URLSearchParams({apikey:E(this,h)}),n=`https://app.ticketmaster.com/discovery/v2/events/${e}.json?${s}`,a=await fetch(n);if(!a.ok)throw new Error("Failed to fetch events");return a.json()}}h=new WeakMap,_=new WeakMap;function P(t){return t.map(s=>{var c,m;const n=((c=s.images[2])==null?void 0:c.url)||"",a=s.name||"No name avaible",i=s.dates.start.localDate||"Unknown Date",o=((m=s._embedded)==null?void 0:m.venues[0].name)||"Unknown Location",l=s.url||"#";return`
      <li class="cards__item" data-id="${s.id}">
          <img src="${n}" alt="${a}" class="cards__img" />
          <h4 class="cards__event">${a}</h4>
          <p class="cards__date">${i}</p>
        <a href="${l}" target="_blank" rel="noopener noreferrer" class="cards__location">
          <svg class="cards__icon">
            <use href="/imgs/icons/symbol-defs.svg#location"></use>
          </svg>${o}
        </a>
      </li>
    `}).join("")}function R(t,e,s){const n=document.querySelector(".pagination__list");n.innerHTML="";const i=F(t,e).map(l=>l==="..."?`<li class="pagination__list__item">
          <span class="pagination__dots">...</span>
        </li>`:`<li class="pagination__list__item">
        <button class="pagination__list__button ${l===e?"active":""}" data-page="${l}">${l+1}</button>
      </li>`).join("");n.insertAdjacentHTML("beforeend",i),n.addEventListener("click",o);function o(l){if(l.target.tagName!=="BUTTON")return;const c=Number(l.target.dataset.page);c!==e&&s(c)}}function F(t,e){const s=[];if(t<=5)for(let a=0;a<t;a++)s.push(a);else{e>2&&s.push(0),e>3&&s.push("...");const a=Math.max(0,e-1),i=Math.min(t,e+2);for(let o=a;o<i;o++)s.push(o);e<t-3&&s.push("..."),e<t-2&&s.push(t-1)}return s}const x=document.getElementById("js-list"),D=document.querySelector(".pagination__list"),$=document.getElementById("searchInput");document.getElementById("headerForm");const p=new H;g();$.addEventListener("input",K);async function K(t){t.preventDefault(),p.searchQuery=$.value.trim(),p.page=0,k(),V(),await g()}async function g(){var t;try{const e=await p.fetchEvents(),s=((t=e._embedded)==null?void 0:t.events)||[],n=P(s);x.insertAdjacentHTML("beforeend",n);const a=e.page.totalPages;R(a,p.page,Q)}catch(e){console.error(e.status)}}function k(){x.innerHTML=""}function Q(t){t!==p.page&&(p.page=t,k(),g())}function V(){D.innerHTML=""}function q(t){var v,M,w,y;t.url;const e=((v=t.images[2])==null?void 0:v.url)||"",s=t.info||t.description||"No description available",n=t.dates.start.localDate||"Unknown Date",a=O(t.dates.start.localTime),i=((M=t._embedded.venues[0])==null?void 0:M.name)||"Unknown Location",o=((w=t._embedded.venues[0])==null?void 0:w.city.name)||"",l=((y=t._embedded.venues[0])==null?void 0:y.country.name)||"",c=t.name||"No name avaible",m=t.priceRanges||[],u=m.find(d=>d.type==="standard")||"",L=m.find(d=>d.type==="vip")||"",B=Math.round(u.min),U=Math.round(u.max),C=Math.round(L.min),T=Math.round(L.max),I=u?`
        <p class="modal__text modal__text-ticket ">
    <svg class="modal__ticket" xmlns="http://www.w3.org/2000/svg" width="24" height="17" viewBox="0 0 24 17" fill="none">
        <path d="M2.66668 0.833496L0 0.833496L0 16.8335H2.66668L2.66668 0.833496Z" fill="#0E0E0E" />
        <path d="M9.3737 0.833496L6.70703 0.833496L6.70703 16.8335H9.3737L9.3737 0.833496Z" fill="#0E0E0E" />
        <path d="M13.4142 0.833496L10.7476 0.833496L10.7476 16.8335H13.4142L13.4142 0.833496Z" fill="#0E0E0E" />
        <path d="M24.0001 0.833496L20.0405 0.833496L20.0405 16.8335H24.0001L24.0001 0.833496Z" fill="#0E0E0E" />
        <path d="M5.33334 0.833496L4.04041 0.833496L4.04041 16.8335H5.33334L5.33334 0.833496Z" fill="#0E0E0E" />
        <path d="M16 0.833496L14.707 0.833496L14.707 16.8335H16L16 0.833496Z" fill="#0E0E0E" />
        <path d="M18.6666 0.833496L17.3737 0.833496L17.3737 16.8335H18.6666L18.6666 0.833496Z" fill="#0E0E0E" />
    </svg>
            Standart ${B}-${U} ${u.currency}
        </p>
        <button class="modal__buy-btn">BUY TICKETS</button>`:`<p class="modal__text modal__text-ticket modal__text-standart">
            <svg class="modal__ticket" xmlns="http://www.w3.org/2000/svg" width="24" height="17" viewBox="0 0 24 17" fill="none">
        <path d="M2.66668 0.833496L0 0.833496L0 16.8335H2.66668L2.66668 0.833496Z" fill="#0E0E0E" />
        <path d="M9.3737 0.833496L6.70703 0.833496L6.70703 16.8335H9.3737L9.3737 0.833496Z" fill="#0E0E0E" />
        <path d="M13.4142 0.833496L10.7476 0.833496L10.7476 16.8335H13.4142L13.4142 0.833496Z" fill="#0E0E0E" />
        <path d="M24.0001 0.833496L20.0405 0.833496L20.0405 16.8335H24.0001L24.0001 0.833496Z" fill="#0E0E0E" />
        <path d="M5.33334 0.833496L4.04041 0.833496L4.04041 16.8335H5.33334L5.33334 0.833496Z" fill="#0E0E0E" />
        <path d="M16 0.833496L14.707 0.833496L14.707 16.8335H16L16 0.833496Z" fill="#0E0E0E" />
        <path d="M18.6666 0.833496L17.3737 0.833496L17.3737 16.8335H18.6666L18.6666 0.833496Z" fill="#0E0E0E" />
    </svg>
             Standart tickets are not available
        </p>`,S=L?`
        <p class="modal__text modal__text-ticket">
               <svg class="modal__ticket" xmlns="http://www.w3.org/2000/svg" width="24" height="17" viewBox="0 0 24 17" fill="none">
        <path d="M2.66668 0.833496L0 0.833496L0 16.8335H2.66668L2.66668 0.833496Z" fill="#0E0E0E" />
        <path d="M9.3737 0.833496L6.70703 0.833496L6.70703 16.8335H9.3737L9.3737 0.833496Z" fill="#0E0E0E" />
        <path d="M13.4142 0.833496L10.7476 0.833496L10.7476 16.8335H13.4142L13.4142 0.833496Z" fill="#0E0E0E" />
        <path d="M24.0001 0.833496L20.0405 0.833496L20.0405 16.8335H24.0001L24.0001 0.833496Z" fill="#0E0E0E" />
        <path d="M5.33334 0.833496L4.04041 0.833496L4.04041 16.8335H5.33334L5.33334 0.833496Z" fill="#0E0E0E" />
        <path d="M16 0.833496L14.707 0.833496L14.707 16.8335H16L16 0.833496Z" fill="#0E0E0E" />
        <path d="M18.6666 0.833496L17.3737 0.833496L17.3737 16.8335H18.6666L18.6666 0.833496Z" fill="#0E0E0E" />
    </svg>
            VIP ${C}-${T} ${L.currency}
        </p>
        <button class="modal__buy-btn">BUY TICKETS</button>`:`<p class="modal__text modal__text-ticket">
            <svg class="modal__ticket" xmlns="http://www.w3.org/2000/svg" width="24" height="17" viewBox="0 0 24 17" fill="none">
        <path d="M2.66668 0.833496L0 0.833496L0 16.8335H2.66668L2.66668 0.833496Z" fill="#0E0E0E" />
        <path d="M9.3737 0.833496L6.70703 0.833496L6.70703 16.8335H9.3737L9.3737 0.833496Z" fill="#0E0E0E" />
        <path d="M13.4142 0.833496L10.7476 0.833496L10.7476 16.8335H13.4142L13.4142 0.833496Z" fill="#0E0E0E" />
        <path d="M24.0001 0.833496L20.0405 0.833496L20.0405 16.8335H24.0001L24.0001 0.833496Z" fill="#0E0E0E" />
        <path d="M5.33334 0.833496L4.04041 0.833496L4.04041 16.8335H5.33334L5.33334 0.833496Z" fill="#0E0E0E" />
        <path d="M16 0.833496L14.707 0.833496L14.707 16.8335H16L16 0.833496Z" fill="#0E0E0E" />
        <path d="M18.6666 0.833496L17.3737 0.833496L17.3737 16.8335H18.6666L18.6666 0.833496Z" fill="#0E0E0E" />
    </svg>
             VIP tickets are not available
        </p>`;function O(d){if(!d)return"Unknown Time";const[A,N]=d.split(":");return`${A}:${N}`}return`
    <div class="modal">
        <button type="button" class="modal__btn-close" >
            <svg class="modal__icon-close" xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                <path d="M0.874187 17C0.65025 17 0.426313 16.9148 0.256172 16.7434C-0.0853907 16.4019 -0.0853907 15.8481 0.256172 15.5066L15.5069 0.256166C15.8485 -0.0853885 16.4023 -0.0853885 16.7438 0.256166C17.0854 0.59772 17.0854 1.15146 16.7438 1.49323L1.49327 16.7434C1.32185 16.9138 1.09791 17 0.874187 17Z" fill="#4C00FE"/>
                <path d="M16.126 17C15.9021 17 15.6784 16.9148 15.508 16.7434L0.256172 1.49323C-0.0853907 1.15146 -0.0853907 0.59772 0.256172 0.256166C0.597735 -0.0853885 1.15149 -0.0853885 1.49327 0.256166L16.7438 15.5066C17.0854 15.8481 17.0854 16.4019 16.7438 16.7434C16.5724 16.9138 16.3487 17 16.126 17Z" fill="#4C00FE"/>
            </svg>
        </button>

        <img src="${e}" alt="${c}" class="modal__img" />

        <div class="modal__box">
            <img src="${e}" alt="${c}" class="modal__main-img" />

            <div class="modal__info">
                <h4 class="modal__title">INFO</h4>
                <p class="modal__text modal__description ">${s}</p>

                <h4 class="modal__title">WHEN</h4>
                <p class="modal__text modal__text--none">${n}</p>
                <p class="modal__text">${a} (${o}/${l})</p>

                <h4 class="modal__title">WHERE</h4>
                <p class="modal__text modal__text--none">${i}</p>
                <p class="modal__text">${o}, ${l}</p>

                <h4 class="modal__title">WHO</h4>
                <p class="modal__text">${c}</p>

                <h4 class="modal__title">PRICES</h4>
                ${I}
                ${S}
            </div>
        </div>
        <button class="modal__more-btn">MORE FROM THIS AUTHOR</button>
    </div>
    `}const z=document.getElementById("js-list"),r=document.getElementById("modal-card"),W=new H;z.addEventListener("click",Y);async function Y(t){const e=t.target.closest(".cards__item");if(!e)return;const s=e.dataset.id;console.log(s);try{const n=await W.fetchEventsById(s),a=q(n);r.insertAdjacentHTML("beforeend",a),r.classList.remove("hidden"),r.addEventListener("click",Z)}catch(n){console.error(n)}}function Z(t){(t.target.classList.contains("modal__btn-close")||t.target===r)&&(r.classList.add("hidden"),r.removeEventListener("click",Z),r.innerHTML="")}
//# sourceMappingURL=index.js.map
