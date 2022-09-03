import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');

const parsedGalleryItems = galleryItems
  .map(el => {
    return `<a target="_blanc" class="gallery__item" href="${el.original}">
    <img
      class="gallery__image"
      src="${el.preview}"
      alt="${el.description}"
    />
  </a>`;
  })
  .join('');

gallery.innerHTML = parsedGalleryItems;

new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt',
});
