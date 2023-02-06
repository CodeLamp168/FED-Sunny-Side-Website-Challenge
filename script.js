const navBtn = document.querySelector('.nav-burger')
const mobileNav = document.querySelector('.nav-set-mobile')

navBtn.addEventListener('click', () => {
    console.log('hello')
    mobileNav.classList.toggle('active')
})