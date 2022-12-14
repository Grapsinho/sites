const hamburger = document.querySelector('.hamburger')
const bar = document.querySelector('.clr')
const bar1 = document.querySelector('.clr1')
const primaryNav = document.querySelector('.primary-nav')

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    primaryNav.classList.toggle('active')
    bar.classList.toggle('active')
    bar1.classList.toggle('active')
})

const bigCont = document.querySelector('.big-container')
const contact = document.querySelector('.contactBtn')
const contactBtn2 = document.querySelector('.contactBtn2')
const closeBtn = document.querySelector('.close')

contact.addEventListener('click', function() {
    bigCont.classList.add('active')
    primaryNav.classList.remove('active')
    hamburger.classList.remove("active");
})

contactBtn2.addEventListener('click', (e) => {
    e.preventDefault()
    bigCont.classList.add('active')
})

closeBtn.addEventListener('click', (e) => {
    e.preventDefault()
    bigCont.classList.remove('active')
})