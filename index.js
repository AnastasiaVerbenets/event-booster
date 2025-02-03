var H=t=>{throw TypeError(t)};var q=(t,e,n)=>e.has(t)||H("Cannot "+n);var E=(t,e,n)=>(q(t,e,"read from private field"),n?n.call(t):e.get(t)),w=(t,e,n)=>e.has(t)?H("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();var f,y;class I{constructor(){w(this,f,"cAC0PQfupJc4LZexavuatT33ADOVunkK");w(this,y,"https://app.ticketmaster.com/discovery/v2/events.json");this.page=0,this.pageSize=12,this.searchQuery=""}async fetchEvents(){const e=new URLSearchParams({apikey:E(this,f),page:this.page,size:this.pageSize,keyword:this.searchQuery,sort:"random"}),n=`${E(this,y)}?${e}&classificationName=music`,a=await fetch(n);if(!a.ok)throw new Error("Failed to fetch events");return a.json()}async fetchEventsById(e){const n=new URLSearchParams({apikey:E(this,f)}),a=`https://app.ticketmaster.com/discovery/v2/events/${e}.json?${n}`,s=await fetch(a);if(!s.ok)throw new Error("Failed to fetch events");return s.json()}}f=new WeakMap,y=new WeakMap;function z(t){return t.map(n=>{var l,d;const a=((l=n.images[2])==null?void 0:l.url)||"",s=n.name||"No name avaible",o=n.dates.start.localDate||"Unknown Date",i=((d=n._embedded)==null?void 0:d.venues[0].name)||"Unknown Location",c=n.url||"#";return`
      <li class="cards__item" data-id="${n.id}">
          <img src="${a}" alt="${s}" class="cards__img" />
          <h4 class="cards__event">${s}</h4>
          <p class="cards__date">${o}</p>
          <a href="${c}" target="_blank" rel="noopener noreferrer" class="cards__location">
          <svg class="cards__icon" xmlns="http://www.w3.org/2000/svg" width="7" height="10" viewBox="0 0 7 10" fill="none">
              <path d="M3.5 0C1.57011 0 0 1.55933 0 3.47595C0 5.88495 3.50344 10 3.50344 10C3.50344 10 7 5.76648 7 3.47595C7 1.55933 5.42995 0 3.5 0ZM4.55602 4.49371C4.26484 4.78284 3.88245 4.92743 3.5 4.92743C3.11761 4.92743 2.7351 4.78284 2.44404 4.49371C1.86173 3.91547 1.86173 2.97455 2.44404 2.39624C2.72601 2.11609 3.10108 1.96179 3.5 1.96179C3.89892 1.96179 4.27393 2.11615 4.55602 2.39624C5.13833 2.97455 5.13833 3.91547 4.55602 4.49371Z" fill="white"/>
          </svg>
          ${i}
        </a>
      </li>
    `}).join("")}function W(t,e,n){const a=document.querySelector(".pagination__list");a.innerHTML="";const o=Y(t,e).map(c=>c==="..."?`<li class="pagination__list__item">
          <span class="pagination__dots">...</span>
        </li>`:`<li class="pagination__list__item">
        <button class="pagination__list__button ${c===e?"active":""}" data-page="${c}">${c+1}</button>
      </li>`).join("");a.insertAdjacentHTML("beforeend",o),a.addEventListener("click",i);function i(c){if(c.target.tagName!=="BUTTON")return;const l=Number(c.target.dataset.page);l!==e&&n(l)}}function Y(t,e){const n=[];if(t<=5)for(let s=0;s<t;s++)n.push(s);else{e>2&&n.push(0),e>3&&n.push("...");const s=Math.max(0,e-1),o=Math.min(t,e+2);for(let i=s;i<o;i++)n.push(i);e<t-3&&n.push("..."),e<t-2&&n.push(t-1)}return n}const T=document.getElementById("js-list"),J=document.querySelector(".pagination__list"),S=document.getElementById("searchInput");document.getElementById("headerForm");const h=new I;M();S.addEventListener("input",G);async function G(t){t.preventDefault(),h.searchQuery=S.value.trim(),h.page=0,A(),tt(),await M()}async function M(){var t;try{const e=await h.fetchEvents(),n=((t=e._embedded)==null?void 0:t.events)||[],a=z(n);T.insertAdjacentHTML("beforeend",a);const s=e.page.totalPages;W(s,h.page,X)}catch(e){console.error(e.status)}}function A(){T.innerHTML=""}function X(t){t!==h.page&&(h.page=t,A(),M())}function tt(){J.innerHTML=""}function et(t){var C,x,U,B;const e=((C=t.images[2])==null?void 0:C.url)||"",n=t.info||t.description||"No description available",a=Q(n),s=t.dates.start.localDate||"Unknown Date",o=K(t.dates.start.localTime),i=((x=t._embedded.venues[0])==null?void 0:x.name)||"Unknown Location",c=((U=t._embedded.venues[0])==null?void 0:U.city.name)||"",l=((B=t._embedded.venues[0])==null?void 0:B.country.name)||"",d=t.name||"No name available",k=t.priceRanges||[],g=k.find(r=>r.type==="standard")||"",v=k.find(r=>r.type==="vip")||"",j=Math.round(g.min),N=Math.round(g.max),Z=Math.round(v.min),R=Math.round(v.max),P=`https://www.ticketmaster.com/search?q=${encodeURIComponent(d)}`,L=`
    <svg class="modal__ticket" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 17" fill="none">
    <path d="M2.66668 0.833496L0 0.833496L0 16.8335H2.66668L2.66668 0.833496Z" fill="#0E0E0E" />
    <path d="M9.3737 0.833496L6.70703 0.833496L6.70703 16.8335H9.3737L9.3737 0.833496Z" fill="#0E0E0E" />
    <path d="M13.4142 0.833496L10.7476 0.833496L10.7476 16.8335H13.4142L13.4142 0.833496Z" fill="#0E0E0E" />
    <path d="M24.0001 0.833496L20.0405 0.833496L20.0405 16.8335H24.0001L24.0001 0.833496Z" fill="#0E0E0E" />
    <path d="M5.33334 0.833496L4.04041 0.833496L4.04041 16.8335H5.33334L5.33334 0.833496Z" fill="#0E0E0E" />
    <path d="M16 0.833496L14.707 0.833496L14.707 16.8335H16L16 0.833496Z" fill="#0E0E0E" />
    <path d="M18.6666 0.833496L17.3737 0.833496L17.3737 16.8335H18.6666L18.6666 0.833496Z" fill="#0E0E0E" />
    </svg>`,D=g?`
        <p class="modal__text modal__text-ticket ">
        ${L} Standart ${j}-${N} ${g.currency}
        </p>
        <button class="modal__buy-btn">BUY TICKETS</button>`:`<p class="modal__text modal__text-ticket" style="margin-bottom: 20px;">
        ${L} Standart tickets are not available
        </p>`,F=v?`
        <p class="modal__text modal__text-ticket">
        ${L} VIP ${Z}-${R} ${v.currency}
        </p>
        <button class="modal__buy-btn">BUY TICKETS</button>`:`<p class="modal__text modal__text-ticket">
        ${L} VIP tickets are not available
        </p>`;function K(r){if(!r)return"Unknown Time";const[p,b]=r.split(":");return`${p}:${b}`}function Q(r,p=3,b=30){if(!r)return r;const V=r.split(" "),u=[];let _="";return V.map($=>{u.length<p&&((_+$).length>b?(u.push(_.trim()),_=$+" "):_+=$+" ")}),u.length<p&&_.trim()&&u.push(_.trim()),u.length>=p?u.slice(0,p).join(" ")+"...":r}return`
    <div class="modal">
        <button type="button" class="modal__btn-close" >
            <svg class="modal__icon-close" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 17" >
                <path d="M0.874187 17C0.65025 17 0.426313 16.9148 0.256172 16.7434C-0.0853907 16.4019 -0.0853907 15.8481 0.256172 15.5066L15.5069 0.256166C15.8485 -0.0853885 16.4023 -0.0853885 16.7438 0.256166C17.0854 0.59772 17.0854 1.15146 16.7438 1.49323L1.49327 16.7434C1.32185 16.9138 1.09791 17 0.874187 17Z" />
                <path d="M16.126 17C15.9021 17 15.6784 16.9148 15.508 16.7434L0.256172 1.49323C-0.0853907 1.15146 -0.0853907 0.59772 0.256172 0.256166C0.597735 -0.0853885 1.15149 -0.0853885 1.49327 0.256166L16.7438 15.5066C17.0854 15.8481 17.0854 16.4019 16.7438 16.7434C16.5724 16.9138 16.3487 17 16.126 17Z" />
            </svg>
        </button>

        <img src="${e}" alt="${d}" class="modal__img" />

        <div class="modal__box">
            <img src="${e}" alt="${d}" class="modal__main-img" />

            <div class="modal__info">
                <h4 class="modal__title">INFO</h4>
                <p class="modal__text">${a}</p>

                <h4 class="modal__title">WHEN</h4>
                <p class="modal__text modal__text--none">${s}</p>
                <p class="modal__text">${o} (${c}/${l})</p>

                <h4 class="modal__title">WHERE</h4>
                <p class="modal__text modal__text--none">${i}</p>
                <p class="modal__text">${c}, ${l}</p>

                <h4 class="modal__title">WHO</h4>
                <p class="modal__text">${d}</p>

                <h4 class="modal__title">PRICES</h4>
                ${D}
                ${F}
            </div>
        </div>
        <button class="modal__more-btn" onclick="window.open('${P}', '_blank')">MORE FROM THIS AUTHOR</button>
        </div>
`}const nt=document.getElementById("js-list"),m=document.getElementById("modal-card"),st=new I;nt.addEventListener("click",at);async function at(t){const e=t.target.closest(".cards__item");if(!e)return;const n=e.dataset.id;console.log(n);try{const a=await st.fetchEventsById(n),s=et(a);m.insertAdjacentHTML("beforeend",s),m.classList.remove("hidden"),m.addEventListener("click",O)}catch(a){console.error(a)}}function O(t){const e=t.target.closest(".modal__btn-close"),n=t.target===m;(e||n)&&(m.classList.add("hidden"),m.removeEventListener("click",O),m.innerHTML="")}
//# sourceMappingURL=index.js.map
