
window.addEventListener("scroll", function() {
    var scroll = this.document.querySelector('.to-top');
    scroll.classList.toggle("active" , window.scrollY > 100)
})


window.addEventListener("scroll", function() {
    var scroll = this.document.querySelector('.navbar');
    scroll.classList.toggle("fixed" , window.scrollY > 59)
})


const mobileBtn = document.getElementById('mobile-cta')
            nav = document.querySelector('nav')
            mobileBtnExit = document.getElementById('exit-cta');

            mobileBtn.addEventListener('click', () => {
              nav.classList.add('menu-exit');
            })
            mobileBtnExit.addEventListener('click', () => {
              nav.classList.remove('menu-exit');
})


const navHeight = document.querySelector('.navbar').offsetHeight;

document.documentElement.style.setProperty('--scroll-padding', navHeight + 25 + "px")