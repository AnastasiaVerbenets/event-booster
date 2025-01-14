var l=a=>{throw TypeError(a)};var f=(a,o,n)=>o.has(a)||l("Cannot "+n);var c=(a,o,n)=>(f(a,o,"read from private field"),n?n.call(a):o.get(a)),m=(a,o,n)=>o.has(a)?l("Cannot add the same private member more than once"):o instanceof WeakSet?o.add(a):o.set(a,n);(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const t of r.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&i(t)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();var s,d;class A{constructor(){m(this,s,"cAC0PQfupJc4LZexavuatT33ADOVunkK");m(this,d,"https://app.ticketmaster.com/discovery/v2/events.json");this.page=0,this.pageSize=12}getApiKey(){return c(this,s)}getBaseUrl(){return c(this,d)}async fetchEvents(){const o=new URLSearchParams({apikey:c(this,s),page:this.page,size:this.pageSize}),n=`${c(this,d)}?${o}&classificationName=music`,i=await fetch(n);if(!i.ok)throw new Error("Failed to fetch events");return i.json()}}s=new WeakMap,d=new WeakMap;function h(a){return a.map(n=>{var u,g;const i=((u=n.images[0])==null?void 0:u.url)||"",e=n.name||"No name avaible",r=n.dates.start.localDate||"Unknown Date",t=((g=n._embedded)==null?void 0:g.venues[0].name)||"Unknown Location",p=n.url||"#";return`
<li class="cards__item">
          <img src="${i}" alt="${e}" class="cards__img" />
          <h4 class="cards__event">${e}</h4>
          <p class="cards__date">${r}</p>
        <a href="${p}" target="_blank" rel="noopener noreferrer" class="cards__location">
          <svg class="cards__icon">
            <use href="/imgs/icons/symbol-defs.svg#location"></use>
          </svg>
          ${t}
        </a>
      </li>
    `}).join("")}const E=document.getElementById("js-list"),y=new A;S();async function S(){var a;try{const n=((a=(await y.fetchEvents())._embedded)==null?void 0:a.events)||[],i=h(n);E.insertAdjacentHTML("beforeend",i)}catch(o){console.error(o)}}const v=document.getElementById("countryButton"),_=document.getElementById("countryList");v.addEventListener("click",()=>{_.click()});async function U(){try{let n=function(e){return o.filter(r=>r.region===e).map(r=>`<option value="${r.code}"><img src="${r.flag}" alt="${r.code}" class="flag__img"> ${r.name}</option>`).join("")};var a=n;const o=[{code:"US",name:"United States Of America",region:"NorthAmerica"},{code:"CA",name:"Canada",region:"NorthAmerica"},{code:"MX",name:"Mexico",region:"NorthAmerica"},{code:"AR",name:"Argentina",region:"SouthAmerica"},{code:"BR",name:"Brazil",region:"SouthAmerica"},{code:"CO",name:"Colombia",region:"SouthAmerica"},{code:"PE",name:"Peru",region:"SouthAmerica"},{code:"VE",name:"Venezuela",region:"SouthAmerica"},{code:"UY",name:"Uruguay",region:"SouthAmerica"},{code:"AT",name:"Austria",region:"Europe"},{code:"BE",name:"Belgium",region:"Europe"},{code:"BG",name:"Bulgaria",region:"Europe"},{code:"DE",name:"Germany",region:"Europe"},{code:"ES",name:"Spain",region:"Europe"},{code:"FR",name:"France",region:"Europe"},{code:"GB",name:"Great Britain",region:"Europe"},{code:"IT",name:"Italy",region:"Europe"},{code:"PL",name:"Poland",region:"Europe"},{code:"PT",name:"Portugal",region:"Europe"},{code:"RU",name:"Russia",region:"Europe"},{code:"SE",name:"Sweden",region:"Europe"},{code:"CN",name:"China",region:"Asia"},{code:"IN",name:"India",region:"Asia"},{code:"JP",name:"Japan",region:"Asia"},{code:"KR",name:"Korea, Republic of",region:"Asia"},{code:"SG",name:"Singapore",region:"Asia"},{code:"TH",name:"Thailand",region:"Asia"},{code:"TR",name:"Turkey",region:"Asia"},{code:"IL",name:"Israel",region:"Asia"},{code:"AE",name:"United Arab Emirates",region:"Asia"},{code:"SA",name:"Saudi Arabia",region:"Asia"},{code:"ZA",name:"South Africa",region:"Africa"},{code:"NG",name:"Nigeria",region:"Africa"},{code:"EG",name:"Egypt",region:"Africa"},{code:"KE",name:"Kenya",region:"Africa"},{code:"AU",name:"Australia",region:"Oceania"},{code:"NZ",name:"New Zealand",region:"Oceania"}];o.forEach(e=>{e.flag=`/imgs/header/flags/${e.code.toLowerCase()}.png`}),["Europe","NorthAmerica","SouthAmerica","Asia","Africa","Oceania"].forEach(e=>{const r=document.getElementById(e.toLowerCase());r&&(r.innerHTML=n(e))})}catch(o){console.error(o)}}U();
//# sourceMappingURL=index.js.map
