// Obtener los elementos del DOM
const slider = document.getElementById('slider');
const slides = document.getElementById('slides');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

// Variables del slider
let currentSlide = 1;
const slideWidth = slider.clientWidth;

// Funciones del slider
const goToSlide = (slideNumber) => {
  slides.style.transform = `translateX(-${slideWidth * (slideNumber - 1)}px)`;
  currentSlide = slideNumber;
};

const nextSlide = () => {
  if (currentSlide === 6) {
    goToSlide(1);
  } else {
    goToSlide(currentSlide + 1);
  }
};

const prevSlide = () => {
  if (currentSlide === 1) {
    goToSlide(6);
  } else {
    goToSlide(currentSlide - 1);
  }
};

// Eventos del slider
nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);

//funcion para el menu responsivo
function myFunction(){
  var x =document.getElementById("myTopnav");
  if (x.className ==="topnav") {
    x.className+="responsive";
  }else{
    x.className="topnav";
  }
}
const card = document.querySelector('.card');
const cardContent = document.querySelector('.card-content');

card.addEventListener('mouseenter', () => {
  cardContent.classList.add('card-fade-in');
});

card.addEventListener('mouseleave', () => {
  cardContent.classList.remove('card-fade-in');
});
