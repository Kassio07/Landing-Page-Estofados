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
    menuOpner.classList.toggle('hidden')
    openClose()
})

menuClose.addEventListener('click', ()=>{
    openClose()
})





