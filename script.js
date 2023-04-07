//MEnu BUTTON activate
let menuBtn = document.querySelector('#menu-btn');
let menuBar = document.querySelector('.menubar');

menuBtn.onclick =() => {
    menuBtn.classList.toggle('bx-x');
    menuBar.classList.toggle('active');
}

//remove scroll menubar
window.onscroll = () => {
    menuBtn.classList.remove('bx-x');
    menuBar.classList.remove('active');
}

//scroll reveal
ScrollReveal({
    reset:true,
    distance:'100px',
    duration:2000,
    delay:200,
});
ScrollReveal().reveal('.bio h1,.aboutresume', { origin:'left'});
ScrollReveal().reveal('.bio p,.skill-types', { origin:'right' });
ScrollReveal().reveal('.bio,.headings', { origin:'top' });
ScrollReveal().reveal('.profile,.about-item,.skills-item,.form', { origin:'bottom' });

//typing animations
const animText = new Typed ('.animated-text',{
    strings: ['Student','Web Designer','Copy Writer','Freelancer'],
    backSpeed: 100,
    typeSpeed: 100,
    backDelay: 600,
    loop:true
});