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


