import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');

const parsedGalleryItems = galleryItems
  .map(el => {
    return `<div class="gallery__item">
  <a target="_blanc" class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="${el.preview}"
      data-source="${el.original}"
      alt="${el.description}"
    />
  </a>
</div>`;
  })
  .join('');

gallery.innerHTML = parsedGalleryItems;

gallery.addEventListener('click', event => {
  event.preventDefault();
  if (!event.target.classList.contains('gallery__image')) {
    console.log('miss click');
    return;
  }

  const imgInsertLayout = `<img class="gallery__image" src="${event.target.dataset.source}" data-source="${event.target.dataset.source}" alt="${event.target.alt}">`;

  const modalWindow = basicLightbox.create(imgInsertLayout, {
    closable: false,
  });

  modalWindow.show();

  window.addEventListener('keydown', ev => {
    if (ev.key === 'Escape') {
      modalWindow.close();
    }
  });
});
