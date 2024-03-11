import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

// import { renderMarkup } from './js/render-functions';
// import { fetchImages } from './js/pixabay-api';

const lightbox = new SimpleLightbox('.gallery a', {
  nav: true,
  captions: true,
  captionsData: 'alt',
  captionDelay: 150,
});

const form = document.querySelector('.js-search-form');
const container = document.querySelector('.gallery');
let searchWord = '';

console.log(form);

form.addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault();

  container.innerHTML = '';
  searchWord = form.elements.query.value.trim();

  fetchImages(searchWord)
    .then(data => {
      const markup = renderMarkup(data);
      container.insertAdjacentHTML('beforeend', markup);

      lightbox.refresh();
    })
    .catch(error => {
      console.error('Error:', error);
    });
  form.reset();
}

const KEY = '41952140-5e618661129c37e138516e154';
const URL = 'https://pixabay.com/api/';
const loader = document.querySelector('.loader');

function fetchImages(searchWord) {
  const searchParamObj = {
    key: KEY,
    q: searchWord,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  };
  const searchParams = new URLSearchParams(searchParamObj);

  loader.style.display = 'block';

  return fetch(`${URL}?${searchParams}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      loader.style.display = 'none';

      if (data.hits.length === 0) {
        iziToast.error({
          timeout: 3000,
          position: 'topRight',
          message:
            'There are no images matching your search query. Please, enter something else!',
        });
      }
      return data;
    })
    .catch(error => {
      console.error('Error fetching data!', error);
    });
}

function renderMarkup(data) {
  return data.hits
    .map(
      el =>
        `<div class="gallery-item">
            <a class="gallery-link" href="${el.largeImageURL}">
                <img class="gallery-image" src="${el.webformatURL}" alt="${el.tags}" />
            </a>
            <div class="gallery-item-info">
                <p class="gallery-item-info-par">
                    <span class="gallery-item-info-span">Likes: <span>${el.likes}</span>
                    </span>    
                </p>
                <p class="gallery-item-info-par">
                    <span class="gallery-item-info-span">Views: <span>${el.views}</span>
                    </span>    
                </p>
                <p class="gallery-item-info-par">
                    <span class="gallery-item-info-span">Comments: <span>${el.comments}</span>
                    </span>    
                </p>
                <p class="gallery-item-info-par">
                    <span class="gallery-item-info-span">Downloads: <span>${el.downloads}</span>
                    </span>    
                </p>
            </div>
        </div>`
    )
    .join('');
}