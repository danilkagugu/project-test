import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import axios from 'axios';
import icons from '/img/symbol-defs.svg';

const modalBackdrop = document.querySelector('.Backdrop');
// const card = document.querySelector('.Modal');
const button = document.querySelector('.ExerciseFiltersList');
const BASE_URL = 'https://energyflow.b.goit.study/api';

// const modalClose = document.querySelector('.ModalClose');
// const addRemoveFavorites = document.querySelector('.AddRemoveFavorites');
const openClass = 'IsOpen';
let cardObj = {};

button.addEventListener('click', clickStart);

async function clickStart(event) {
  if (event.target.nodeName !== 'BUTTON') {
    return;
  }
  const res = event.target.closest('li').id;
  console.log(res);
  try {
    const obj = await axios.get(`${BASE_URL}/exercises/${res}`);
    console.log(obj);
    displayImages(obj.data);
    modalBackdrop.classList.add('IsOpen');
  } catch (error) {
    console.log(error);
  }
}

function displayImages(cardObj) {
  const markup = ` <div class="Modal">
  <button class="ModalClose" type="button">
          <svg class="CloseModalIcon" width="8" height="8">
            <use href="${icons}#icon-close"></use>
          </svg>
        </button>
  <div class="ModalImage">     
  <img class="ImageGif" src="${cardObj.gifUrl}" alt="imagegif"/>
  </div>
  <h3 class="ModalTitle">${cardObj.name}</h3>
  <div class="ModalRating">
  <p class="NumberRating">${cardObj.rating}</p>
  <div class="StarRating"></div>
  </div>
  <ul class="ModalList">
  <li class="ModalListItem">Target ${cardObj.target}</li>
  <li class="ModalListItem">Body Part ${cardObj.bodyPart}</li>
  <li class="ModalListItem">Equipment${cardObj.equipment}</li>
  <li class="ModalListItem">Popular${cardObj.popularity}</li>
  <li class="ModalListItem">Burned Calories${cardObj.burnedCalories}/${cardObj.time} min</li>
  </ul>
  <p class="Description">${cardObj.description}</p>
  <button class="AddRemoveFavorites" type="button">Add to favorites</button>
  </div>
  </div> `;
  modalBackdrop.innerHTML = markup;
}
