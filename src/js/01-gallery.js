// Add imports above this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';

// Change code below this line
console.log(galleryItems);

//---Посилання
const refs= {
    galleryBox: document.querySelector('.gallery')
}

//---Виклик функції для створення розмітки

createGalleryItemsMarkup (galleryItems)

//---Функції

function createGalleryItemsMarkup (items) { 
    const galleryItems = items.map(item => galleryItemsTemplate(item)).join('')

    refs.galleryBox.innerHTML = '';
    refs.galleryBox.insertAdjacentHTML('beforeend', galleryItems);
}


function galleryItemsTemplate ({preview, original, description}) {
    return `<li><a class="gallery__item" href="${original}">
     <img  class="gallery__image" src="${preview}" alt="${description} " title="${description}"/>
    </a></li>`

}

var lightbox = new SimpleLightbox('.gallery a', {captionDelay: 250});




