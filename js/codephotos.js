/**** galerias de fotos *****/

//primera vista
const openGallery = document.querySelector('#openGallery');
const allPhotos = document.querySelector('#modal-photos .modal-body');

const gallery = document.querySelector('.gallery');
const lightbox = document.querySelector('.lightbox');
const image = lightbox.querySelector('img');
const close = lightbox.querySelector('.close');
const prev = lightbox.querySelector('.prev');
const next = lightbox.querySelector('.next');
const firstViewPhotos = document.querySelectorAll(".images-gallery img")

const alojamiento = gallery.dataset.name;
let listImages = ""

let xhr = new XMLHttpRequest();
let index = 0;

xhr.onload = function() {
    if (xhr.status === 200){
        listImages = JSON.parse(xhr.response).data
        firstViewPhotos.forEach((imgElement) => {
            imgElement.src = '../images/alojamientos/' + alojamiento + '/' + listImages[index].name;
            imgElement.alt = listImages[index].info;
            index ++;
        })
    }
}

xhr.open('GET', '../images/alojamientos/' + alojamiento + '/photos.json', true);
xhr.send(null)

//lightbox

let currentImageIndex;
const images = Array.from(gallery.querySelectorAll('img'));

images.forEach((img, index) => {
  img.addEventListener('click', () => {
    lightbox.style.display = 'block';
    image.src = '../images/alojamientos/' + alojamiento + '/' + listImages[index].name;
    image.alt = listImages[index].info;
    currentImageIndex = index;
  });
});

close.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

prev.addEventListener('click', () => {
  currentImageIndex = (currentImageIndex - 1 + listImages.length) % listImages.length;
  image.src = '../images/alojamientos/' + alojamiento + '/' + listImages[currentImageIndex].name;;
  image.alt = listImages[currentImageIndex].info;
});

next.addEventListener('click', () => {
  currentImageIndex = (currentImageIndex + 1 + listImages.length) % listImages.length;
  image.src = '../images/alojamientos/' + alojamiento + '/' + listImages[currentImageIndex].name;
  image.alt = listImages[currentImageIndex].info;
})


const myModalEl = document.getElementById('modal-photos')
myModalEl.addEventListener('show.bs.modal', event => {
    const html = document.querySelector('html')
    html.style = 
  listImages.forEach((img, index) => {
    const htmlImg = document.createElement('img');
    htmlImg.addEventListener('click', () => {
      lightbox.style.display = 'block';
      image.src = '../images/alojamientos/' + alojamiento + '/' + listImages[index].name;
      image.alt = listImages[index].info;
      currentImageIndex = index;
    });
    htmlImg.src = '../images/alojamientos/' + alojamiento + '/' + img.name;
    htmlImg.alt = img.info;
    htmlImg.className = 'col-12 col-md-6 p-3'
    allPhotos.appendChild(htmlImg)
  })

})