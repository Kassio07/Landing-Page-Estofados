"use strict";

const c = (e) => document.querySelector(e);
const cs = (e) => document.querySelectorAll(e);

let menuOpner = c(".fa-solid.fa-bars");
let menuClose = c(".fa-solid.fa-xmark");
let menu = c(".headerTopo nav");

function openClose() {
  menu.classList.toggle("opner");
}

menuOpner.addEventListener("click", () => {
  menuOpner.style.display = "none";
  menuClose.style.display = "block";
  openClose();
});
menuClose.addEventListener("click", () => {
  menuClose.style.display = "none";
  menuOpner.style.display = "block";
  openClose();
});

// window Scroll

cs("nav ul li a").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const targetId = link.getAttribute("href").substring(1);
    const targetElement = c(`#${targetId}`);

    window.scrollTo({
      top: targetElement.offsetTop - 130, // Ajuste conforme necessário para compensar a altura do menu fixo
      behavior: "smooth",
    });
  });
});

// header slide

const slideWidth = 600; // Largura de cada slide
const slideContainer = document.querySelector(".slide--width");
const slides = document.querySelectorAll(".slide-item");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
let currentIndex = 0;

prevButton.addEventListener("click", () => {
  currentIndex = currentIndex > 0 ? currentIndex - 1 : slides.length - 1;
  updateSlidePosition();
});

nextButton.addEventListener("click", () => {
    currentIndex = currentIndex < slides.length - 1 ? currentIndex + 1 : 0;
    updateSlidePosition();
});

function updateSlidePosition() {
  const offset = -currentIndex * slideWidth;
  slideContainer.style.transform = `translateX(${offset}px)`;
}

setInterval(()=>{
    currentIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
    updateSlidePosition();
},3000)


