const menu = document.querySelector('#menucontainer');
const hamburger= document.querySelector('#hamburger'); 
const closeMenu =document.querySelector('.close-arrow');
const accordion = document.getElementsByClassName('accordion');
let body =document.querySelector('body');


hamburger.addEventListener('click', () => {
    menu.classList.add('active');
    
    
 
});
closeMenu.addEventListener('click', () => {
    menu.classList.remove('active');
    
    
 
});
const mapMenu = Object.entries(accordion).map(value =>{
    console.log(value[1].childNodes.values()); 
    value[1].addEventListener('click', () =>{
        value[1].classList.toggle('active')    
        
    })
     
})