var m=t=>{throw TypeError(t)};var p=(t,e,r)=>e.has(t)||m("Cannot "+r);var l=(t,e,r)=>(p(t,e,"read from private field"),r?r.call(t):e.get(t)),d=(t,e,r)=>e.has(t)?m("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,r);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))c(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&c(o)}).observe(document,{childList:!0,subtree:!0});function r(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function c(s){if(s.ep)return;s.ep=!0;const n=r(s);fetch(s.href,n)}})();var a,i;class h{constructor(){d(this,a,"cAC0PQfupJc4LZexavuatT33ADOVunkK");d(this,i,"https://app.ticketmaster.com/discovery/v2/events.json");this.page=1,this.pageSize=8}async fetchEvents(){const e=new URLSearchParams({apikey:l(this,a),page:this.page,size:this.size}),r=`${l(this,i)}?${e}&classificationName=music`,c=await fetch(r);if(!c.ok)throw new Error("Failed to fetch events");return c.json()}}a=new WeakMap,i=new WeakMap;function g(t){t.map(e=>{var u,f;const r=((u=e.images[0])==null?void 0:u.url)||"",c=e.name||"No name avaible",s=e.dates.start.localDate||"Unknown Date",n=((f=e._embedded)==null?void 0:f.venues[0].name)||"Unknown Location",o=e.url||"#";return`
<li class="cards__item">
          <img src="${r}" alt="${c}" class="cards__img" />
          <h4 class="cards__event">${c}</h4>
          <p class="cards__date">${s}</p>
        <a href="${o}" target="_blank" rel="noopener noreferrer" class="cards__place">
          <img src="/img/place.svg" alt="" />
          ${n}
        </a>
      </li>
    `}).join("")}const v=document.getElementById("js-list"),y=new h;async function _(){var t;try{const r=((t=(await y.EventsApiService())._embedded)==null?void 0:t.events)||[],c=g(r);v.insertAdjacentHTML("beforeend",c)}catch(e){console.error(e)}}_();
//# sourceMappingURL=index.js.map
