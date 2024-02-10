import{a as p,i as I}from"./assets/vendor-8cce9181.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function s(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=s(i);fetch(i.href,a)}})();const Z=document.querySelector(".FilterButtons"),M=document.querySelector(".ExerciseFiltersList"),H=document.querySelector(".Pagination"),ee="https://energyflow.b.goit.study/api";let U="Muscles",S=1,D=window.innerWidth,b=0;Z.addEventListener("click",se);H.addEventListener("click",R);D<=375?b=8:(D<=768,b=12);async function O(){try{return(await p.get(`${ee}/filters`,{params:{filter:U,page:S,limit:b}})).data}catch(e){console.log(e)}}async function te(){try{const e=await O().then(t=>{const{results:s,totalPages:r,page:i}=t;if(s&&s.length>0){N(s);const a=J(i,r);H.innerHTML=a}else console.error("No exercises found.")})}catch(e){console.error("Error fetching exercises:",e)}}te();async function se(e){e.preventDefault(),S=1;const s=e.target.dataset.filter;if(U=s,M.innerHTML="",Array.from(e.currentTarget.children).map(r=>{r.textContent!==e.target.textContent?r.classList.remove("ButtonIsActive"):e.target.classList.add("ButtonIsActive")}),e.target.tagName==="BUTTON")try{O(s).then(r=>{const{results:i,totalPages:a,page:c}=r;N(i);{const o=J(c,a);H.innerHTML=o}})}catch(r){console.log(r)}}async function R(e){S=e.target.textContent,Array.from(e.currentTarget.children).map(t=>{t.textContent!==S?t.classList.remove("PaginationBtnIsActive"):e.target.classList.add("PaginationBtnIsActive")}),M.innerHTML="";try{const{results:t,page:s,totalPages:r}=await O();if(s===r)return;N(t)}catch(t){console.log(t)}}function N(e){const t=e.map(({name:s,filter:r,imgUrl:i})=>` <li class="FilterList ExercisesItem" data-filter='${r}' data-name='${s}'>
        <img class="ImgExercises" src="${i}" alt="${r}">
        <div class="FilterText">
          <p class="FilterExercises">${s}</p>
          <p class="FilterName">${r}</p>
        </div>
      </li>`).join("");M.insertAdjacentHTML("beforeend",t)}function J(e,t){let s="";for(let r=1;r<=t;r+=1)s+=`<button class="PaginationBtn PaginationBtnIsActive" type="button">${r}</button>`;return s}const f=document.querySelector(".ExerciseFiltersList"),re=document.querySelector(".ExercisesHead"),l=document.querySelector(".Pagination"),E="https://energyflow.b.goit.study/api";let h=1,v,w;f.addEventListener("click",ie);async function ie(e){if(f.classList.add("ExerciseCategoryList"),l.removeEventListener("click",R),l.removeEventListener("click",Q),e.target===e.currentTarget)return;f.classList.add("ExerciseCategoryList");const t=e.target.closest(".ExercisesItem");v=t.dataset.filter,w=t.dataset.name;try{re.innerHTML=ae(w);const{totalPages:s,results:r}=await j(v,w);f.innerHTML=z(r);const i=document.querySelector("#FilterBtn");if(i.addEventListener("click",oe),i.addEventListener("click",V),l.innerHTML="",s>1){const a=Y(s);l.innerHTML=a}l.addEventListener("click",G)}catch(s){console.log(s)}}function V(){document.querySelector(".ExercisesForm").remove(),FilterBtn.removeEventListener("click",V)}async function j(e,t,s){try{return e==="Muscles"?(await p.get(`${E}/exercises`,{params:{muscles:t,page:s,limit:9}})).data:e==="Body parts"?(await p.get(`${E}/exercises`,{params:{bodypart:t,page:s,limit:9}})).data:(await p.get(`${E}/exercises`,{params:{equipment:t,page:s,limit:9}})).data}catch(r){console.log(r)}}function z(e){return e.map(({rating:s,name:r,burnedCalories:i,time:a,bodyPart:c,target:o})=>`<li class="WorkoutCard">
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
          <p class='CardFooterTextDescr'>Burned calories: <span class='CardFooterTextValue'>${i} / ${a} min</span></p>
        </li>
        <li>
          <p class='CardFooterTextDescr'>Body part: <span class='CardFooterTextValue'>${c}</span></p>
        </li>
        <li>
          <p class='CardFooterTextDescr'>Target: <span class='CardFooterTextValue'>${o}</span></p>
        </li>
      </ul>

    </li>`).join("")}function ae(e){return`<div>
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
`}async function oe(e){if(f.classList.remove("ExerciseCategoryList"),h=1,l.removeEventListener("click",G),Array.from(e.currentTarget.children).map(t=>{t.textContent!==e.target.textContent?t.classList.remove("ButtonIsActive"):e.target.classList.add("ButtonIsActive")}),e.target!==e.currentTarget){v=e.target.dataset.filter;try{const{totalPages:t,results:s}=await _(v);if(f.innerHTML=K(s),t>1){const i=Y(t);l.innerHTML=i}else l.innerHTML="";l.addEventListener("click",Q);const r=document.querySelector(".TitleExercises");r.innerHTML="Exercises"}catch(t){console.log(t)}}}async function _(e=filterValueDefault){try{return(await p.get(`${E}/filters`,{params:{filter:e,page:h,limit:12}})).data}catch(t){console.log(t)}}function K(e){return e.map(({name:s,filter:r,imgUrl:i})=>` <li class='FilterList ExercisesItem' data-filter='${r}' data-name='${s}'>
        <img class="ImgExercises" src="${i}" alt="${r}">
        <div class="FilterText">
          <p class="FilterExercises">${s}</p>
          <p class="FilterName">${r}</p>
        </div>
      </li>`).join("")}function Y(e){let t="";for(let s=1;s<=e;s+=1)t+=`<button class="pagination-btn" type="button">${s}</button>`;return t}async function G(e){h=e.target.textContent;try{const{results:t}=await j(v,w,h);f.innerHTML=z(t)}catch(t){console.log(t)}}async function Q(e){h=e.target.textContent;try{const{results:t}=await _(v,h);f.innerHTML=K(t)}catch(t){console.log(t)}}const ne="https://energyflow.b.goit.study/api/exercises",A={searchForm:document.querySelector(".SearchExercises"),searchInput:document.querySelector(".SearchInput"),searchList:document.querySelector(".SearchExercisesList")},x={query:"",page:1};A.searchForm.addEventListener("submit",ce);async function ce(e){e.preventDefault(),A.searchList.innerHTML="",x.page=1;const t=e.currentTarget;x.query=t.elements.query.value.trim(),x.query&&await le(x)}async function le(e){try{const t=await p.get(`${ne}`,{params:{bodypart:"",muscles:"",equipment:"",keyword:e.query,page:e.page,limit:9}});de(t.data.results)}catch(t){handleError(t)}}function de(e){e.length===0?ue():e.forEach(t=>{const s=document.createElement("li");s.textContent=t.name,A.searchList.appendChild(s)})}function ue(){I.error({title:"No Results",message:"Unfortunately, no results were found. You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs"})}const m={form:document.querySelector(".footerForm"),input:document.querySelector(".formInput"),submit:document.querySelector(".modalButton")},fe="https://energyflow.b.goit.study/api/subscription",pe="feedback-form-state",B=JSON.parse(localStorage.getItem(pe));B!=null?m.input.value=B.email:m.input.value="";m.submit.addEventListener("click",ge);async function ge(e){const t=m.input.value.trim();e.preventDefault();try{const s=await p.post(fe,{email:t});I.show({position:"topRight",message:JSON.stringify(JSON.parse(s.request.responseText).message),maxWidth:"352",messageColor:"#fff",messageSize:"15px",backgroundColor:"rgba(27, 27, 27, 0.7)",close:!1,closeOnClick:!0}),m.input.value=""}catch(s){I.show({position:"topRight",message:JSON.stringify(JSON.parse(s.request.responseText).message),maxWidth:"352",messageColor:"#fff",messageSize:"15px",backgroundColor:"rgba(27, 27, 27, 0.7)",close:!1,closeOnClick:!0}),m.input.value=""}}const C="/project-test/assets/symbol-defs-2d4054da.svg",me=window.location.pathname;me.lastIndexOf("/");let k="favorites",y=localStorage.getItem(k);y||(localStorage.setItem(k,JSON.stringify([])),y="[]");let u=JSON.parse(y);const P=document.querySelector(".add-favorites"),n=document.querySelector(".favorites-list");let F="",q;const X=document.querySelector(".message-favorites"),g=document.querySelector(".favorites-pagination-block"),L=document.querySelector(".div-favorites-section"),W=document.querySelector(".favorites-list"),he=document.querySelectorAll(".favorites-list-item");if(!y||u.length==0)X.classList.add("is-open-message-favorites"),g.classList.add("close");else if(y)try{u.forEach(e=>{const t=`<li class="favorites-list-item" id="${e.id}">
            <div class="favorites-card-header">
                <div class="favorites-workout">
                    <p>WORKOUT</p>
                </div>
                <button class="favorites-btn-trash" aria-label="trash" type="button">
                    <svg class="favorites-icon-delete" width="16" height="16" fill="none">
                        <use class="favorites-icon-delete-use" href="${C}#icon-trash"></use>
                    </svg>
                </button>
                <button
                    data-id="${e.id}"
                    class="favorites-btn-arrow"
                    aria-label="start"
                    type="button">Start
                        <svg class="favorites-icon-arrow" width="14" height="14" stroke="#1B1B1B">
                            <use class="favorites-icon-arrow-use" href="${C}#icon-arrow"></use>
                        </svg>
                </button>
                </div>
                <div class="favorites-main-container">

                <div class="favorite-icon-run-man">
                <svg width="14" height="14">
          <use href="${C}#icon-running"></use>
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
        </li>`;n.insertAdjacentHTML("beforeend",t)})}catch(e){console.log(e.name),console.log(e.message)}W.addEventListener("click",e=>{if(e.target.classList.contains("favorites-btn-trash")||e.target.classList.contains("favorites-icon-delete")||e.target.classList.contains("favorites-icon-delete-use")){F=e.currentTarget.id;const t=u.findIndex(s=>s.id==F);u.splice(t,1),localStorage.setItem(k,JSON.stringify(u)),he.forEach(s=>{s.id==F&&(q=s)}),q&&W.removeChild(q),(!y||u.length==0)&&(X.classList.add("is-open-message-info"),g.classList.add("close"))}location.reload()});document.addEventListener("DOMContentLoaded",function(){function e(){window.innerWidth<=767&&t()?g.style.display="flex":g.style.display="none"}function t(){return n&&n.offsetParent!==null}function s(){const i=window.innerWidth<=767&&t()?6:n.children.length;if(window.innerWidth>767&&t()){for(let o=0;o<n.children.length;o++)n.children[o].style.display="block";return}Math.ceil(n.children.length/i);let a=1;function c(o){const T=(o-1)*i,$=T+i;for(let d=0;d<n.children.length;d++)n.children[d].style.display="none";for(let d=T;d<$&&d<n.children.length;d++)n.children[d].style.display="block"}c(a),g.addEventListener("click",function(o){o.target.tagName==="BUTTON"&&(g.querySelectorAll("button").forEach($=>$.classList.remove("active-btn")),o.target.classList.add("active-btn"),a=parseInt(o.target.textContent),c(a))})}function r(){window.matchMedia("(min-width: 768px)").matches?L.style.overflowY="scroll":L.style.overflowY="visible",window.matchMedia("(min-width: 1440px)").matches?L.style.maxHeight="480px":L.style.maxHeight="none"}r(),e(),window.addEventListener("resize",function(){e(),s(),r()}),t()&&n.children.length>=6&&s()});P.addEventListener("click",ve);function ve(e){e.preventDefault(),u.push({id:"64f389465ae26083f39b17df",gifUrl:"https://ftp.goit.study/img/power-pulse/gifs/0067.gif",name:"barbell one arm snatch",rating:"3.67",target:"delts",popular:"5548",bodyPart:"shoulders",equipment:"barbell",burnedCalories:"345",description:"Located at the shoulders, deltoids have three heads: anterior, lateral, and posterior. They are involved in various arm movements like lifting and rotating. Exercises include shoulder press, lateral raises, and front raises."}),localStorage.setItem(k,JSON.stringify(u)),P.textContent="Delete from favorites",P.innerHTML="Delete from favorites"}
//# sourceMappingURL=commonHelpers.js.map
