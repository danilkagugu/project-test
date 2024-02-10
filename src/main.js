import axios from 'axios';
const itemExercises = document.querySelectorAll('.item-exercises');
const filterButtons = document.querySelector('.filter-buttons');
const exerciseFiltersList = document.querySelector('.exercise-filters-list');
const pagination = document.querySelector('.pagination');
const BASE_URL = 'https://energyflow.b.goit.study/api';
let filterValueDefault = 'Muscles';
let currentPage = 1;
let screenWidth = window.innerWidth;
let currentLimit = 0;
const paginationPageBtn = document.querySelector('.pagination-btn');

filterButtons.addEventListener('click', filterBtnClick);
if (screenWidth <= 375) {
  currentLimit = 8;
} else if (screenWidth <= 768) {
  currentLimit = 12;
} else {
  currentLimit = 12;
}

async function getExercises() {
  try {
    const response = await axios.get(`${BASE_URL}/filters`, {
      params: {
        filter: filterValueDefault,
        page: currentPage,
        limit: currentLimit,
      },
    });

    return response.data;
  } catch (error) {
    console.log(error);
  }
}

async function filterBtnClick(event) {
  event.preventDefault();

  currentPage = 1;
  const filterValue = event.target;
  const qwer = filterValue.dataset.filter;
  filterValueDefault = qwer;
  exerciseFiltersList.innerHTML = '';
  Array.from(event.currentTarget.children).map(item => {
    if (item.textContent !== event.target.textContent) {
      item.classList.remove('button-is-active');
    } else {
      event.target.classList.add('button-is-active');
    }
  });
  if (event.target.tagName !== 'BUTTON') {
    return;
  }
  try {
    getExercises(qwer).then(data => {
      const { results, totalPages, page } = data;
      markupExercises(results);
      if (1) {
        const pag = paginationPages(page, totalPages);
        pagination.innerHTML = pag;
      } else {
        pagination.innerHTML = '';
      }
    });
  } catch (error) {
    console.log(error);
  }
}

function markupExercises(results) {
  const markup = results
    .map(
      ({ name, filter, imgUrl }) => ` <li class="filter-list" data-filter>
        <img class="img-exercises" src="${imgUrl}" alt="${filter}">
        <div class="filter-text">
          <p class="filter-exercises">${name}</p>
          <p class="filter-name">${filter}</p>
        </div>
      </li>`
    )
    .join('');
  exerciseFiltersList.insertAdjacentHTML('beforeend', markup);
}

function paginationPages(page, totalPages) {
  let paginationHtml = '';

  for (let i = 1; i <= totalPages; i += 1) {
    paginationHtml += `<button class="pagination-btn pagination-btn-is-active" type="button">${i}</button>`;
  }
  return paginationHtml;
}

async function onPaginationPages(e) {
  currentPage = e.target.textContent;
  Array.from(e.currentTarget.children).map(item => {
    if (item.textContent !== currentPage) {
      item.classList.remove('pagination-btn-is-active');
    } else {
      e.target.classList.add('pagination-btn-is-active');
    }
  });
  exerciseFiltersList.innerHTML = '';
  try {
    const { results, page, totalPages } = await getExercises();
    if (page === totalPages) {
      return;
    }

    markupExercises(results);
  } catch (error) {
    console.log(error);
  }
}

pagination.addEventListener('click', onPaginationPages);
// sasdswe2erfev

fetchDefaultApiUrl();
async function fetchDefaultApiUrl() {
  try {
    const response = await getExercises().then(data => {
      const { results, totalPages, page } = data;
      if (results && results.length > 0) {
        markupExercises(results);
        const pag = paginationPages(page, totalPages);
        pagination.innerHTML = pag;
      } else {
        console.error('No exercises found.');
      }
    });
  } catch (error) {
    console.error('Error fetching exercises:', error);
  }
}
