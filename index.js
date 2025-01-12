var p=t=>{throw TypeError(t)};var m=(t,e,s)=>e.has(t)||p("Cannot "+s);var a=(t,e,s)=>(m(t,e,"read from private field"),s?s.call(t):e.get(t)),d=(t,e,s)=>e.has(t)?p("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,s);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))c(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&c(o)}).observe(document,{childList:!0,subtree:!0});function s(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function c(r){if(r.ep)return;r.ep=!0;const n=s(r);fetch(r.href,n)}})();var i,l;class h{constructor(){d(this,i,"cAC0PQfupJc4LZexavuatT33ADOVunkK");d(this,l,"https://app.ticketmaster.com/discovery/v2/events.json");this.page=1,this.pageSize=8}getApiKey(){return a(this,i)}getBaseUrl(){return a(this,l)}async fetchEvents(){const e=new URLSearchParams({apikey:a(this,i),page:this.page,size:this.size}),s=`${a(this,l)}?${e}&classificationName=music`,c=await fetch(s);if(!c.ok)throw new Error("Failed to fetch events");return c.json()}}i=new WeakMap,l=new WeakMap;function g(t){t.map(e=>{var u,f;const s=((u=e.images[0])==null?void 0:u.url)||"",c=e.name||"No name avaible",r=e.dates.start.localDate||"Unknown Date",n=((f=e._embedded)==null?void 0:f.venues[0].name)||"Unknown Location",o=e.url||"#";return`
<li class="cards__item">
          <img src="${s}" alt="${c}" class="cards__img" />
          <h4 class="cards__event">${c}</h4>
          <p class="cards__date">${r}</p>
        <a href="${o}" target="_blank" rel="noopener noreferrer" class="cards__place">
          <img src="/img/place.svg" alt="" />
          ${n}
        </a>
      </li>
    `}).join("")}const v=document.getElementById("js-list"),y=new h;async function _(){var t;try{const s=((t=(await y.EventsApiService())._embedded)==null?void 0:t.events)||[],c=g(s);v.insertAdjacentHTML("beforeend",c)}catch(e){console.error(e)}}_();
//# sourceMappingURL=index.js.map
