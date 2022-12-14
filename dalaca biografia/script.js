
window.addEventListener("scroll", function() {
     var scroll = this.document.querySelector('.to-top');
     scroll.classList.toggle("active" , window.scrollY > 200)
})