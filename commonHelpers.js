import{a as l}from"./assets/vendor-0cb09735.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const a=document.querySelector(".filter-buttons"),c=document.querySelector(".exercise-filters-list"),u="https://energyflow.b.goit.study/api",f="Muscles";a.addEventListener("click",d);async function d(o){o.preventDefault();const i=o.target.dataset.filter;if(c.innerHTML="",console.log(i),o.target.tagName==="BUTTON")try{p(i).then(r=>{console.log(r),m(r)})}catch(r){console.log(r)}}async function p(o=f){try{return(await l.get(`${u}/filters`,{params:{filter:o,page:1,limit:8}})).data.results}catch(s){console.log(s)}}function m(o){const s=o.map(({name:i,filter:r,imgUrl:e})=>` <li data-filter>
        <img class="img-exercises" src="${e}" alt="${r}">
        <div>
          <p>${i}</p>
          <p>${r}</p>
        </div>
      </li>`).join("");c.insertAdjacentHTML("beforeend",s)}
//# sourceMappingURL=commonHelpers.js.map
