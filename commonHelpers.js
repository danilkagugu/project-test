import{a as y}from"./assets/vendor-0cb09735.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(e){if(e.ep)return;e.ep=!0;const i=s(e);fetch(e.href,i)}})();document.querySelectorAll(".item-exercises");const L=document.querySelector(".filter-buttons"),l=document.querySelector(".exercise-filters-list"),f=document.querySelector(".pagination"),b="https://energyflow.b.goit.study/api";let g="Muscles",c=1,u=window.innerWidth,a=0;document.querySelector(".pagination-btn");L.addEventListener("click",h);u<=375?a=8:(u<=768,a=12);async function d(){try{return(await y.get(`${b}/filters`,{params:{filter:g,page:c,limit:a}})).data}catch(t){console.log(t)}}async function h(t){t.preventDefault(),c=1;const s=t.target.dataset.filter;if(g=s,l.innerHTML="",Array.from(t.currentTarget.children).map(r=>{r.textContent!==t.target.textContent?r.classList.remove("button-is-active"):t.target.classList.add("button-is-active")}),console.log(t.target.textContent.trim()),t.target.tagName==="BUTTON")try{d(s).then(r=>{const{results:e,totalPages:i,page:o}=r;p(e);{const m=x(o,i);f.innerHTML=m}})}catch(r){console.log(r)}}function p(t){const n=t.map(({name:s,filter:r,imgUrl:e})=>` <li class="filter-list" data-filter>
        <img class="img-exercises" src="${e}" alt="${r}">
        <div class="filter-text">
          <p class="filter-exercises">${s}</p>
          <p class="filter-name">${r}</p>
        </div>
      </li>`).join("");l.insertAdjacentHTML("beforeend",n)}function x(t,n){let s="";for(let r=1;r<=n;r+=1)s+=`<button class="pagination-btn pagination-btn-is-active" type="button">${r}</button>`;return s}async function P(t){c=t.target.textContent,Array.from(t.currentTarget.children).map(n=>{n.textContent!==c?(console.log(n.textContent),console.log(t.target.textContent),n.classList.remove("pagination-btn-is-active")):t.target.classList.add("pagination-btn-is-active")}),l.innerHTML="";try{const{results:n,page:s,totalPages:r}=await d();if(s===r)return;p(n)}catch(n){console.log(n)}}f.addEventListener("click",P);
//# sourceMappingURL=commonHelpers.js.map
