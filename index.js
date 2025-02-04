var U=e=>{throw TypeError(e)};var Y=(e,t,n)=>t.has(e)||U("Cannot "+n);var y=(e,t,n)=>(Y(e,t,"read from private field"),n?n.call(e):t.get(e)),$=(e,t,n)=>t.has(e)?U("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const c of a)if(c.type==="childList")for(const s of c.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function n(a){const c={};return a.integrity&&(c.integrity=a.integrity),a.referrerPolicy&&(c.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?c.credentials="include":a.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function o(a){if(a.ep)return;a.ep=!0;const c=n(a);fetch(a.href,c)}})();var f,b;class S{constructor(){$(this,f,"cAC0PQfupJc4LZexavuatT33ADOVunkK");$(this,b,"https://app.ticketmaster.com/discovery/v2/events.json");this.page=0,this.pageSize=12,this.searchQuery="",this.countryCode=""}async fetchEvents(){const t=new URLSearchParams({apikey:y(this,f),page:this.page,size:this.pageSize,keyword:this.searchQuery,sort:"random",countryCode:this.countryCode}),n=`${y(this,b)}?${t}&classificationName=music`,o=await fetch(n);if(!o.ok)throw new Error("Failed to fetch events");return o.json()}async fetchEventsById(t){const n=new URLSearchParams({apikey:y(this,f)}),o=`https://app.ticketmaster.com/discovery/v2/events/${t}.json?${n}`,a=await fetch(o);if(!a.ok)throw new Error("Failed to fetch events");return a.json()}}f=new WeakMap,b=new WeakMap;function J(e){return e.map(n=>{var l,r;const o=((l=n.images[2])==null?void 0:l.url)||"",a=n.name||"No name avaible",c=n.dates.start.localDate||"Unknown Date",s=((r=n._embedded)==null?void 0:r.venues[0].name)||"Unknown Location",i=n.url||"#";return`
      <li class="cards__item" data-id="${n.id}">
          <img src="${o}" alt="${a}" class="cards__img" />
          <h4 class="cards__event">${a}</h4>
          <p class="cards__date">${c}</p>
          <a href="${i}" target="_blank" rel="noopener noreferrer" class="cards__location">
          <svg class="cards__icon" xmlns="http://www.w3.org/2000/svg" width="7" height="10" viewBox="0 0 7 10" fill="none">
              <path d="M3.5 0C1.57011 0 0 1.55933 0 3.47595C0 5.88495 3.50344 10 3.50344 10C3.50344 10 7 5.76648 7 3.47595C7 1.55933 5.42995 0 3.5 0ZM4.55602 4.49371C4.26484 4.78284 3.88245 4.92743 3.5 4.92743C3.11761 4.92743 2.7351 4.78284 2.44404 4.49371C1.86173 3.91547 1.86173 2.97455 2.44404 2.39624C2.72601 2.11609 3.10108 1.96179 3.5 1.96179C3.89892 1.96179 4.27393 2.11615 4.55602 2.39624C5.13833 2.97455 5.13833 3.91547 4.55602 4.49371Z" fill="white"/>
          </svg>
          ${s}
        </a>
      </li>
    `}).join("")}function Q(e,t,n){const o=document.querySelector(".pagination__list");o.innerHTML="";const c=W(e,t).map(i=>i==="..."?`<li class="pagination__list__item">
          <span class="pagination__dots">...</span>
        </li>`:`<li class="pagination__list__item">
        <button class="pagination__list__button ${i===t?"active":""}" data-page="${i}">${i+1}</button>
      </li>`).join("");o.insertAdjacentHTML("beforeend",c),o.addEventListener("click",s);function s(i){if(i.target.tagName!=="BUTTON")return;const l=Number(i.target.dataset.page);l!==t&&n(l)}}function W(e,t){const n=[];if(e<=5)for(let a=0;a<e;a++)n.push(a);else{t>2&&n.push(0),t>3&&n.push("...");const a=Math.max(0,t-1),c=Math.min(e,t+2);for(let s=a;s<c;s++)n.push(s);t<e-3&&n.push("..."),t<e-2&&n.push(e-1)}return n}const H=document.getElementById("js-list"),X=document.querySelector(".pagination__list"),R=document.getElementById("searchInput");document.getElementById("headerForm");const _=new S;C();R.addEventListener("input",ee);async function ee(e){e.preventDefault(),_.searchQuery=R.value.trim(),_.page=0,k(),N(),await C()}async function C(){var e;try{const t=await _.fetchEvents(),n=((e=t._embedded)==null?void 0:e.events)||[],o=J(n);H.insertAdjacentHTML("beforeend",o);const a=t.page.totalPages;Q(a,_.page,te)}catch(t){console.error(t.status)}}function k(){H.innerHTML=""}function te(e){e!==_.page&&(_.page=e,k(),C())}function N(){X.innerHTML=""}function ne(e){var B,A,I,T;const t=((B=e.images[2])==null?void 0:B.url)||"",n=e.info||e.description||"No description available",o=V(n),a=e.dates.start.localDate||"Unknown Date",c=z(e.dates.start.localTime),s=((A=e._embedded.venues[0])==null?void 0:A.name)||"Unknown Location",i=((I=e._embedded.venues[0])==null?void 0:I.city.name)||"",l=((T=e._embedded.venues[0])==null?void 0:T.country.name)||"",r=e.name||"No name available",g=e.priceRanges||[],L=g.find(d=>d.type==="standard")||"",E=g.find(d=>d.type==="vip")||"",P=Math.round(L.min),Z=Math.round(L.max),D=Math.round(E.min),F=Math.round(E.max),j=`https://www.ticketmaster.com/search?q=${encodeURIComponent(r)}`,v=`
    <svg class="modal__ticket" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 17" fill="none">
    <path d="M2.66668 0.833496L0 0.833496L0 16.8335H2.66668L2.66668 0.833496Z" fill="#0E0E0E" />
    <path d="M9.3737 0.833496L6.70703 0.833496L6.70703 16.8335H9.3737L9.3737 0.833496Z" fill="#0E0E0E" />
    <path d="M13.4142 0.833496L10.7476 0.833496L10.7476 16.8335H13.4142L13.4142 0.833496Z" fill="#0E0E0E" />
    <path d="M24.0001 0.833496L20.0405 0.833496L20.0405 16.8335H24.0001L24.0001 0.833496Z" fill="#0E0E0E" />
    <path d="M5.33334 0.833496L4.04041 0.833496L4.04041 16.8335H5.33334L5.33334 0.833496Z" fill="#0E0E0E" />
    <path d="M16 0.833496L14.707 0.833496L14.707 16.8335H16L16 0.833496Z" fill="#0E0E0E" />
    <path d="M18.6666 0.833496L17.3737 0.833496L17.3737 16.8335H18.6666L18.6666 0.833496Z" fill="#0E0E0E" />
    </svg>`,G=L?`
        <p class="modal__text modal__text-ticket ">
        ${v} Standart ${P}-${Z} ${L.currency}
        </p>
        <button class="modal__buy-btn">BUY TICKETS</button>`:`<p class="modal__text modal__text-ticket" style="margin-bottom: 20px;">
        ${v} Standart tickets are not available
        </p>`,K=E?`
        <p class="modal__text modal__text-ticket">
        ${v} VIP ${D}-${F} ${E.currency}
        </p>
        <button class="modal__buy-btn">BUY TICKETS</button>`:`<p class="modal__text modal__text-ticket">
        ${v} VIP tickets are not available
        </p>`;function z(d){if(!d)return"Unknown Time";const[u,w]=d.split(":");return`${u}:${w}`}function V(d,u=3,w=30){if(!d)return d;const q=d.split(" "),p=[];let h="";return q.map(M=>{p.length<u&&((h+M).length>w?(p.push(h.trim()),h=M+" "):h+=M+" ")}),p.length<u&&h.trim()&&p.push(h.trim()),p.length>=u?p.slice(0,u).join(" ")+"...":d}return`
    <div class="modal">
        <button type="button" class="modal__btn-close" >
            <svg class="modal__icon-close" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 17" >
                <path d="M0.874187 17C0.65025 17 0.426313 16.9148 0.256172 16.7434C-0.0853907 16.4019 -0.0853907 15.8481 0.256172 15.5066L15.5069 0.256166C15.8485 -0.0853885 16.4023 -0.0853885 16.7438 0.256166C17.0854 0.59772 17.0854 1.15146 16.7438 1.49323L1.49327 16.7434C1.32185 16.9138 1.09791 17 0.874187 17Z" />
                <path d="M16.126 17C15.9021 17 15.6784 16.9148 15.508 16.7434L0.256172 1.49323C-0.0853907 1.15146 -0.0853907 0.59772 0.256172 0.256166C0.597735 -0.0853885 1.15149 -0.0853885 1.49327 0.256166L16.7438 15.5066C17.0854 15.8481 17.0854 16.4019 16.7438 16.7434C16.5724 16.9138 16.3487 17 16.126 17Z" />
            </svg>
        </button>

        <img src="${t}" alt="${r}" class="modal__img" />

        <div class="modal__box">
            <img src="${t}" alt="${r}" class="modal__main-img" />

            <div class="modal__info">
                <h4 class="modal__title">INFO</h4>
                <p class="modal__text">${o}</p>

                <h4 class="modal__title">WHEN</h4>
                <p class="modal__text modal__text--none">${a}</p>
                <p class="modal__text">${c} (${i}/${l})</p>

                <h4 class="modal__title">WHERE</h4>
                <p class="modal__text modal__text--none">${s}</p>
                <p class="modal__text">${i}, ${l}</p>

                <h4 class="modal__title">WHO</h4>
                <p class="modal__text">${r}</p>

                <h4 class="modal__title">PRICES</h4>
                ${G}
                ${K}
            </div>
        </div>
        <button class="modal__more-btn" onclick="window.open('${j}', '_blank')">MORE FROM THIS AUTHOR</button>
        </div>
`}const ae=document.getElementById("js-list"),m=document.getElementById("modal-card"),oe=new S;ae.addEventListener("click",ce);async function ce(e){const t=e.target.closest(".cards__item");if(!t)return;const n=t.dataset.id;console.log(n);try{const o=await oe.fetchEventsById(n),a=ne(o);m.insertAdjacentHTML("beforeend",a),m.classList.remove("hidden"),m.addEventListener("click",O)}catch(o){console.error(o)}}function O(e){const t=e.target.closest(".modal__btn-close"),n=e.target===m;(t||n)&&(m.classList.add("hidden"),m.removeEventListener("click",O),m.innerHTML="")}const x=new S;async function se(){try{let c=function(s){return`
        <li class="select__option">
          <img src="${`/imgs/header/flags/${s.code.toLowerCase()}.png`}" alt="${s.name}" class="flag__img">
          ${s.name}
        </li>
      `};var e=c;const t=[{code:"US",name:"United States Of America"},{code:"AD",name:"Andorra"},{code:"AI",name:"Anguilla"},{code:"AR",name:"Argentina"},{code:"AU",name:"Australia"},{code:"AT",name:"Austria"},{code:"AZ",name:"Azerbaijan"},{code:"BS",name:"Bahamas"},{code:"BH",name:"Bahrain"},{code:"BB",name:"Barbados"},{code:"BE",name:"Belgium"},{code:"BM",name:"Bermuda"},{code:"BR",name:"Brazil"},{code:"BG",name:"Bulgaria"},{code:"CA",name:"Canada"},{code:"CL",name:"Chile"},{code:"CN",name:"China"},{code:"CO",name:"Colombia"},{code:"CR",name:"Costa Rica"},{code:"HR",name:"Croatia"},{code:"CY",name:"Cyprus"},{code:"CZ",name:"Czech Republic"},{code:"DK",name:"Denmark"},{code:"DO",name:"Dominican Republic"},{code:"EC",name:"Ecuador"},{code:"EE",name:"Estonia"},{code:"FO",name:"Faroe Islands"},{code:"FI",name:"Finland"},{code:"FR",name:"France"},{code:"GE",name:"Georgia"},{code:"DE",name:"Germany"},{code:"GH",name:"Ghana"},{code:"GI",name:"Gibraltar"},{code:"GB",name:"Great Britain"},{code:"GR",name:"Greece"},{code:"HK",name:"Hong Kong"},{code:"HU",name:"Hungary"},{code:"IS",name:"Iceland"},{code:"IN",name:"India"},{code:"IE",name:"Ireland"},{code:"IL",name:"Israel"},{code:"IT",name:"Italy"},{code:"JM",name:"Jamaica"},{code:"JP",name:"Japan"},{code:"KR",name:"Korea, Republic of"},{code:"LV",name:"Latvia"},{code:"LB",name:"Lebanon"},{code:"LT",name:"Lithuania"},{code:"LU",name:"Luxembourg"},{code:"MY",name:"Malaysia"},{code:"MT",name:"Malta"},{code:"MX",name:"Mexico"},{code:"MC",name:"Monaco"},{code:"ME",name:"Montenegro"},{code:"MA",name:"Morocco"},{code:"NL",name:"Netherlands"},{code:"AN",name:"Netherlands Antilles"},{code:"NZ",name:"New Zealand"},{code:"ND",name:"Northern Ireland"},{code:"NO",name:"Norway"},{code:"PE",name:"Peru"},{code:"PL",name:"Poland"},{code:"PT",name:"Portugal"},{code:"RO",name:"Romania"},{code:"RU",name:"Russian Federation"},{code:"LC",name:"Saint Lucia"},{code:"SA",name:"Saudi Arabia"},{code:"RS",name:"Serbia"},{code:"SG",name:"Singapore"},{code:"SK",name:"Slovakia"},{code:"SI",name:"Slovenia"},{code:"ZA",name:"South Africa"},{code:"ES",name:"Spain"},{code:"SE",name:"Sweden"},{code:"CH",name:"Switzerland"},{code:"TW",name:"Taiwan"},{code:"TH",name:"Thailand"},{code:"TT",name:"Trinidad and Tobago"},{code:"TR",name:"Turkey"},{code:"UA",name:"Ukraine"},{code:"AE",name:"United Arab Emirates"},{code:"UY",name:"Uruguay"},{code:"VE",name:"Venezuela"}],n=document.querySelector(".header__select"),o=document.getElementById("selectedFlag"),a=document.querySelector(".header__dropdown");o.style.display="none",n.addEventListener("click",()=>{a.classList.toggle("open"),a.children.length===0&&t.forEach(s=>{a.insertAdjacentHTML("beforeend",c(s))})}),a.addEventListener("click",async s=>{const i=s.target.closest(".select__option");if(i){const l=i.textContent.trim(),r=t.find(g=>g.name===l);o.style.display="block",o.src=`/imgs/header/flags/${r.code.toLowerCase()}.png`,o.alt=r.name,n.classList.remove("open"),x.countryCode=r.code,x.page=0,k(),N(),await C()}}),window.addEventListener("click",()=>{a.classList.remove("open")})}catch(t){console.error(t)}}se();
//# sourceMappingURL=index.js.map
