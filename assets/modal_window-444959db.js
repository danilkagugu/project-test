import{a as n}from"./vendor-db25513e.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function i(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(e){if(e.ep)return;e.ep=!0;const s=i(e);fetch(e.href,s)}})();const c="/project-test/assets/symbol-defs-940e27cf.svg",a=document.querySelector(".Backdrop"),d=document.querySelector(".ExerciseFiltersList"),u="https://energyflow.b.goit.study/api";d.addEventListener("click",p);async function p(t){if(t.target.nodeName!=="BUTTON")return;const o=t.target.closest("li").id;console.log(o);try{const i=await n.get(`${u}/exercises/${o}`);console.log(i),f(i.data),a.classList.add("IsOpen")}catch(i){console.log(i)}}function f(t){const o=` <div class="Modal">
  <button class="ModalClose" type="button">
          <svg class="CloseModalIcon" width="8" height="8">
            <use href="${c}#icon-close"></use>
          </svg>
        </button>
  <div class="ModalImage">     
  <img class="ImageGif" src="${t.gifUrl}" alt="imagegif"/>
  </div>
  <h3 class="ModalTitle">${t.name}</h3>
  <div class="ModalRating">
  <p class="NumberRating">${t.rating}</p>
  <div class="StarRating"></div>
  </div>
  <ul class="ModalList">
  <li class="ModalListItem">Target ${t.target}</li>
  <li class="ModalListItem">Body Part ${t.bodyPart}</li>
  <li class="ModalListItem">Equipment${t.equipment}</li>
  <li class="ModalListItem">Popular${t.popularity}</li>
  <li class="ModalListItem">Burned Calories${t.burnedCalories}/${t.time} min</li>
  </ul>
  <p class="Description">${t.description}</p>
  <button class="AddRemoveFavorites" type="button">Add to favorites</button>
  </div>
  </div> `;a.innerHTML=o}export{c as i};
//# sourceMappingURL=modal_window-444959db.js.map
