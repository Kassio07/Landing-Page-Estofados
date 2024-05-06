'user strict'

let c = (e)=>document.querySelector(e);
let cs = (e)=>document.querySelectorAll(e);

let btnOpner = c('.btnMobil');
let menu = c('ul')

btnOpner.addEventListener('click', (e)=>{
    menu.classList.toggle('oper')
})