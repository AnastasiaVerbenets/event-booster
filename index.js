var U=e=>{throw TypeError(e)};var V=(e,t,n)=>t.has(e)||U("Cannot "+n);var v=(e,t,n)=>(V(e,t,"read from private field"),n?n.call(e):t.get(e)),M=(e,t,n)=>t.has(e)?U("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function n(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(a){if(a.ep)return;a.ep=!0;const o=n(a);fetch(a.href,o)}})();var f,y;class T{constructor(){M(this,f,"cAC0PQfupJc4LZexavuatT33ADOVunkK");M(this,y,"https://app.ticketmaster.com/discovery/v2/events.json");this.page=0,this.pageSize=12,this.searchQuery="",this.searchCountry=""}async fetchEvents(){const t=new URLSearchParams({apikey:v(this,f),page:this.page,size:this.pageSize,keyword:this.searchQuery,sort:"random",countryCode:this.searchCountry}),n=`${v(this,y)}?${t}&classificationName=music`,s=await fetch(n);if(!s.ok)throw new Error("Failed to fetch events");return s.json()}async fetchEventsById(t){const n=new URLSearchParams({apikey:v(this,f)}),s=`https://app.ticketmaster.com/discovery/v2/events/${t}.json?${n}`,a=await fetch(s);if(!a.ok)throw new Error("Failed to fetch events");return a.json()}}f=new WeakMap,y=new WeakMap;function Y(e){return e.map(n=>{var d,l;const s=((d=n.images[2])==null?void 0:d.url)||"",a=n.name||"No name avaible",o=n.dates.start.localDate||"Unknown Date",c=((l=n._embedded)==null?void 0:l.venues[0].name)||"Unknown Location",i=n.url||"#";return`
      <li class="cards__item" data-id="${n.id}">
          <img src="${s}" alt="${a}" class="cards__img" />
          <h4 class="cards__event">${a}</h4>
          <p class="cards__date">${o}</p>
          <a href="${i}" target="_blank" rel="noopener noreferrer" class="cards__location">
          <svg class="cards__icon" xmlns="http://www.w3.org/2000/svg" width="7" height="10" viewBox="0 0 7 10" fill="none">
              <path d="M3.5 0C1.57011 0 0 1.55933 0 3.47595C0 5.88495 3.50344 10 3.50344 10C3.50344 10 7 5.76648 7 3.47595C7 1.55933 5.42995 0 3.5 0ZM4.55602 4.49371C4.26484 4.78284 3.88245 4.92743 3.5 4.92743C3.11761 4.92743 2.7351 4.78284 2.44404 4.49371C1.86173 3.91547 1.86173 2.97455 2.44404 2.39624C2.72601 2.11609 3.10108 1.96179 3.5 1.96179C3.89892 1.96179 4.27393 2.11615 4.55602 2.39624C5.13833 2.97455 5.13833 3.91547 4.55602 4.49371Z" fill="white"/>
          </svg>
          ${c}
        </a>
      </li>
    `}).join("")}function J(e,t,n){const s=document.querySelector(".pagination__list");s.innerHTML="";const o=Q(e,t).map(i=>i==="..."?`<li class="pagination__list__item">
          <span class="pagination__dots">...</span>
        </li>`:`<li class="pagination__list__item">
        <button class="pagination__list__button ${i===t?"active":""}" data-page="${i}">${i+1}</button>
      </li>`).join("");s.insertAdjacentHTML("beforeend",o),s.addEventListener("click",c);function c(i){if(i.target.tagName!=="BUTTON")return;const d=Number(i.target.dataset.page);d!==t&&n(d)}}function Q(e,t){const n=[];if(e<=5)for(let a=0;a<e;a++)n.push(a);else{t>2&&n.push(0),t>3&&n.push("...");const a=Math.max(0,t-1),o=Math.min(e,t+2);for(let c=a;c<o;c++)n.push(c);t<e-3&&n.push("..."),t<e-2&&n.push(e-1)}return n}const x=document.getElementById("js-list"),q=document.querySelector(".pagination__list"),H=document.getElementById("searchInput");document.getElementById("headerForm");const u=new T;$();H.addEventListener("input",W);async function W(e){e.preventDefault(),u.searchQuery=H.value.trim(),u.page=0,w(),ee(),await $()}async function $({countryCode:e}={}){var t;try{e&&(u.searchCountry=e),w(),console.log(e);const n=await u.fetchEvents(),s=((t=n._embedded)==null?void 0:t.events)||[],a=Y(s);x.insertAdjacentHTML("beforeend",a);const o=n.page.totalPages;J(o,u.page,X)}catch(n){console.error(n.status)}}function w(){x.innerHTML=""}function X(e){e!==u.page&&(u.page=e,w(),$())}function ee(){q.innerHTML=""}function te(e){var S,k,I,A;const t=((S=e.images[2])==null?void 0:S.url)||"",n=e.info||e.description||"No description available",s=K(n),a=e.dates.start.localDate||"Unknown Date",o=G(e.dates.start.localTime),c=((k=e._embedded.venues[0])==null?void 0:k.name)||"Unknown Location",i=((I=e._embedded.venues[0])==null?void 0:I.city.name)||"",d=((A=e._embedded.venues[0])==null?void 0:A.country.name)||"",l=e.name||"No name available",B=e.priceRanges||[],g=B.find(r=>r.type==="standard")||"",E=B.find(r=>r.type==="vip")||"",N=Math.round(g.min),O=Math.round(g.max),P=Math.round(E.min),Z=Math.round(E.max),D=`https://www.ticketmaster.com/search?q=${encodeURIComponent(l)}`,L=`
    <svg class="modal__ticket" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 17" fill="none">
    <path d="M2.66668 0.833496L0 0.833496L0 16.8335H2.66668L2.66668 0.833496Z" fill="#0E0E0E" />
    <path d="M9.3737 0.833496L6.70703 0.833496L6.70703 16.8335H9.3737L9.3737 0.833496Z" fill="#0E0E0E" />
    <path d="M13.4142 0.833496L10.7476 0.833496L10.7476 16.8335H13.4142L13.4142 0.833496Z" fill="#0E0E0E" />
    <path d="M24.0001 0.833496L20.0405 0.833496L20.0405 16.8335H24.0001L24.0001 0.833496Z" fill="#0E0E0E" />
    <path d="M5.33334 0.833496L4.04041 0.833496L4.04041 16.8335H5.33334L5.33334 0.833496Z" fill="#0E0E0E" />
    <path d="M16 0.833496L14.707 0.833496L14.707 16.8335H16L16 0.833496Z" fill="#0E0E0E" />
    <path d="M18.6666 0.833496L17.3737 0.833496L17.3737 16.8335H18.6666L18.6666 0.833496Z" fill="#0E0E0E" />
    </svg>`,j=g?`
        <p class="modal__text modal__text-ticket ">
        ${L} Standart ${N}-${O} ${g.currency}
        </p>
        <button class="modal__buy-btn">BUY TICKETS</button>`:`<p class="modal__text modal__text-ticket" style="margin-bottom: 20px;">
        ${L} Standart tickets are not available
        </p>`,F=E?`
        <p class="modal__text modal__text-ticket">
        ${L} VIP ${P}-${Z} ${E.currency}
        </p>
        <button class="modal__buy-btn">BUY TICKETS</button>`:`<p class="modal__text modal__text-ticket">
        ${L} VIP tickets are not available
        </p>`;function G(r){if(!r)return"Unknown Time";const[p,b]=r.split(":");return`${p}:${b}`}function K(r,p=3,b=30){if(!r)return r;const z=r.split(" "),h=[];let _="";return z.map(C=>{h.length<p&&((_+C).length>b?(h.push(_.trim()),_=C+" "):_+=C+" ")}),h.length<p&&_.trim()&&h.push(_.trim()),h.length>=p?h.slice(0,p).join(" ")+"...":r}return`
    <div class="modal">
        <button type="button" class="modal__btn-close" >
            <svg class="modal__icon-close" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 17" >
                <path d="M0.874187 17C0.65025 17 0.426313 16.9148 0.256172 16.7434C-0.0853907 16.4019 -0.0853907 15.8481 0.256172 15.5066L15.5069 0.256166C15.8485 -0.0853885 16.4023 -0.0853885 16.7438 0.256166C17.0854 0.59772 17.0854 1.15146 16.7438 1.49323L1.49327 16.7434C1.32185 16.9138 1.09791 17 0.874187 17Z" />
                <path d="M16.126 17C15.9021 17 15.6784 16.9148 15.508 16.7434L0.256172 1.49323C-0.0853907 1.15146 -0.0853907 0.59772 0.256172 0.256166C0.597735 -0.0853885 1.15149 -0.0853885 1.49327 0.256166L16.7438 15.5066C17.0854 15.8481 17.0854 16.4019 16.7438 16.7434C16.5724 16.9138 16.3487 17 16.126 17Z" />
            </svg>
        </button>

        <img src="${t}" alt="${l}" class="modal__img" />

        <div class="modal__box">
            <img src="${t}" alt="${l}" class="modal__main-img" />

            <div class="modal__info">
                <h4 class="modal__title">INFO</h4>
                <p class="modal__text">${s}</p>

                <h4 class="modal__title">WHEN</h4>
                <p class="modal__text modal__text--none">${a}</p>
                <p class="modal__text">${o} (${i}/${d})</p>

                <h4 class="modal__title">WHERE</h4>
                <p class="modal__text modal__text--none">${c}</p>
                <p class="modal__text">${i}, ${d}</p>

                <h4 class="modal__title">WHO</h4>
                <p class="modal__text">${l}</p>

                <h4 class="modal__title">PRICES</h4>
                ${j}
                ${F}
            </div>
        </div>
        <button class="modal__more-btn" onclick="window.open('${D}', '_blank')">MORE FROM THIS AUTHOR</button>
        </div>
`}const ne=document.getElementById("js-list"),m=document.getElementById("modal-card"),ae=new T;ne.addEventListener("click",oe);async function oe(e){const t=e.target.closest(".cards__item");if(!t)return;const n=t.dataset.id;try{const s=await ae.fetchEventsById(n),a=te(s);m.insertAdjacentHTML("beforeend",a),m.classList.remove("hidden"),m.addEventListener("click",R)}catch(s){console.error(s)}}function R(e){const t=e.target.closest(".modal__btn-close"),n=e.target===m;(t||n)&&(m.classList.add("hidden"),m.removeEventListener("click",R),m.innerHTML="")}async function se(){try{var e=function(o){const c=`/imgs/header/flags/${o.code.toLowerCase()}.png`;return`
        <li class="select__option" data-id="${o.code}">
          <img src="${c}" alt="${o.name}" class="flag__img">${o.name}
        </li>
      `};const t=[{code:"US",name:"United States Of America"},{code:"AD",name:"Andorra"},{code:"AI",name:"Anguilla"},{code:"AR",name:"Argentina"},{code:"AU",name:"Australia"},{code:"AT",name:"Austria"},{code:"AZ",name:"Azerbaijan"},{code:"BS",name:"Bahamas"},{code:"BH",name:"Bahrain"},{code:"BB",name:"Barbados"},{code:"BE",name:"Belgium"},{code:"BM",name:"Bermuda"},{code:"BR",name:"Brazil"},{code:"BG",name:"Bulgaria"},{code:"CA",name:"Canada"},{code:"CL",name:"Chile"},{code:"CN",name:"China"},{code:"CO",name:"Colombia"},{code:"CR",name:"Costa Rica"},{code:"HR",name:"Croatia"},{code:"CY",name:"Cyprus"},{code:"CZ",name:"Czech Republic"},{code:"DK",name:"Denmark"},{code:"DO",name:"Dominican Republic"},{code:"EC",name:"Ecuador"},{code:"EE",name:"Estonia"},{code:"FO",name:"Faroe Islands"},{code:"FI",name:"Finland"},{code:"FR",name:"France"},{code:"GE",name:"Georgia"},{code:"DE",name:"Germany"},{code:"GH",name:"Ghana"},{code:"GI",name:"Gibraltar"},{code:"GB",name:"Great Britain"},{code:"GR",name:"Greece"},{code:"HK",name:"Hong Kong"},{code:"HU",name:"Hungary"},{code:"IS",name:"Iceland"},{code:"IN",name:"India"},{code:"IE",name:"Ireland"},{code:"IL",name:"Israel"},{code:"IT",name:"Italy"},{code:"JM",name:"Jamaica"},{code:"JP",name:"Japan"},{code:"KR",name:"Korea, Republic of"},{code:"LV",name:"Latvia"},{code:"LB",name:"Lebanon"},{code:"LT",name:"Lithuania"},{code:"LU",name:"Luxembourg"},{code:"MY",name:"Malaysia"},{code:"MT",name:"Malta"},{code:"MX",name:"Mexico"},{code:"MC",name:"Monaco"},{code:"ME",name:"Montenegro"},{code:"MA",name:"Morocco"},{code:"NL",name:"Netherlands"},{code:"AN",name:"Netherlands Antilles"},{code:"NZ",name:"New Zealand"},{code:"ND",name:"Northern Ireland"},{code:"NO",name:"Norway"},{code:"PE",name:"Peru"},{code:"PL",name:"Poland"},{code:"PT",name:"Portugal"},{code:"RO",name:"Romania"},{code:"RU",name:"Russian Federation"},{code:"LC",name:"Saint Lucia"},{code:"SA",name:"Saudi Arabia"},{code:"RS",name:"Serbia"},{code:"SG",name:"Singapore"},{code:"SK",name:"Slovakia"},{code:"SI",name:"Slovenia"},{code:"ZA",name:"South Africa"},{code:"ES",name:"Spain"},{code:"SE",name:"Sweden"},{code:"CH",name:"Switzerland"},{code:"TW",name:"Taiwan"},{code:"TH",name:"Thailand"},{code:"TT",name:"Trinidad and Tobago"},{code:"TR",name:"Turkey"},{code:"UA",name:"Ukraine"},{code:"AE",name:"United Arab Emirates"},{code:"UY",name:"Uruguay"},{code:"VE",name:"Venezuela"}],n=document.getElementById("countryButton"),s=document.getElementById("countryInput")}catch(t){console.error(t)}}se();
//# sourceMappingURL=index.js.map
