import axios from 'axios';
import icons from '/img/symbol-defs.svg';
import { toggleFavorite, deleteCard } from './favorites_js/favorites_section';

const modalBackdrop = document.querySelector('.backdrop');
const card = document.querySelector('.modal');
const button = document.querySelector('.exercise-filters-list-subcategories');
const buttonSearch = document.querySelector('.search-list');
const body = document.querySelector('body');
const buttonFavorite = document.querySelector('.favorites-list');

const openClass = 'is-open';
let cardObj = {};
let ratingActive, ratingValue;
let addRemoveFavorites;
let scrollPosition;
let textBtn;
// const test = 'Add to favorites';

if (body.classList.contains('home-style')) {
  button.addEventListener('click', modalCard);
  buttonSearch.addEventListener('click', modalCard);
}
if (body.classList.contains('favorites-style')) {
  buttonFavorite.addEventListener('click', favoriteDeleteCard);
}

async function modalCard(event) {
  const res = event.target.closest('li').id;
  try {
    if (event.target.nodeName !== 'BUTTON') {
      return;
    } else {
      cardObj = await fetchImages(res);
      showModal();
      displayImages(cardObj);
      initRating();
      disableScroll();
    }

    document.querySelectorAll('span').forEach(function (span) {
      span.textContent =
        span.textContent.charAt(0).toUpperCase() + span.textContent.slice(1);
    });
    addRemoveFavorites = document.querySelector('.add-remove-favorites');
    textBtn = addRemoveFavorites.textContent;

    addRemoveFavorites.addEventListener('click', addFavorites);
    const modalClose = document.querySelector('.close-modal-icon');

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') {
        hideModal();
        enableScroll();
      }
    });
    modalBackdrop.addEventListener('click', function (event) {
      if (event.target === modalBackdrop) {
        hideModal();
        enableScroll();
      }
    });
    modalClose.addEventListener('click', function (event) {
      if (event.target === modalClose) {
        hideModal();
        enableScroll();
      }
    });
  } finally {
    // catch (error) {
    // }
  }
}

function addRemoveFavoritesFunc() {
  console.log(textBtn);
  if (textBtn == 'Add to favorites') {
    toggleFavorite(cardObj);
    addRemoveFavorites = ' Remove from ';
  } else if (textBtn == 'Remove from') {
    deleteCard(cardObj._id);
    addRemoveFavorites = ' Add to favorites ';
  } else {
    console.log('fack');
  }
}

function addFavorites() {
  toggleFavorite(cardObj);
  addRemoveFavorites.innerText = ' Remove from ';
}

function removeFavorites() {
  deleteCard(cardObj._id);
  console.log(cardObj._id);
  addRemoveFavorites.innerText = ' Add to favorites ';
}

async function fetchImages(id) {
  const url = `https://energyflow.b.goit.study/api/exercises/${id}`;

  try {
    const response = await axios.get(url);

    return response.data;
  } catch (error) {}
}

function displayImages(cardObj) {
  const markup = `<div class="modal">
   <button class="modal-close" type="button">
          <svg class="close-modal-icon" width="25" height="25">
            <use href="${icons}#icon-close"></use>
          </svg>
        </button>
  <div class="modal-image">     
  <img class="image-gif" src="${cardObj.gifUrl}" alt="imagegif"/>
  </div><div>
  <h3 class="modal-title">${cardObj.name}</h3>
  <div class="modal-rating">
  <div class="number-rating">${cardObj.rating}</div>
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
            <use href="${icons}#icon-vector"></use>
          </svg>
  <ul class="modal-list">
  <li class="modal-list-item"><span class="item-title">Target</span> <span class="item-data">${cardObj.target}</span></li>
  <li class="modal-list-item"><span class="item-title">Body Part</span> <span class="item-data">${cardObj.bodyPart}</span></li>
  <li class="modal-list-item"><span class="item-title">Equipment</span><span class="item-data">${cardObj.equipment}</span></li>
  <li class="modal-list-item"><span class="item-title">Popular</span><span class="item-data">${cardObj.popularity}</span></li>
  <li class="modal-list-item"><span class="item-title">Burned Calories</span><span class="item-data">${cardObj.burnedCalories}/${cardObj.time} min</span></li>
  </ul>
  <svg class="vector" width="25" height="2">
            <use href="${icons}#icon-vector"></use>
          </svg>
  <p class="description">${cardObj.description}</p>
  <button class="add-remove-favorites" type="button">Add to favorites
  <svg class="heart-modal-icon" width="18" height="18">
            <use href="${icons}#icon-heart"></use>
          </svg>   
          </button>
          </div>
  </div>
  </div> `;
  modalBackdrop.innerHTML = markup;
}

async function favoriteDeleteCard(event) {
  const res = event.target.closest('li').id;

  try {
    if (event.target.nodeName !== 'BUTTON') {
      return;
    } else {
      cardObj = await fetchImages(res);
      showModal();
      displayImages(cardObj);
      initRating();
      disableScroll();
    }

    document.querySelectorAll('span').forEach(function (span) {
      span.textContent =
        span.textContent.charAt(0).toUpperCase() + span.textContent.slice(1);
    });

    addRemoveFavorites = document.querySelector('.add-remove-favorites');
    addRemoveFavorites.addEventListener('click', removeFavorites);

    const modalClose = document.querySelector('.close-modal-icon');
    addRemoveFavorites.innerText = ' Remove from ';
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') {
        hideModal();
        enableScroll();
      }
    });
    modalBackdrop.addEventListener('click', function (event) {
      if (event.target === modalBackdrop) {
        hideModal();
        enableScroll();
      }
    });
    modalClose.addEventListener('click', function (event) {
      if (event.target === modalClose) {
        hideModal();
        enableScroll();
      }
    });
  } finally {
    // catch (error) {
    // }
  }
}

function showModal() {
  modalBackdrop.classList.add(openClass);
}

function hideModal() {
  modalBackdrop.classList.remove(openClass);
}

function initRating() {
  initRatingVars();
  setRatingActiveWidth();
}

function initRatingVars() {
  ratingActive = document.querySelector('.rating-active');
  ratingValue = document.querySelector('.number-rating');
}

function setRatingActiveWidth(index = ratingValue.innerHTML) {
  const ratingActiveWidth = index / 0.05;
  ratingActive.style.width = `${ratingActiveWidth}%`;
}

function disableScroll() {
  scrollPosition = window.scrollY;
  document.body.style.position = 'absolute';
  document.body.style.width = '100%';
  document.body.style.overflow = 'hidden';
  document.body.style.top = `-${scrollPosition}px`;
}

function enableScroll() {
  document.body.style.overflow = '';
  document.body.style.position = '';
  document.body.style.width = '';
  document.body.style.top = '';
  window.scrollTo(0, scrollPosition);
}
