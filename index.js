var f=o=>{throw TypeError(o)};var E=(o,e,n)=>e.has(o)||f("Cannot "+n);var l=(o,e,n)=>(E(o,e,"read from private field"),n?n.call(o):e.get(o)),p=(o,e,n)=>e.has(o)?f("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(o):e.set(o,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(t){if(t.ep)return;t.ep=!0;const a=n(t);fetch(t.href,a)}})();var m,u;class y{constructor(){p(this,m,"cAC0PQfupJc4LZexavuatT33ADOVunkK");p(this,u,"https://app.ticketmaster.com/discovery/v2/events.json");this.page=0,this.pageSize=12}getApiKey(){return l(this,m)}getBaseUrl(){return l(this,u)}async fetchEvents(){const e=new URLSearchParams({apikey:l(this,m),page:this.page,size:this.pageSize}),n=`${l(this,u)}?${e}&classificationName=music`,r=await fetch(n);if(!r.ok)throw new Error("Failed to fetch events");return r.json()}}m=new WeakMap,u=new WeakMap;function S(o){return o.map(n=>{var c,d;const r=((c=n.images[0])==null?void 0:c.url)||"",t=n.name||"No name avaible",a=n.dates.start.localDate||"Unknown Date",i=((d=n._embedded)==null?void 0:d.venues[0].name)||"Unknown Location",s=n.url||"#";return`
<li class="cards__item">
          <img src="${r}" alt="${t}" class="cards__img" />
          <h4 class="cards__event">${t}</h4>
          <p class="cards__date">${a}</p>
        <a href="${s}" target="_blank" rel="noopener noreferrer" class="cards__location">
          <svg class="cards__icon">
            <use href="/imgs/icons/symbol-defs.svg#location"></use>
          </svg>
          ${i}
        </a>
      </li>
    `}).join("")}function v(o,e,n){const r=document.querySelector(".pagination__list");r.innerHTML="";const a=L(o,e).map(s=>s==="..."?`<li class="pagination__list__item">
          <span class="pagination__dots">...</span>
        </li>`:`<li class="pagination__list__item">
        <button class="pagination__list__button ${s===e?"active":""}" data-page="${s}">${s+1}</button>
      </li>`).join("");r.insertAdjacentHTML("beforeend",a),r.addEventListener("click",i);function i(s){if(s.target.tagName!=="BUTTON")return;const c=Number(s.target.dataset.page);c!==e&&n(c)}}function L(o,e){const n=[];if(o<=5)for(let t=0;t<o;t++)n.push(t);else{e>2&&n.push(0),e>3&&n.push("...");const t=Math.max(0,e-1),a=Math.min(o,e+2);for(let i=t;i<a;i++)n.push(i);e<o-3&&n.push("..."),e<o-2&&n.push(o-1)}return n}const h=document.getElementById("js-list");document.querySelector(".pagination__list");const g=new y;A();async function A(){var o;try{const e=await g.fetchEvents(),n=((o=e._embedded)==null?void 0:o.events)||[],r=S(n);h.insertAdjacentHTML("beforeend",r);const t=e.page.totalPages;v(t,g.page,U)}catch(e){console.error(e)}}function b(){h.innerHTML=""}function U(o){o!==g.page&&(g.page=o,b(),A())}async function B(){try{let a=function(i){return`
        <li class="select__option">
          <img src="${`/imgs/header/flags/${i.code.toLowerCase()}.png`}" alt="${i.name}" class="flag__img">
          ${i.name}
        </li>
      `};var o=a;const e=[{code:"US",name:"USA",region:"NorthAmerica"},{code:"CA",name:"Canada",region:"NorthAmerica"},{code:"MX",name:"Mexico",region:"NorthAmerica"},{code:"AR",name:"Argentina",region:"SouthAmerica"},{code:"BR",name:"Brazil",region:"SouthAmerica"},{code:"CO",name:"Colombia",region:"SouthAmerica"},{code:"PE",name:"Peru",region:"SouthAmerica"},{code:"VE",name:"Venezuela",region:"SouthAmerica"},{code:"UY",name:"Uruguay",region:"SouthAmerica"},{code:"AT",name:"Austria",region:"Europe"},{code:"BE",name:"Belgium",region:"Europe"},{code:"BG",name:"Bulgaria",region:"Europe"},{code:"DE",name:"Germany",region:"Europe"},{code:"ES",name:"Spain",region:"Europe"},{code:"FR",name:"France",region:"Europe"},{code:"GB",name:"Great Britain",region:"Europe"},{code:"IT",name:"Italy",region:"Europe"},{code:"PL",name:"Poland",region:"Europe"},{code:"PT",name:"Portugal",region:"Europe"},{code:"RU",name:"Russia",region:"Europe"},{code:"SE",name:"Sweden",region:"Europe"},{code:"CN",name:"China",region:"Asia"},{code:"IN",name:"India",region:"Asia"},{code:"JP",name:"Japan",region:"Asia"},{code:"KR",name:"Korea",region:"Asia"},{code:"SG",name:"Singapore",region:"Asia"},{code:"TH",name:"Thailand",region:"Asia"},{code:"TR",name:"Turkey",region:"Asia"},{code:"IL",name:"Israel",region:"Asia"},{code:"AE",name:"UAE",region:"Asia"},{code:"SA",name:"Saudi Arabia",region:"Asia"},{code:"ZA",name:"South Africa",region:"Africa"},{code:"NG",name:"Nigeria",region:"Africa"},{code:"EG",name:"Egypt",region:"Africa"},{code:"KE",name:"Kenya",region:"Africa"},{code:"AU",name:"Australia",region:"Oceania"},{code:"NZ",name:"New Zealand",region:"Oceania"}],n=document.querySelector(".header__select"),r=document.getElementById("selectedFlag"),t=document.querySelector(".header__dropdown");n.addEventListener("click",()=>{n.classList.toggle("open"),e.forEach(i=>{t.insertAdjacentHTML("beforeend",a(i))})}),t.addEventListener("click",i=>{const s=i.target.closest(".select__option");if(s){const c=s.textContent.trim(),d=e.find(_=>_.name===c);r.src=`/imgs/header/flags/${d.code.toLowerCase()}.png`,r.alt=d.name,n.classList.remove("open")}}),document.addEventListener("click",()=>{n.classList.remove("open")})}catch(e){console.error(e)}}B();
//# sourceMappingURL=index.js.map
