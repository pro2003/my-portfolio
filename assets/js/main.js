// ======= menu icon navbar=======
let menuicon=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');

menuicon.onclick = () =>{
    menuicon.classList.toggle('bx-x');
    navbar.classList.toggle('active')
};



// ======= scroll section active link =======
let sections=document.querySelectorAll('section');
let navlinks=document.querySelectorAll('header nav a');

window.onscroll=() => {
 sections.forEach(sec=>{
let top=window.scrollY;
let offset=sec.offsetTop -150;
let height=sec.offsetHeight;
let id=sec.getAttribute('id');

if(top>=offset && top< offset + height){
    navlinks.forEach(links =>{
        links.classList.remove('active');
        document.querySelector('header nav a[href*='+id+']').classList.add('active');
    })
}
 });

    //=====sticky navbar=====
let header=document.querySelector('.header');

header.classList.toggle('sticky',window.scrollY>100)


// remove menu icon navbar when click navbar link(scroll)
menuicon.classList.remove('bx-x');
navbar.classList.remove('active');
}

// dark and light mode 
let darkModeIcon= document.querySelector('#darkMode-icon');
darkModeIcon.onclick =()=>{
    darkModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode')
}