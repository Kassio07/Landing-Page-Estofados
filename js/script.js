"use strict"

const c = (e)=>document.querySelector(e);
const cs = (e)=>document.querySelectorAll(e);

let menuOpner = c('.fa-solid.fa-bars');
let menuClose = c('.fa-solid.fa-xmark');
let menu = c('.headerTopo nav');

function openClose(){
    menu.classList.toggle('opner')
}

menuOpner.addEventListener('click', ()=>{
    menuOpner.style.display = 'none'
    menuClose.style.display = 'block'
    openClose();
})
menuClose.addEventListener('click', ()=>{
    menuClose.style.display = 'none'
    menuOpner.style.display = 'block'
    openClose();
})


cs('nav ul li a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        const targetId = link.getAttribute('href').substring(1);
        const targetElement = c(`#${targetId}`);

        window.scrollTo({
            top: targetElement.offsetTop - 130, // Ajuste conforme necessário para compensar a altura do menu fixo
            behavior: 'smooth'
        });
    });
});


// Slide header

// let btnLeft = c('.fa-arrow-left');
// let btnRight = c('.fa-arrow-right');
// let slideItem = c('.slide-item');

// btnLeft.addEventListener('click', (e)=>{
//     slideItem.style.marginLeft = '-600px'
// })


let courrentSlide=0;

function showSlide(index){
    const slides = cs('.slide-item');
    const totalSlide = slides.length;

    if(index >= totalSlide){
        courrentSlide = 0;
    }else if(index < 0){
        courrentSlide = totalSlide - 1;
    }else{
        courrentSlide = index
    }


    const offset = -courrentSlide * 600;
    c('.slides--width').style.transform = `translateX(${offset}%)`;
}

function moveSlide(direction){
    showSlide(courrentSlide + direction)
    alert('ok')
}

showSlide(courrentSlide);
