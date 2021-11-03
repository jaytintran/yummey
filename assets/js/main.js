
// ====================  Show Menu

const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)
    
    // Validate that variables exist
    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            // We add the show-menu class to the div tag with the nav__menu class
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle','nav-menu')

// ==================== Remove Mobile Menu When Link is Already Clicked

const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

// ==================== Scroll Section + Active Link for It

const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

// ==================== Change Background Header
function scrollHeader () {
    const nav = document.getElementById('header')
    // When scroll is > 200vh, add scroll-header class to <header>
    if (this.scrollY >= 200) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}

window.addEventListener('scroll', scrollHeader)

// ==================== Show Scroll Top
function scrollTop(){
    const scrollTop = document.getElementById('scroll-top');
    // When scroll is > 560vh, add the show-scroll class to scroll-top class
    if(this.scrollY >= 560) scrollTop.classList.add('sroll-top'); else scrollTop.classList.remove('scroll-top')
}
window.addEventListener('scroll', scrollTop)


// ===================== Dark Theme Toggler

const themeButton = document.getElementById('theme-button');
const darktheme = 'dark-theme';
const iconTheme = 'bx-sun'

themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darktheme)
    themeButton.classList.toggle(iconTheme)
})

// ===================== Scroll Reveal
const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 2000,
    reset: true
})

sr.reveal(` .home__data, .home__img, 
            .about__data, .about__img, 
            .services__content, .menu__content, 
            .app__data, .app__img, 
            .contact__data, .contact__button`, {
    interval: 300,
})