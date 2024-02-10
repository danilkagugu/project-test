import{a as g,i as H}from"./assets/vendor-8cce9181.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function s(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=s(a);fetch(a.href,i)}})();const Q=document.querySelector(".FilterButtons"),T=document.querySelector(".ExerciseFiltersList"),O=document.querySelector(".Pagination"),X="https://energyflow.b.goit.study/api";let R="Muscles",k=1,U=window.innerWidth,E=0;Q.addEventListener("click",ee);O.addEventListener("click",J);U<=375?E=8:(U<=768,E=12);async function A(){try{return(await g.get(`${X}/filters`,{params:{filter:R,page:k,limit:E}})).data}catch(e){console.log(e)}}async function Z(){try{const e=await A().then(t=>{const{results:s,totalPages:r,page:a}=t;if(s&&s.length>0){T.innerHTML=L(s);const i=B(a,r);O.innerHTML=i}else console.error("No exercises found.")})}catch(e){console.error("Error fetching exercises:",e)}}Z();async function ee(e){e.preventDefault(),k=1;const s=e.target.dataset.filter;if(R=s,T.innerHTML="",Array.from(e.currentTarget.children).map(r=>{r.textContent!==e.target.textContent?r.classList.remove("ButtonIsActive"):e.target.classList.add("ButtonIsActive")}),e.target.tagName==="BUTTON")try{A(s).then(r=>{const{results:a,totalPages:i,page:n}=r;T.innerHTML=L(a);{const o=B(n,i);O.innerHTML=o}})}catch(r){console.log(r)}}async function J(e){if(e.target.tagName==="BUTTON"){k=e.target.textContent,Array.from(e.currentTarget.children).map(t=>{t.textContent!==k?t.classList.remove("PaginationBtnIsActive"):e.target.classList.add("PaginationBtnIsActive")});try{const{results:t,page:s,totalPages:r}=await A();if(console.log(e.target),s===r)return;T.innerHTML=L(t)}catch(t){console.log(t)}}}function L(e){return e.map(({name:s,filter:r,imgUrl:a})=>` <li class='FilterList ExercisesItem' data-filter='${r}' data-name='${s}'>
        <img class="ImgExercises" src="${a}" alt="${r}">
        <div class="FilterText">
          <p class="FilterExercises">${s}</p>
          <p class="FilterName">${r}</p>
        </div>
      </li>`).join("")}function B(e,t){let s="";for(let r=1;r<=t;r+=1)s+=`<button class="PaginationBtn PaginationBtnIsActive" type="button">${r}</button>`;return s}const f=document.querySelector(".ExerciseFiltersList"),te=document.querySelector(".ExercisesHead"),l=document.querySelector(".Pagination"),w="https://energyflow.b.goit.study/api";let h=1,v,S;f.addEventListener("click",se);async function se(e){if(f.classList.add("ExerciseCategoryList"),l.removeEventListener("click",J),l.removeEventListener("click",Y),e.target===e.currentTarget)return;f.classList.add("ExerciseCategoryList");const t=e.target.closest(".ExercisesItem");v=t.dataset.filter,S=t.dataset.name;try{te.innerHTML=re(S);const{page:s,totalPages:r,results:a}=await j(v,S);f.innerHTML=z(a);const i=document.querySelector("#FilterBtn");if(i.addEventListener("click",ae),i.addEventListener("click",V),l.innerHTML="",r>1){const n=B(s,r);l.innerHTML=n}l.addEventListener("click",K)}catch(s){console.log(s)}}function V(){document.querySelector(".ExercisesForm").remove(),FilterBtn.removeEventListener("click",V)}async function j(e,t,s){try{return e==="Muscles"?(await g.get(`${w}/exercises`,{params:{muscles:t,page:s,limit:9}})).data:e==="Body parts"?(await g.get(`${w}/exercises`,{params:{bodypart:t,page:s,limit:9}})).data:(await g.get(`${w}/exercises`,{params:{equipment:t,page:s,limit:9}})).data}catch(r){console.log(r)}}function z(e){return e.map(({rating:s,name:r,burnedCalories:a,time:i,bodyPart:n,target:o})=>`<li class="WorkoutCard">
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
          <p class='CardFooterTextDescr'>Burned calories: <span class='CardFooterTextValue'>${a} / ${i} min</span></p>
        </li>
        <li>
          <p class='CardFooterTextDescr'>Body part: <span class='CardFooterTextValue'>${n}</span></p>
        </li>
        <li>
          <p class='CardFooterTextDescr'>Target: <span class='CardFooterTextValue'>${o}</span></p>
        </li>
      </ul>

    </li>`).join("")}function re(e){return`<div>
  <h2 class="TitleExercises">Exercises / <span class="NameValue"> ${e}</span></h2>
  <div class="ExercisesHeared">
  <div class="ListExercises FilterButtons" id='FilterBtn'>
    <button class="ItemExercises" data-filter="Muscles" id='MusclesBtn'>Muscles</button>
    <button class="ItemExercises" data-filter="Body parts" id='BodyPartBtn'>Body parts</button>
    <button class="ItemExercises" data-filter="Equipment" id='EquipmentBtn'>Equipment</button>
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
`}async function ae(e){if(f.classList.remove("ExerciseCategoryList"),h=1,l.removeEventListener("click",K),Array.from(e.currentTarget.children).map(t=>{t.textContent!==e.target.textContent?t.classList.remove("ButtonIsActive"):e.target.classList.add("ButtonIsActive")}),e.target!==e.currentTarget){v=e.target.dataset.filter;try{const{page:t,totalPages:s,results:r}=await _(v);if(f.innerHTML=L(r),s>1){const i=B(t,s);l.innerHTML=i}else l.innerHTML="";l.addEventListener("click",Y);const a=document.querySelector(".TitleExercises");a.innerHTML="Exercises"}catch(t){console.log(t)}}}async function _(e=filterValueDefault){try{return(await g.get(`${w}/filters`,{params:{filter:e,page:h,limit:12}})).data}catch(t){console.log(t)}}async function K(e){if(e.target.tagName==="BUTTON"){h=e.target.textContent;try{const{results:t}=await j(v,S,h);f.innerHTML=z(t)}catch(t){console.log(t)}}}async function Y(e){h=e.target.textContent;try{const{results:t}=await _(v,h);f.innerHTML=L(t)}catch(t){console.log(t)}}const ie="https://energyflow.b.goit.study/api/exercises",D={searchForm:document.querySelector(".SearchExercises"),searchInput:document.querySelector(".SearchInput"),searchList:document.querySelector(".SearchExercisesList")},x={query:"",page:1};D.searchForm.addEventListener("submit",oe);async function oe(e){e.preventDefault(),D.searchList.innerHTML="",x.page=1;const t=e.currentTarget;x.query=t.elements.query.value.trim(),x.query&&await ne(x)}async function ne(e){try{const t=await g.get(`${ie}`,{params:{bodypart:"",muscles:"",equipment:"",keyword:e.query,page:e.page,limit:9}});ce(t.data.results)}catch(t){handleError(t)}}function ce(e){e.length===0?le():e.forEach(t=>{const s=document.createElement("li");s.textContent=t.name,D.searchList.appendChild(s)})}function le(){H.error({title:"No Results",message:"Unfortunately, no results were found. You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs"})}const m={form:document.querySelector(".footerForm"),input:document.querySelector(".formInput"),submit:document.querySelector(".modalButton")},de="https://energyflow.b.goit.study/api/subscription",ue="feedback-form-state",$=JSON.parse(localStorage.getItem(ue));$!=null?m.input.value=$.email:m.input.value="";m.submit.addEventListener("click",fe);async function fe(e){const t=m.input.value.trim();e.preventDefault();try{const s=await g.post(de,{email:t});H.show({position:"topRight",message:JSON.stringify(JSON.parse(s.request.responseText).message),maxWidth:"352",messageColor:"#fff",messageSize:"15px",backgroundColor:"rgba(27, 27, 27, 0.7)",close:!1,closeOnClick:!0}),m.input.value=""}catch(s){H.show({position:"topRight",message:JSON.stringify(JSON.parse(s.request.responseText).message),maxWidth:"352",messageColor:"#fff",messageSize:"15px",backgroundColor:"rgba(27, 27, 27, 0.7)",close:!1,closeOnClick:!0}),m.input.value=""}}const I="/project-test/assets/symbol-defs-2d4054da.svg",ge=window.location.pathname;ge.lastIndexOf("/");let C="favorites",y=localStorage.getItem(C);y||(localStorage.setItem(C,JSON.stringify([])),y="[]");let u=JSON.parse(y);const N=document.querySelector(".add-favorites"),c=document.querySelector(".favorites-list");let M="",P;const G=document.querySelector(".message-favorites"),p=document.querySelector(".favorites-pagination-block"),b=document.querySelector(".div-favorites-section"),W=document.querySelector(".favorites-list"),pe=document.querySelectorAll(".favorites-list-item");if(!y||u.length==0)G.classList.add("is-open-message-favorites"),p.classList.add("close");else if(y)try{u.forEach(e=>{const t=`<li class="favorites-list-item" id="${e.id}">
            <div class="favorites-card-header">
                <div class="favorites-workout">
                    <p>WORKOUT</p>
                </div>
                <button class="favorites-btn-trash" aria-label="trash" type="button">
                    <svg class="favorites-icon-delete" width="16" height="16" fill="none">
                        <use class="favorites-icon-delete-use" href="${I}#icon-trash"></use>
                    </svg>
                </button>
                <button
                    data-id="${e.id}"
                    class="favorites-btn-arrow"
                    aria-label="start"
                    type="button">Start
                        <svg class="favorites-icon-arrow" width="14" height="14" stroke="#1B1B1B">
                            <use class="favorites-icon-arrow-use" href="${I}#icon-arrow"></use>
                        </svg>
                </button>
                </div>
                <div class="favorites-main-container">

                <div class="favorite-icon-run-man">
                <svg width="14" height="14">
          <use href="${I}#icon-running"></use>
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
        </li>`;c.insertAdjacentHTML("beforeend",t)})}catch(e){console.log(e.name),console.log(e.message)}W.addEventListener("click",e=>{if(e.target.classList.contains("favorites-btn-trash")||e.target.classList.contains("favorites-icon-delete")||e.target.classList.contains("favorites-icon-delete-use")){M=e.currentTarget.id;const t=u.findIndex(s=>s.id==M);u.splice(t,1),localStorage.setItem(C,JSON.stringify(u)),pe.forEach(s=>{s.id==M&&(P=s)}),P&&W.removeChild(P),(!y||u.length==0)&&(G.classList.add("is-open-message-info"),p.classList.add("close"))}location.reload()});document.addEventListener("DOMContentLoaded",function(){function e(){window.innerWidth<=767&&t()?p.style.display="flex":p.style.display="none"}function t(){return c&&c.offsetParent!==null}function s(){const a=window.innerWidth<=767&&t()?6:c.children.length;if(window.innerWidth>767&&t()){for(let o=0;o<c.children.length;o++)c.children[o].style.display="block";return}Math.ceil(c.children.length/a);let i=1;function n(o){const F=(o-1)*a,q=F+a;for(let d=0;d<c.children.length;d++)c.children[d].style.display="none";for(let d=F;d<q&&d<c.children.length;d++)c.children[d].style.display="block"}n(i),p.addEventListener("click",function(o){o.target.tagName==="BUTTON"&&(p.querySelectorAll("button").forEach(q=>q.classList.remove("active-btn")),o.target.classList.add("active-btn"),i=parseInt(o.target.textContent),n(i))})}function r(){window.matchMedia("(min-width: 768px)").matches?b.style.overflowY="scroll":b.style.overflowY="visible",window.matchMedia("(min-width: 1440px)").matches?b.style.maxHeight="480px":b.style.maxHeight="none"}r(),e(),window.addEventListener("resize",function(){e(),s(),r()}),t()&&c.children.length>=6&&s()});N.addEventListener("click",me);function me(e){e.preventDefault(),u.push({id:"64f389465ae26083f39b17df",gifUrl:"https://ftp.goit.study/img/power-pulse/gifs/0067.gif",name:"barbell one arm snatch",rating:"3.67",target:"delts",popular:"5548",bodyPart:"shoulders",equipment:"barbell",burnedCalories:"345",description:"Located at the shoulders, deltoids have three heads: anterior, lateral, and posterior. They are involved in various arm movements like lifting and rotating. Exercises include shoulder press, lateral raises, and front raises."}),localStorage.setItem(C,JSON.stringify(u)),N.textContent="Delete from favorites",N.innerHTML="Delete from favorites"}
//# sourceMappingURL=commonHelpers.js.map
