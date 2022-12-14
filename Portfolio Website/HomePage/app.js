
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


const email = document.querySelector('.email')
const text = document.querySelector('.text')
const cont = document.querySelector('.intro-section')

const moveBtn = (e) => {
    const btn = document.querySelector('.btn')
    if(!e[0].isIntersecting){
        btn.classList.add('active')
        text.classList.add('active')
        email.classList.add('active')
    }

    if(e[0].isIntersecting){
        btn.classList.remove('active')
        text.classList.remove('active')
        email.classList.remove('active')
    }
}

const moveBtnIntersecting = new IntersectionObserver(moveBtn);
moveBtnIntersecting.observe(cont)


window.addEventListener('scroll', reveal)

function reveal() {
    let canido = document.querySelector('.canido')
    let evenColumnFirst = document.querySelector('.even-column-first')
    let evenColumnSecond = document.querySelector('.even-column')
    let secondCol = document.querySelector('.second-col')
    let calculator = document.querySelector('.calculator')
    let tic = document.querySelector('.Tic')
    let rest = document.querySelector('.rest')
    let animation = document.querySelector('.animation')

    let windowHeight = window.innerHeight
    let revealTop = canido.getBoundingClientRect().top
    let revealTop2 = tic.getBoundingClientRect().top
    let revealPoint = 150

    if(revealTop < windowHeight - revealPoint) {
        canido.classList.add('active')
        evenColumnFirst.classList.add('active')
        evenColumnSecond.classList.add('active')
        secondCol.classList.add('active')
        animation.classList.add('active')
    }
    else {
        canido.classList.remove('active')
        evenColumnFirst.classList.remove('active')
        evenColumnSecond.classList.remove('active')
        secondCol.classList.remove('active')
        animation.classList.remove('active')
    }

   if(revealTop2 < windowHeight - revealPoint) {
       calculator.classList.add('active')
       tic.classList.add('active')
       rest.classList.add('active')
   }
   else {
       calculator.classList.remove('active')
       tic.classList.remove('active')
       rest.classList.remove('active')
   }
    
}

const seeMore = document.querySelector('.see-more')
const hideTxt = document.querySelector('.hide-txt')

seeMore.addEventListener('click', () => {
    hideTxt.classList.toggle('active')

    if(hideTxt.classList.contains('active')) {
        seeMore.textContent = `See less`
    }else {
        seeMore.textContent = `See more...`
    }
})


const bigCont = document.querySelector('.big-container')
const contact = document.querySelector('.contactBtn')
const contact1 = document.querySelector('.contactBtn1')
const contact2 = document.querySelector('.contactBtn2')
const contact3 = document.querySelector('.contactB')
const closeBtn = document.querySelector('.close')

contact.addEventListener('click', function() {
    bigCont.classList.add('active')
    primaryNav.classList.remove('active')
    hamburger.classList.remove("active");
    
})

contact1.addEventListener('click', function(e) {
    e.preventDefault()
    bigCont.classList.add('active')
})

contact2.addEventListener('click', function(e) {
    e.preventDefault()
    bigCont.classList.add('active')
})

contact3.addEventListener('click', function(e) {
    e.preventDefault()
    bigCont.classList.add('active')
})

closeBtn.addEventListener('click', (e) => {
    e.preventDefault()
    bigCont.classList.remove('active')
})