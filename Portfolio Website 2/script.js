const hamburger = document.getElementById('hamburger')
const primaryNav = document.getElementById('primary-nav')
const opacity = document.querySelector('.opacity')

hamburger.addEventListener("click", function() {
    hamburger.classList.toggle("active")
    primaryNav.classList.toggle("active")
    opacity.classList.toggle("active")
})

document.addEventListener("click", function(e) {
    if(e.target.id !== 'primaryNav' && e.target.id !== 'hamburger') {
        hamburger.classList.remove("active")
        primaryNav.classList.remove("active")
    }
})



window.addEventListener("scroll", function() {
    let scroll = document.querySelector('.scroll');
    scroll.classList.toggle("fixed" , window.scrollY > 59)
})


function scrollProgressHandler(){
    let scrollAmount = window.pageYOffset;
    let progressBar = document.querySelector('.scroll-tracker');
    let limit = document.body.scrollHeight - window.innerHeight;
    let currentScrollPercent = (scrollAmount/limit) * 100;
    progressBar.style.width = currentScrollPercent + '%';
  }
window.addEventListener('scroll',scrollProgressHandler);




let slide = document.getElementById("slide")
let upArrow = document.getElementById("upArrow")
let downArrow = document.getElementById("downArrow")

let x = 0

upArrow.onclick = function() {
    if(x > "-600") {
        x = x - 300
        slide.style.top = x + "px"
    } 
}

downArrow.onclick = function() {
    if(x < 0) {
        x = x + 300
        slide.style.top = x + "px"
    }
    
}