console.log('Made By Ayush Jadhav');

// NAVBAR
const hamburger = document.querySelector(".hamburger");
const links = document.querySelector(".links");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    links.classList.toggle("active");
}

// POPUP
let op = document.getElementById('op')
const open = document.getElementById("open");
const modal_container = document.getElementById("modal_container");
const close = document.getElementById("close");

op.addEventListener('click', () => {
    // alert('clicked')
    modal_container.classList.add("show");
})

close.addEventListener('click', () => {
    // alert('clicked')
    modal_container.classList.remove("show");
})

// IMAGE SLIDDER
var Slides =   document.querySelector('.slider-items').children;
var nextSlide = document.querySelector('.right-slide');
var prevSlide = document.querySelector('.left-slide');
var totalSlides = Slides.length;
var index = 0;

nextSlide.onclick = function() {
     next('next');
}
prevSlide.onclick = function(){
     next('prev');
}

function next(direction){
     if(direction=="next"){
          index++;
            if(index==totalSlides){
                 index=0;
            }
     }
     else{
          if(index==0){
               index=totalSlides-1;
          }else{
               index--;
          }
     }

     for(i=0; i < Slides.length; i++){
          Slides[i].classList.remove('active');
     }
     Slides[index].classList.add('active');
}

