import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery');
// galleryEl.addEventListener('click', showBackdrop);

function createGalleryMarkup(items) {
  return items
    .map(
      item =>
        `<li class="gallery__item">
    <a class="gallery__link" href="${item.original}">
      <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
    </a>
   </li>`
    )
    .join('');
}
