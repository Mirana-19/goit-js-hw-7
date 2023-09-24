import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery');
galleryEl.addEventListener('click', showBackdrop);

function renderGalleryMarkup(items) {
  return (galleryEl.innerHTML = items
    .map(
      ({ original, preview, description }) => `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
    )
    .join(''));
}

renderGalleryMarkup(galleryItems);

function showBackdrop(e) {
  e.preventDefault();
  if (e.target.nodeName !== 'IMG') {
    return;
  }

  const backdrop = basicLightbox.create(
    `<img src="${e.target.dataset.source}" alt="${e.target.alt}">`
  );

  backdrop.show();

  const closeBackdropByKey = e => {
    if (e.code === 'Escape') {
      backdrop.close();
      window.removeEventListener('keydown', closeBackdropByKey);
    }
  };

  window.addEventListener('keydown', closeBackdropByKey);
}
