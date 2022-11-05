import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

const galleryContainerEl = document.querySelector(".gallery");
const galleryMarkup = createGalleryItemsMarkup(galleryItems);

galleryContainerEl.insertAdjacentHTML("beforeend", galleryMarkup);

galleryContainerEl.addEventListener("click", onGalleryContainerClick);

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

function onGalleryContainerClick(event) {
  event.preventDefault();
  console.log(event.target.dataset.source);
}
