import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);
{
  /* <a class="gallery__item" href="large-image.jpg">
  <img class="gallery__image" src="small-image.jpg" alt="Image description" />
</a>; */
}

const galleryContainer = document.querySelector('.gallery');
const imagesMarkup = createGalleryItem(galleryItems);
galleryContainer.innerHTML = imagesMarkup;
galleryContainer.addEventListener('click', onImageClick);
function createGalleryItem(items) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return ` <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a> `;
    })
    .join('');
}
function onImageClick(event) {
  event.preventDefault();
  const smallImage = event.target;

  const issmallImgeEl = smallImage.nodeName === 'IMG';
  //   const issmallImgeEl1 = smallImage.classList.contains('gallery__image');
  if (!issmallImgeEl) {
    return;
  }
  const gallery = new SimpleLightbox('.gallery a', {
    overlayOpacity: 0.3,
    showCounter: false,
    captions: true,
    captionSelector: 'img',
    captionType: 'attr',
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
  });

  //   gallery.on('show.simplelightbox', function () {
  //     console.log(event.target.alt);
  //   });

  //   gallery.on('error.simplelightbox', function (e) {
  //     console.log(e); // Some usefull information
  //   });
}
