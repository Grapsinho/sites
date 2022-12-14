const hamburger = document.querySelector('.hamburger')
const navBar = document.querySelector('.primary-list')

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navBar.classList.toggle("active");
})

window.addEventListener("scroll", function() {
    var scroll = this.document.querySelector('.scroll');
    scroll.classList.toggle("fixed" , window.scrollY > 59)
})