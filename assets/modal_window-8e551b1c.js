import{a as J}from"./vendor-8cce9181.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function s(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(o){if(o.ep)return;o.ep=!0;const a=s(o);fetch(o.href,a)}})();const m="/project-test/assets/symbol-defs-de218909.svg",I=window.location.pathname,W=I.lastIndexOf("/"),E=I.substring(W);function D(e){let t=localStorage.getItem(e);return t||(localStorage.setItem(e,JSON.stringify([])),t="[]"),t}let L="favorites",S=D(L),v=JSON.parse(S);document.querySelector(".add-favorites");const n=document.querySelector(".favorites-list");let x;const P=document.querySelector(".message-favorites"),f=document.querySelector(".favorites-pagination-block"),w=document.querySelector(".div-favorites-section"),V=document.querySelectorAll(".favorites-list-item");if(E==="/favorites.html"){if(!S||v.length==0)P.classList.add("is-open-message-favorites"),f.classList.add("close");else if(S)try{v.forEach(e=>{T()})}catch(e){console.log(e.name),console.log(e.message)}}E==="/favorites.html"&&document.addEventListener("DOMContentLoaded",function(){function e(){window.location.pathname==="/favorites.html"&&window.innerWidth<=767&&t()?f.style.display="flex":f.style.display="none"}function t(){return n&&n.offsetParent!==null}function s(){const o=window.innerWidth<=767&&t()?8:n.children.length,a=Math.ceil(n.children.length/o);if(window.innerWidth>767&&t()){for(let r=0;r<n.children.length;r++)n.children[r].style.display="block";return}let l=1;function $(r){const u=(r-1)*o,b=u+o;for(let c=0;c<n.children.length;c++)n.children[c].style.display="none";for(let c=u;c<b&&c<n.children.length;c++)n.children[c].style.display="block"}$(l),f.innerHTML="";for(let r=1;r<=a;r++){const u=document.createElement("button");u.textContent=r,u.addEventListener("click",function(){l=r,$(l),k(l)}),f.appendChild(u)}function k(r){f.querySelectorAll("button").forEach((b,c)=>{c===r-1?b.classList.add("active-btn"):b.classList.remove("active-btn")})}k(l)}s(),window.addEventListener("resize",s);function i(){const o=Array.from(n.children).reduce((a,l)=>a+l.offsetHeight,0);window.matchMedia("(min-width: 1440px)").matches?w.style.maxHeight="500px":w.style.maxHeight="none",o>w.offsetHeight?w.style.overflowY="scroll":w.style.overflowY="visible",window.scrollBy(0,10)}i(),e(),window.addEventListener("resize",function(){e(),s(),i()}),t()&&n.children.length>=8&&s()});function Y(e){if(e.target.classList.contains("favorites-btn-trash")||e.target.classList.contains("favorites-icon-delete")||e.target.classList.contains("favorites-icon-delete-use")){const t=e.target.closest("li").id;A(t)}}E==="/favorites.html"&&n.addEventListener("click",Y);function A(e){const t=v.findIndex(s=>s._id==e);v.splice(t,1),localStorage.setItem(L,JSON.stringify(v)),V.forEach(s=>{s._id==e&&(x=s)}),x&&n.removeChild(x),(!S||v.length==0)&&(P.classList.add("is-open-message-info"),f.classList.add("close"),window.location.reload()),T()}function T(){n.innerHTML="",v.forEach(e=>{const t=z(e);n.insertAdjacentHTML("beforeend",t)})}function z(e){return`<li class="favorites-card favorites-list-item" id ='${e._id}'>
      <div class='favorites-card-header'>
        <div class='favorites-workout'>
          <p class='workout-p'>workout</p>

          <button class='favorites-btn-trash' type="button">
          <svg class='favorites-icon-delete' width='16' height='16' fill="none">
              <use class='favorites-icon-delete-use' href='${m}#icon-trash'></use>
            </svg>
          </button>
        </div>
        
          <button class="favorites-btn-arrow" type="button" >Start
            <svg width='14' height='14'>
              <use href='${m}#icon-arrow'></use>
            </svg>
          </button>
      </div>

      <div class='favorites-main-container'>
        <div class='favorites-icon-run-man'>
          <svg width='14' height='14'>
            <use href='${m}#icon-running'></use>
          </svg>
        </div>
        <p class='favorites-name-part'>${e.name}</p>
      </div>

      <ul class="favorites-card-footer-list">
        <li>
          <p class='favorites-card-footer-title'>Burned calories: <span class='favorites-footer-text-value'>${e.burnedCalories} / ${e.time} min</span></p>
        </li>
        <li>
          <p class='favorites-card-footer-title'>Body part: <span class='favorites-footer-text-value'>${e.bodyPart}</span></p>
        </li>
        <li>
          <p class='favorites-card-footer-title'>Target: <span class='favorites-footer-text-value'>${e.target}</span></p>
        </li>
      </ul>

    </li>`}function K(e){let t=JSON.parse(localStorage.getItem(L))||[],s=t.findIndex(i=>i._id===e._id);console.log(s),s===-1&&(t.push(e),localStorage.setItem(L,JSON.stringify(t)))}const g=document.querySelector(".backdrop");document.querySelector(".modal");const G=document.querySelector(".exercise-filters-list-subcategories"),Q=document.querySelector(".search-list"),B=document.querySelector("body"),X=document.querySelector(".favorites-list"),M="is-open";let p={},N,F,d,C,Z;B.classList.contains("home-style")&&(G.addEventListener("click",q),Q.addEventListener("click",q));B.classList.contains("favorites-style")&&X.addEventListener("click",te);async function q(e){const t=e.target.closest("li").id;try{if(e.target.nodeName!=="BUTTON")return;p=await R(t),O(),H(p),_(),U(),document.querySelectorAll("span").forEach(function(i){i.textContent=i.textContent.charAt(0).toUpperCase()+i.textContent.slice(1)}),d=document.querySelector(".add-remove-favorites"),Z=d.textContent,d.addEventListener("click",j);const s=document.querySelector(".close-modal-icon");document.addEventListener("keydown",function(i){i.key==="Escape"&&(h(),y())}),g.addEventListener("click",function(i){i.target===g&&(h(),y())}),s.addEventListener("click",function(i){i.target===s&&(h(),y())})}finally{}}function j(){K(p),d.innerText=" Remove from "}function ee(){A(p._id),console.log(p._id),d.innerText=" Add to favorites "}async function R(e){const t=`https://energyflow.b.goit.study/api/exercises/${e}`;try{return(await J.get(t)).data}catch{}}function H(e){const t=`<div class="modal">
   <button class="modal-close" type="button">
          <svg class="close-modal-icon" width="25" height="25">
            <use href="${m}#icon-close"></use>
          </svg>
        </button>
  <div class="modal-image">     
  <img class="image-gif" src="${e.gifUrl}" alt="imagegif"/>
  </div><div>
  <h3 class="modal-title">${e.name}</h3>
  <div class="modal-rating">
  <div class="number-rating">${e.rating}</div>
  <div class="rating-body">
    <div class="rating-active"></div>
    <div class="rating-items">
      <input type="radio" class="rating-item" value="1" name="Rating" />
      <input type="radio" class="rating-item" value="2" name="Rating" />
      <input type="radio" class="rating-item" value="3" name="Rating" />
      <input type="radio" class="rating-item" value="4" name="Rating" />
      <input type="radio" class="rating-item" value="5" name="Rating" />
    </div>
  </div>
  </div>
  <svg class="vector" width="25" height="2">
            <use href="${m}#icon-vector"></use>
          </svg>
  <ul class="modal-list">
  <li class="modal-list-item"><span class="item-title">Target</span> <span class="item-data">${e.target}</span></li>
  <li class="modal-list-item"><span class="item-title">Body Part</span> <span class="item-data">${e.bodyPart}</span></li>
  <li class="modal-list-item"><span class="item-title">Equipment</span><span class="item-data">${e.equipment}</span></li>
  <li class="modal-list-item"><span class="item-title">Popular</span><span class="item-data">${e.popularity}</span></li>
  <li class="modal-list-item"><span class="item-title">Burned Calories</span><span class="item-data">${e.burnedCalories}/${e.time} min</span></li>
  </ul>
  <svg class="vector" width="25" height="2">
            <use href="${m}#icon-vector"></use>
          </svg>
  <p class="description">${e.description}</p>
  <button class="add-remove-favorites" type="button">Add to favorites
  <svg class="heart-modal-icon" width="18" height="18">
            <use href="${m}#icon-heart"></use>
          </svg>   
          </button>
          </div>
  </div>
  </div> `;g.innerHTML=t}async function te(e){const t=e.target.closest("li").id;try{if(e.target.nodeName!=="BUTTON")return;p=await R(t),O(),H(p),_(),U(),document.querySelectorAll("span").forEach(function(i){i.textContent=i.textContent.charAt(0).toUpperCase()+i.textContent.slice(1)}),d=document.querySelector(".add-remove-favorites"),d.addEventListener("click",ee);const s=document.querySelector(".close-modal-icon");d.innerText=" Remove from ",document.addEventListener("keydown",function(i){i.key==="Escape"&&(h(),y())}),g.addEventListener("click",function(i){i.target===g&&(h(),y())}),s.addEventListener("click",function(i){i.target===s&&(h(),y())})}finally{}}function O(){g.classList.add(M)}function h(){g.classList.remove(M)}function _(){ie(),se()}function ie(){N=document.querySelector(".rating-active"),F=document.querySelector(".number-rating")}function se(e=F.innerHTML){const t=e/.05;N.style.width=`${t}%`}function U(){C=window.scrollY,document.body.style.position="absolute",document.body.style.width="100%",document.body.style.overflow="hidden",document.body.style.top=`-${C}px`}function y(){document.body.style.overflow="",document.body.style.position="",document.body.style.width="",document.body.style.top="",window.scrollTo(0,C)}export{m as i};
//# sourceMappingURL=modal_window-8e551b1c.js.map
