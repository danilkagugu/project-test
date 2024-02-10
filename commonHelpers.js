import{a as g,i as M}from"./assets/vendor-8cce9181.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function s(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=s(o);fetch(o.href,i)}})();const G=document.querySelector(".FilterButtons"),H=document.querySelector(".ExerciseFiltersList"),O=document.querySelector(".Pagination"),Q="https://energyflow.b.goit.study/api";let J="Muscles",$=1,U=window.innerWidth,T=0;G.addEventListener("click",Z);O.addEventListener("click",V);U<=375?T=8:(U<=768,T=12);async function N(){try{return(await g.get(`${Q}/filters`,{params:{filter:J,page:$,limit:T}})).data}catch(e){console.log(e)}}async function X(){try{const e=await N().then(t=>{const{results:s,totalPages:r,page:o}=t;if(s&&s.length>0){A(s);const i=C(o,r);O.innerHTML=i}else console.error("No exercises found.")})}catch(e){console.error("Error fetching exercises:",e)}}X();async function Z(e){e.preventDefault(),$=1;const s=e.target.dataset.filter;if(J=s,H.innerHTML="",Array.from(e.currentTarget.children).map(r=>{r.textContent!==e.target.textContent?r.classList.remove("ButtonIsActive"):e.target.classList.add("ButtonIsActive")}),e.target.tagName==="BUTTON")try{N(s).then(r=>{const{results:o,totalPages:i,page:n}=r;A(o);{const a=C(n,i);O.innerHTML=a}})}catch(r){console.log(r)}}async function V(e){$=e.target.textContent,Array.from(e.currentTarget.children).map(t=>{t.textContent!==$?t.classList.remove("PaginationBtnIsActive"):e.target.classList.add("PaginationBtnIsActive")}),H.innerHTML="";try{const{results:t,page:s,totalPages:r}=await N();if(s===r)return;A(t)}catch(t){console.log(t)}}function A(e){const t=e.map(({name:s,filter:r,imgUrl:o})=>` <li class="FilterList ExercisesItem" data-filter='${r}' data-name='${s}'>
        <img class="ImgExercises" src="${o}" alt="${r}">
        <div class="FilterText">
          <p class="FilterExercises">${s}</p>
          <p class="FilterName">${r}</p>
        </div>
      </li>`).join("");H.insertAdjacentHTML("beforeend",t)}function C(e,t){let s="";for(let r=1;r<=t;r+=1)s+=`<button class="PaginationBtn PaginationBtnIsActive" type="button">${r}</button>`;return s}document.querySelector(".FilterButtons");const y=document.querySelector(".ExerciseFiltersList"),ee=document.querySelector(".ExercisesHead"),d=document.querySelector(".Pagination"),k="https://energyflow.b.goit.study/api";let p=1,b,B;y.addEventListener("click",te);async function te(e){if(d.removeEventListener("click",V),d.removeEventListener("click",Y),e.target===e.currentTarget)return;y.classList.add("ExerciseCategoryList");const t=e.target.closest(".ExercisesItem");console.log(t),b=t.dataset.filter,B=t.dataset.name;try{const{page:s,perPage:r,totalPages:o,results:i}=await se(b,B);if(console.log(i),y.innerHTML=j(i),ee.innerHTML=re(B),document.querySelector("#FilterBtn").addEventListener("click",oe),d.innerHTML="",o>1){const a=C(s,o);console.log(a),d.innerHTML=a}//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!НОВЕ
d.addEventListener("click",K)}catch(s){console.log(s)}}async function se(e,t,s){try{return e==="Muscles"?(await g.get(`${k}/exercises`,{params:{muscles:t,page:s,limit:9}})).data:e==="Body parts"?(await g.get(`${k}/exercises`,{params:{bodypart:t,page:s,limit:9}})).data:(await g.get(`${k}/exercises`,{params:{equipment:t,page:s,limit:9}})).data}catch(r){console.log(r)}}function j(e){return e.map(({rating:s,name:r,burnedCalories:o,time:i,bodyPart:n,target:a})=>`<li class="WorkoutCard">
      <div class='CardHeader'>
        <div class='WorkoutWrapper'>
          <p class='Workout'>workout</p>
          <div class='RatingWrapper'><p>${s}</p>
          <svg class='StarIcon' width='13' height='13'>
          <use href='./img/symbol-defs.svg#icon-star'></use>
        </svg></div>
        </div>
        <div class='StartBtn'>
          <p>Start</p>
          <svg width='13' height='13'>
          <use href='./img/symbol-defs.svg#icon-arrow'></use>
        </svg>
        </div>
      </div>
      <div class='CardMainPart'>
      <div class='RunIconWrapper'><svg width='14' height='14'>
          <use href='./img/symbol-defs.svg#icon-running'></use>
        </svg></div>
        <p class='MainPartName'>${r}</p>
      </div>
      <ul class="CardFooter">
        <li>
          <p class='CardFooterTextDescr'>Burned calories: <span class='CardFooterTextValue'>${o} / ${i} min</span></p>
        </li>
        <li>
          <p class='CardFooterTextDescr'>Body part: <span class='CardFooterTextValue'>${n}</span></p>
        </li>
        <li>
          <p class='CardFooterTextDescr'>Target: <span class='CardFooterTextValue'>${a}</span></p>
        </li>
      </ul>

    </li>`).join("")}function re(e){return`<div>
  <h2 class="TitleExercises">Exercises / <span class="NameValue"> ${e}</span></h2>
  <div class="ExercisesHeared">
  <div class="ListExercises FilterButtons" id='FilterBtn'>
    <button class="ItemExercises" data-filter="Muscles">Muscles</button>
    <button class="ItemExercises" data-filter="Body parts">Body parts</button>
    <button class="ItemExercises" data-filter="Equipment">Equipment</button>
  </div>
    <form action="" class="ExercisesForm">
      <label for="#search" class="visually-hidden">Search</label>
      <input class='SearchInput' name="search" placeholder="Search" type="search" id="search" />
      <button class='SearchButton' type="submit">
        <svg class='IconSearch' width='18' height='18'>
          <use href='./img/symbol-defs.svg#icon-search'></use>
        </svg>
      </button>
    </form></div>
</div>
`}async function oe(e){if(p=1,d.removeEventListener("click",K),e.target!==e.currentTarget){b=e.target.dataset.filter;try{const{page:t,perPage:s,totalPages:r,results:o}=await _(b);if(console.log(r),y.innerHTML=z(o),r>1){const a=C(t,r);console.log(a),d.innerHTML=a}else d.innerHTML="";d.addEventListener("click",Y);const i=document.querySelector(".TitleExercises");i.innerHTML="Exercises";const n=document.querySelector(".ExercisesForm");console.log(i)}catch(t){console.log(t)}}}async function _(e=filterValueDefault){try{return(await g.get(`${k}/filters`,{params:{filter:e,page:p,limit:12}})).data}catch(t){console.log(t)}}function z(e){return e.map(({name:s,filter:r,imgUrl:o})=>` <li class='FilterList ExercisesItem' data-filter='${r}' data-name='${s}'>
        <img class="ImgExercises" src="${o}" alt="${r}">
        <div class="FilterText">
          <p class="FilterExercises">${s}</p>
          <p class="FilterName">${r}</p>
        </div>
      </li>`).join("")}async function K(e){p=e.target.textContent,console.log(p);try{y.innerHTML=j(results)}catch(t){console.log(t)}}async function Y(e){p=e.target.textContent,console.log(p);try{const{results:t,page:s,totalPages:r}=await _(b,p);console.log(t),y.innerHTML=z(t)}catch(t){console.log(t)}}const ie="https://energyflow.b.goit.study/api/exercises",D={searchForm:document.querySelector(".SearchExercises"),searchInput:document.querySelector(".SearchInput"),searchList:document.querySelector(".SearchExercisesList")},w={query:"",page:1};D.searchForm.addEventListener("submit",ae);async function ae(e){e.preventDefault(),D.searchList.innerHTML="",w.page=1;const t=e.currentTarget;w.query=t.elements.query.value.trim(),w.query&&await ne(w)}async function ne(e){try{const t=await g.get(`${ie}`,{params:{bodypart:"",muscles:"",equipment:"",keyword:e.query,page:e.page,limit:9}});ce(t.data.results)}catch(t){handleError(t)}}function ce(e){e.length===0?le():e.forEach(t=>{const s=document.createElement("li");s.textContent=t.name,D.searchList.appendChild(s)})}function le(){M.error({title:"No Results",message:"Unfortunately, no results were found. You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs"})}const h={form:document.querySelector(".footerForm"),input:document.querySelector(".formInput"),submit:document.querySelector(".modalButton")},de="https://energyflow.b.goit.study/api/subscription",ue="feedback-form-state",I=JSON.parse(localStorage.getItem(ue));I!=null?h.input.value=I.email:h.input.value="";h.submit.addEventListener("click",fe);async function fe(e){const t=h.input.value.trim();e.preventDefault();try{const s=await g.post(de,{email:t});M.show({position:"topRight",message:JSON.stringify(JSON.parse(s.request.responseText).message),maxWidth:"352",messageColor:"#fff",messageSize:"15px",backgroundColor:"rgba(27, 27, 27, 0.7)",close:!1,closeOnClick:!0}),h.input.value=""}catch(s){M.show({position:"topRight",message:JSON.stringify(JSON.parse(s.request.responseText).message),maxWidth:"352",messageColor:"#fff",messageSize:"15px",backgroundColor:"rgba(27, 27, 27, 0.7)",close:!1,closeOnClick:!0}),h.input.value=""}}const P="/Dyvani_programisty/assets/symbol-defs-2d4054da.svg",ge=window.location.pathname;ge.lastIndexOf("/");let E="favorites",m=localStorage.getItem(E);m||(localStorage.setItem(E,JSON.stringify([])),m="[]");let l=JSON.parse(m);const x=document.querySelector(".add-favorites"),c=document.querySelector(".favorites-list");let v="",L;const W=document.querySelector(".message-favorites"),f=document.querySelector(".favorites-pagination-block"),S=document.querySelector(".div-favorites-section"),R=document.querySelector(".favorites-list"),pe=document.querySelectorAll(".favorites-list-item");if(!m||l.length==0)W.classList.add("is-open-message-favorites"),f.classList.add("close");else if(m)try{l.forEach(e=>{const t=`<li class="favorites-list-item" id="${e.id}">
            <div class="favorites-card-header">
                <div class="favorites-workout">
                    <p>WORKOUT</p>
                </div>
                <button class="favorites-btn-trash" aria-label="trash" type="button">
                    <svg class="favorites-icon-delete" width="16" height="16" fill="none">
                        <use class="favorites-icon-delete-use" href="${P}#icon-trash"></use>
                    </svg>
                </button>
                <button
                    data-id="${e.id}"
                    class="favorites-btn-arrow"
                    aria-label="start"
                    type="button">Start
                        <svg class="favorites-icon-arrow" width="14" height="14" stroke="#1B1B1B">
                            <use class="favorites-icon-arrow-use" href="${P}#icon-arrow"></use>
                        </svg>
                </button>
                </div>
                <div class="favorites-main-container">

                <div class="favorite-icon-run-man">
                <svg width="14" height="14">
          <use href="${P}#icon-running"></use>
        </svg></div>                  
                    <h3 class="favorites-name-part">${e.name}</h3>
                </div>
                <div class="favorites-card-footer">
                <ul class="favorites-card-footer-list">
                    <li class="favorites-card-footer-item">
                        <div class="favorites-card-footer-wrapper">
                            <h4 class="favorites-card-footer-title">Burned calories:</h4>
                            <p class="favorites-card-footer-block">${e.burnedCalories}</p>
                        </div>
                        <div class="favorites-card-footer-wrapper">
                            <h4 class="favorites-card-footer-title">Body part:</h4>
                            <p class="favorites-card-footer-block">${e.bodyPart}</p>
                        </div>
                        <div class="favorites-card-footer-wrapper">
                            <h4 class="favorites-card-footer-title">Target:</h4>
                            <p class="favorites-card-footer-block">${e.target}</p>
                        </div>
                    </li>
                </ul>
            </div>
        </li>`;c.insertAdjacentHTML("beforeend",t)})}catch(e){console.log(e.name),console.log(e.message)}R.addEventListener("click",e=>{if(e.target.classList.contains("favorites-btn-trash")||e.target.classList.contains("favorites-icon-delete")||e.target.classList.contains("favorites-icon-delete-use")){v=e.currentTarget.id;const t=l.findIndex(s=>s.id==v);l.splice(t,1),localStorage.setItem(E,JSON.stringify(l)),pe.forEach(s=>{s.id==v&&(L=s)}),L&&R.removeChild(L),(!m||l.length==0)&&(W.classList.add("is-open-message-info"),f.classList.add("close"))}location.reload()});document.addEventListener("DOMContentLoaded",function(){function e(){window.innerWidth<=767&&t()?f.style.display="flex":f.style.display="none"}function t(){return c&&c.offsetParent!==null}function s(){const o=window.innerWidth<=767&&t()?6:c.children.length;if(window.innerWidth>767&&t()){for(let a=0;a<c.children.length;a++)c.children[a].style.display="block";return}Math.ceil(c.children.length/o);let i=1;function n(a){const q=(a-1)*o,F=q+o;for(let u=0;u<c.children.length;u++)c.children[u].style.display="none";for(let u=q;u<F&&u<c.children.length;u++)c.children[u].style.display="block"}n(i),f.addEventListener("click",function(a){a.target.tagName==="BUTTON"&&(f.querySelectorAll("button").forEach(F=>F.classList.remove("active-btn")),a.target.classList.add("active-btn"),i=parseInt(a.target.textContent),n(i))})}function r(){window.matchMedia("(min-width: 768px)").matches?S.style.overflowY="scroll":S.style.overflowY="visible",window.matchMedia("(min-width: 1440px)").matches?S.style.maxHeight="480px":S.style.maxHeight="none"}r(),e(),window.addEventListener("resize",function(){e(),s(),r()}),t()&&c.children.length>=6&&s()});x.addEventListener("click",e=>{if(e.preventDefault(),x.textContent.trim()=="Add to favorites")l.push({id:"64f389465ae26083f39b17df",gifUrl:"https://ftp.goit.study/img/power-pulse/gifs/0067.gif",name:"barbell one arm snatch",rating:"3.67",target:"delts",popular:"5548",bodyPart:"shoulders",equipment:"barbell",burnedCalories:"345",description:"Located at the shoulders, deltoids have three heads: anterior, lateral, and posterior. They are involved in various arm movements like lifting and rotating. Exercises include shoulder press, lateral raises, and front raises."}),localStorage.setItem(E,JSON.stringify(l)),x.textContent="Delete from favorites",x.innerHTML="Delete from favorites";else{const t=l.findIndex(r=>r.id==v);l.splice(t,1),localStorage.setItem(E,JSON.stringify(l));const s=document.querySelectorAll(".favorites-list-item");x.textContent="Add to favorities",document.querySelector(`.favorites-list-item[id="${v}"]`)&&(s.forEach(r=>{r.id==v&&(L=r)}),list.removeChild(L),(!m||l.length==0)&&(W.classList.add("is-open-message-info"),f.classList.add("close")))}location.reload()});
//# sourceMappingURL=commonHelpers.js.map
