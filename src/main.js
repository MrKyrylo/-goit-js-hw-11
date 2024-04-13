import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { renderMarkup } from './js/render-functions';
import { fetchImages } from './js/pixabay-api';

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


