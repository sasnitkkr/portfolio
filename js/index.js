/* Title
https://stackoverflow.com/questions/21808160/how-to-change-tab-name-in-browser-when-user-goes-off-from-my-site
*/

window.onload = function() {

  var pageTitle = document.title;
  var attentionMessage = 'Come Back!';

  document.addEventListener('visibilitychange', function(e) {
    var isPageActive = !document.hidden;

    if(!isPageActive){
      document.title = attentionMessage;
    }else {
      document.title = pageTitle;
    }
  });
};

/* Menu Show Y Hidden */
const navMenu = document.getElementById('nav-menu'), // nav menu div containing ul
      navToggle = document.getElementById('nav-toggle'), // apps
      navClose = document.getElementById('nav-close'); // Cross


/* Menu Show => For Apps */

if(navToggle)
{
    navToggle.addEventListener('click', ()=>{
        navMenu.classList.add('show-menu');
    })
}

/* Menu Hide => For Cross*/
if(navClose)
{
    navClose.addEventListener('click', ()=>{
        navMenu.classList.remove('show-menu');
    })
}

/* Remove Menu Mobile */

const navLink = document.querySelectorAll('.nav__link');

function linkAction(){
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}

navLink.forEach(n => n.addEventListener('click', linkAction));


/* ------------- Skills --------------- */

/* Container ->  { Content -> Header -> List } * 3 */

// const skillsContent = document.querySelectorAll('.skills__content'); 
const skillsContent = document.getElementsByClassName('skills__content'); // preferred -> Live DOM
// https://stackoverflow.com/questions/52455340/live-and-static-dom-elements#:~:text=javascript%20html%20dom,this%20is%20not%20the%20case.
const skillsHeader = document.querySelectorAll('.skills__header');


function toggleSkills(){
  //replace divs with skills__close -> skills__open => others close

  let itemClass = this.parentNode.className;
  // let -> local scope, var -> global

  for(var i=0; i<skillsContent.length; i++)
  {
    skillsContent[i].className = 'skills__content skills__close';
  }
  if(itemClass === 'skills__content skills__close')
  {
    this.parentNode.className = 'skills__content skills__open';
  }

}

// add event listener to all to headers
// click -> sab close & if close then open

skillsHeader.forEach(n => n.addEventListener('click', toggleSkills));


/* -------------- Qualification Tabs --------------- */

const tabs = document.querySelectorAll('[data-target]'),
      tabsContents = document.querySelectorAll('[data-content]');
    
tabs.forEach(tab =>{
    tab.addEventListener('click', () => {

      const target = document.querySelector(tab.dataset.target)

      tabsContents.forEach(tabsContent =>{
        tabsContent.classList.remove('qualification__active');
      })
      target.classList.add('qualification__active');

      tabs.forEach(tab => {
        tab.classList.remove('qualification__active');
      })
      tab.classList.add('qualification__active');

    })  
})
    

/* -------------- Services Modal --------------- */

const modalViews = document.querySelectorAll('.services__modal'), // outside modal box
      modalBtns = document.querySelectorAll('.services__button'),  // view more button
      modalCloses = document.querySelectorAll('.services__modal-close'); // all cross

      // remember to give . in querySelectorAll class

let modal = function(modalClick){
    modalViews[modalClick].classList.add('active-modal');
}

modalBtns.forEach((modalBtn, i) => {
  modalBtn.addEventListener('click', () => {
    modal(i)
  })
})

modalCloses.forEach((modalClose) => {
  modalClose.addEventListener('click', () => {
    modalViews.forEach((modalView) => {
      modalView.classList.remove('active-modal')
    })
  })
})

/* -------------- Portfolio Swiper --------------- */


let swiper = new Swiper('.swiper-container', {
  cssMode: true,
  loop: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  // mousewheel: true,
  // keyboard: true,
});


/* -------------- Scroll Active Link --------------- */

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


/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
  const nav = document.getElementById('header')
  // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
  if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*==================== SHOW SCROLL UP ====================*/ 
function scrollUp(){
  const scrollUp = document.getElementById('scroll-up');
  // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)



/* -------------- Dark Light Theme ----------------- */
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})


