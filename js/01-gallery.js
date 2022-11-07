import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainerEl = document.querySelector(".gallery");

const galleryMarkup = createGalleryItemsMarkup(galleryItems);

let modalInstance = null;

galleryContainerEl.insertAdjacentHTML("beforeend", galleryMarkup);

galleryContainerEl.addEventListener("click", onGalleryImageClick);

// window.addEventListener("keydown", onEscapeKeyPress);

function createGalleryItemsMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join("");
}

function onGalleryImageClick(event) {
  event.preventDefault();
  window.addEventListener("keydown", onEscapeKeyPress);
  if (event.currentTarget === event.target) {
    return;
  }

  modalInstance = basicLightbox.create(
    `<img
      class="gallery__image"
      src="${event.target.dataset.source}"
          />`
  );

  modalInstance.show();
}

function onEscapeKeyPress(event) {
  if (event.code === "Escape") {
    window.removeEventListener("keydown", onEscapeKeyPress);
    modalInstance.close();
  }
}
