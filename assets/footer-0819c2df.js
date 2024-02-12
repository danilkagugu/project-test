import{a as d,i as w}from"./vendor-db25513e.js";import{i as B}from"./modal_window-e4dd2234.js";let U=document.querySelector(".QuoteText"),J=document.querySelector(".QuoteAuthor");window.addEventListener("DOMContentLoaded",async function(){try{let e=localStorage.getItem("quoteData"),t=localStorage.getItem("quoteDate"),r=new Date,s=t?new Date(t):null;if(e&&s&&R(r,s)){M(JSON.parse(e));return}let n=(await d.get("https://energyflow.b.goit.study/api/quote")).data;localStorage.setItem("quoteData",JSON.stringify(n)),localStorage.setItem("quoteDate",r.toISOString()),M(n)}catch(e){console.error("Error:",e)}});function M(e){U.innerText=e.quote,J.innerText=e.author}function R(e,t){return e.getFullYear()===t.getFullYear()&&e.getMonth()===t.getMonth()&&e.getDate()===t.getDate()}const V=document.querySelector(".FilterButtons"),f=document.querySelector(".ExerciseFiltersList"),F=document.querySelector(".Pagination"),z="https://energyflow.b.goit.study/api";let C="Muscles",v=1,k=window.innerWidth,E=0;V.addEventListener("click",_);F.addEventListener("click",I);k<=375?E=8:(k<=768,E=12);async function T(){try{return(await d.get(`${z}/filters`,{params:{filter:C,page:v,limit:E}})).data}catch(e){console.log(e)}}async function j(){try{const e=await T().then(t=>{const{results:r,totalPages:s,page:a}=t;if(r&&r.length>0){f.innerHTML=y(r);const n=L(a,s);F.innerHTML=n}else console.error("No exercises found.")})}catch(e){console.error("Error fetching exercises:",e)}}j();async function _(e){e.preventDefault(),v=1;const r=e.target.dataset.filter;if(C=r,f.innerHTML="",Array.from(e.currentTarget.children).map(s=>{s.textContent!==e.target.textContent?s.classList.remove("ButtonIsActive"):e.target.classList.add("ButtonIsActive")}),e.target.tagName==="BUTTON")try{T(r).then(s=>{const{results:a,totalPages:n,page:l}=s;f.innerHTML=y(a);{const u=L(l,n);F.innerHTML=u}})}catch(s){console.log(s)}}async function I(e){v=e.target.textContent,Array.from(e.currentTarget.children).map(t=>{t.textContent!==v?t.classList.remove("PaginationBtnIsActive"):e.target.classList.add("PaginationBtnIsActive")}),f.innerHTML="";try{const{results:t,page:r,totalPages:s}=await T();if(r===s)return;f.innerHTML=y(t)}catch(t){console.log(t)}}function y(e){return e.map(({name:r,filter:s,imgUrl:a})=>` <li class='FilterList ExercisesItem' data-filter='${s}' data-name='${r}'>
        <img class="ImgExercises" src="${a}" alt="${s}">
        <div class="FilterText">
          <p class="FilterExercises">${r}</p>
          <p class="FilterName">${s}</p>
        </div>
      </li>`).join("")}function L(e,t){let r="";for(let s=1;s<=t;s+=1)r+=`<button class="PaginationBtn PaginationBtnIsActive" type="button">${s}</button>`;return r}const i=document.querySelector(".ExerciseFiltersList"),Q=document.querySelector(".ExercisesHead"),o=document.querySelector(".Pagination"),h="https://energyflow.b.goit.study/api";let p=1,c,x;i.addEventListener("click",q);async function q(e){if(i.removeEventListener("click",q),o.removeEventListener("click",I),o.removeEventListener("click",N),e.target===e.currentTarget)return;i.classList.add("ExerciseCategoryList"),i.classList.remove("ExerciseFiltersList");const t=e.target.closest(".ExercisesItem");c=t.dataset.filter,x=t.dataset.name;try{Q.innerHTML=Y(x);const r=document.querySelector("#MusclesBtn");c==="Muscles"?r.classList.add("FilterBtnIsActive"):c==="Body parts"?document.querySelector("#BodyPartBtn").classList.add("FilterBtnIsActive"):c==="Equipment"&&document.querySelector("#EquipmentBtn").classList.add("FilterBtnIsActive");const{page:s,totalPages:a,results:n}=await A(c,x);i.innerHTML=D(n);const l=document.querySelector("#FilterBtn");if(l.addEventListener("click",K),l.addEventListener("click",$),o.innerHTML="",a>1){const u=L(s,a);o.innerHTML=u}o.addEventListener("click",P)}catch{m("Error")}}function $(){document.querySelector(".ExercisesForm").remove(),FilterBtn.removeEventListener("click",$)}async function A(e,t,r){try{return e==="Muscles"?(await d.get(`${h}/exercises`,{params:{muscles:t,page:r,limit:9}})).data:e==="Body parts"?(await d.get(`${h}/exercises`,{params:{bodypart:t,page:r,limit:9}})).data:(await d.get(`${h}/exercises`,{params:{equipment:t,page:r,limit:9}})).data}catch{m("Error")}}function D(e){return e.map(({rating:r,name:s,burnedCalories:a,time:n,bodyPart:l,target:u,_id:W})=>`<li class="WorkoutCard">
      <div class='CardHeader'>
        <div class='WorkoutWrapper'>
          <p class='Workout'>workout</p>
          <div class='RatingWrapper'><p>${r}</p>
          <svg class='StarIcon' width='13' height='13'>
            <use href="${B}#icon-star"></use>     
        </svg></div>
        </div>
        <div class='StartBtn' data-id='${W}'>
          <p>Start</p>
          <svg width='13' height='13'>
           <use href="${B}#icon-arrow"></use>          
        </svg>
        </div>
      </div>
      <div class='CardMainPart'>
      <div class='RunIconWrapper'><svg width='14' height='14'>
          <use href="${B}#icon-running"></use>
        </svg></div>
        <p class='MainPartName'>${s}</p>
      </div>
      <ul class="CardFooter">
        <li>
          <p class='CardFooterTextDescr'>Burned calories: <span class='CardFooterTextValue'>${a} / ${n} min</span></p>
        </li>
        <li>
          <p class='CardFooterTextDescr'>Body part: <span class='CardFooterTextValue'>${l}</span></p>
        </li>
        <li>
          <p class='CardFooterTextDescr'>Target: <span class='CardFooterTextValue'>${u}</span></p>
        </li>
      </ul>

    </li>`).join("")}function Y(e){return`<div>
  <h2 class="TitleExercises">Exercises / <span class="NameValue"> ${e}</span></h2>
  <div class="ExercisesHeared">
  <div id='FilterBtn'>
    <button class="ItemExercises" data-filter="Muscles" id='MusclesBtn'>Muscles</button>
    <button class="ItemExercises" data-filter="Body parts" id='BodyPartBtn'>Body parts</button>
    <button class="ItemExercises" data-filter="Equipment" id='EquipmentBtn'>Equipment</button>
  </div>
    <form action="" class="ExercisesForm">
      <label for="#search" class="visually-hidden">Search</label>
      <input class='SearchInput' name="search" placeholder="Search" type="search" id="search" />
      <button class='SearchButton' type="submit">
        <svg class='IconSearch' width='18' height='18'>
          <use href='/img/symbol-defs.svg#icon-search'></use>
        </svg>
      </button>
    </form></div>
</div>
`}async function K(e){if(document.querySelectorAll(".ItemExercises").forEach(r=>{r.classList.remove("FilterBtnIsActive")}),i.addEventListener("click",q),i.classList.remove("ExerciseCategoryList"),i.classList.add("ExerciseFiltersList"),p=1,o.removeEventListener("click",P),Array.from(e.currentTarget.children).map(r=>{r.textContent!==e.target.textContent?r.classList.remove("ButtonIsActive"):e.target.classList.add("ButtonIsActive")}),e.target!==e.currentTarget){c=e.target.dataset.filter;try{const{page:r,totalPages:s,results:a}=await H(c);if(i.innerHTML=y(a),s>1){const l=L(r,s);o.innerHTML=l}else o.innerHTML="";o.addEventListener("click",N);const n=document.querySelector(".TitleExercises");n.innerHTML="Exercises"}catch{m("Error")}}}async function H(e=filterValueDefault){try{return(await d.get(`${h}/filters`,{params:{filter:e,page:p,limit:12}})).data}catch{m("Error")}}async function P(e){if(e.target.tagName==="BUTTON"){p=e.target.textContent;try{const{results:t}=await A(c,x,p);i.innerHTML=D(t)}catch{m("Error")}}}async function N(e){p=e.target.textContent;try{const{results:t}=await H(c,p);i.innerHTML=y(t)}catch{m("Error")}}function m(e){w.error({message:e,messageColor:"#FAFAFB",messageLineHeight:"24px",messageSize:"16px",position:"topRight",backgroundColor:"#EF4040",maxWidth:"350px",timeout:!1})}const O=document.querySelector(".ExercisesForm");O.addEventListener("submit",G);function G(){console.log("hello")}console.log(O);const g={form:document.querySelector(".FooterForm"),input:document.querySelector(".FormInput"),submit:document.querySelector(".ModalButton")},X="https://energyflow.b.goit.study/api/subscription",Z="feedback-form-state",S=JSON.parse(localStorage.getItem(Z));S!=null?g.input.value=S.email:g.input.value="";g.submit.addEventListener("click",ee);async function ee(e){const t=g.input.value.trim();e.preventDefault();try{const r=await d.post(X,{email:t});b(JSON.stringify(JSON.parse(r.request.responseText).message)),g.input.value=""}catch(r){b(JSON.stringify(JSON.parse(r.request.responseText).message)),g.input.value=""}}function b(e){w.show({position:"topRight",message:e,maxWidth:"352",messageColor:"#fff",messageSize:"15px",backgroundColor:"rgba(27, 27, 27, 0.7)",close:!1,closeOnClick:!0})}
//# sourceMappingURL=footer-0819c2df.js.map
