const hamburger = document.querySelector('.hamburger')
const navBar = document.querySelector('.primary__list')

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navBar.classList.toggle("active");
})



window.addEventListener("scroll", function() {
    let scroll = this.document.querySelector('.header-cont');
    scroll.classList.toggle("fixed" , window.scrollY > 59)
})


let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("col");
  let dots = document.querySelectorAll("#dots");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 3000); // Change slide every 3 seconds
}