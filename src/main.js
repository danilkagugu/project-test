import axios from 'axios';

const filterButtons = document.querySelector('.filter-buttons');
const exerciseFiltersList = document.querySelector('.exercise-filters-list');
const BASE_URL = 'https://energyflow.b.goit.study/api';
const filterValueDefault = 'Muscles';
filterButtons.addEventListener('click', filterBtnClick);

async function filterBtnClick(event) {
  event.preventDefault();
  const filterValue = event.target;
  const qwer = filterValue.dataset.filter;
  exerciseFiltersList.innerHTML = '';
  console.log(qwer);
  if (event.target.tagName !== 'BUTTON') {
    return;
  }
  try {
    getExercises(qwer).then(data => {
      console.log(data);
      markupExercises(data);
    });
  } catch (error) {
    console.log(error);
  }
}

async function getExercises(filter = filterValueDefault) {
  try {
    const response = await axios.get(`${BASE_URL}/filters`, {
      params: {
        filter: filter,
        page: 1,
        limit: 8,
      },
    });
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
}

function markupExercises(results) {
  const markup = results
    .map(
      ({ name, filter, imgUrl }) => ` <li data-filter>
        <img class="img-exercises" src="${imgUrl}" alt="${filter}">
        <div>
          <p>${name}</p>
          <p>${filter}</p>
        </div>
      </li>`
    )
    .join('');
  exerciseFiltersList.insertAdjacentHTML('beforeend', markup);
}
