import { galleryItems } from "./gallery-items.js";

const galleryContainerEl = document.querySelector(".gallery");
const galleryMarkup = createGalleryItemsMarkup(galleryItems);

galleryContainerEl.insertAdjacentHTML("afterbegin", galleryMarkup);

function createGalleryItemsMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
  <a class="gallery__item" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join("");
}

const lightbox = new SimpleLightbox(".gallery .gallery__item", {
  captionsData: "alt",
  scrollZoom: false,
  captionDelay: 250,
});
