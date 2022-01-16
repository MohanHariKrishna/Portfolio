/* MENU close and open functionality*/

const navmenu= document.getElementById('nav-menu'),
      navtoggle= document.getElementById('nav-toggle'),
      navclose=document.getElementById('nav-close')

if(navtoggle){
    navtoggle.addEventListener('click', () =>{
        navmenu.classList.add('show-menu')
    })
}

if(navclose){
    navclose.addEventListener('click', () => {
        navmenu.classList.remove('show-menu')
    })
}

const navlink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navmenu = document.getElementById('nav-menu');
    navmenu.classList.remove('show-menu')
}

navlink.forEach(n => n.addEventListener('click', linkAction))

const skillscontent= document.getElementsByClassName('skills__content'),
      skillsheader=document.querySelectorAll('.skills__header')

function toggleSkills(){
    let itemClass=this.parentNode.className

    for(i=0; i<skillscontent.length;i++){
        skillscontent[i].className= 'skills__content skills__close'
    }
    if(itemClass==='skills__content skills__close'){
        this.parentNode.className='skills__content skills__open'
    }
}

skillsheader.forEach((el) =>{
    el.addEventListener('click', toggleSkills)
})

let swiper = new Swiper('.portfolio__container', {
    cssMode: true,
    loop:false,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable:true,
    },
   
  });

  let image= document.getElementById('aboutimg');
  let images=[ 'myimage.jpg', 'myimage1.jpg','myimage4.jpg','myimage5.jpg' ]
  setInterval(function(){
      let random=Math.floor(Math.random()*4);
      image.src=images[random];
  }, 3000);

  /*change background header */

  function scrollHeader(){
      const nav=document.getElementById('header');
      if(this.scrollY >80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')

    }
window.addEventListener('scroll', scrollHeader)
    function scrollup(){
        const scrollup=document.getElementById('scroll-up');
        if(this.scrollY>=560) scrollup.classList.add('show-scroll'); else scrollup.classList.remove('show-scroll');
    }
    window.addEventListener('scroll', scrollup)



    /*dark mode*/

const themebutton=document.getElementById('theme-button')
const darktheme= 'dark-theme'
const icontheme= 'uil-sun'

//to store the mode user previously selected 
const selectedtheme= localStorage.getItem('selected-theme')
const seclectedicon=localStorage.getItem('selected-icon')
 // current theme can be know by validating dark-theme class

 const getCurrentTheme=() => document.body.classList.contains(darktheme) ? 'dark' : 'light'
 const getCurrentIcon=() => document.body.classList.contains(icontheme) ? 'uil-moon' : 'uil-sun'

 if(selectedtheme){
     document.body.classList[selectedtheme==='dark' ? 'add' :'remove'](darktheme)
     themebutton.classList[seclectedicon==='uil-moon' ? 'add' :'remove'](icontheme)
 }

 //For activating the theme manually using button
 themebutton.addEventListener('click', ()=>{

 document.body.classList.toggle(darktheme)
 themebutton.classList.toggle(icontheme)
 //save the theme and icon user chose

 localStorage.setItem('selected-theme', getCurrentTheme())
 localStorage.setItem('selected-icon', getCurrentIcon())



})