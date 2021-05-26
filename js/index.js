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
