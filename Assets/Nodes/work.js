let secs=document.querySelectorAll('section');
let linker=document.querySelectorAll('header nav a');

window.onscroll=()=>{
    secs.forEach(sec=>{
        let top=window.scrollY;
        let off=sec.offsetTop-150;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id');
        if(top>=off&&top<off+height){
            linker.forEach(links=>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' +id+']').classList.add('active')
            })
        }
    });
    let header=document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY >100);
};
let menu=document.querySelector('#menu-icon');
let bar=document.querySelector('.navbar');
menu.onclick=()=>{
 menu.classList.toggle('bx-x');
 bar.classList.toggle('active');
 
};
ScrollReveal({
    reset:true,
    distance: '80px',
    duration: 2000,
    delay:200

});
ScrollReveal().reveal('.home-content, .heading',{origin:'top'});
ScrollReveal().reveal('.home-img, .services-container, .contact form',{origin:'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img',{origin:'left'});
ScrollReveal().reveal('.home-content, .about-content',{origin:'right'});


const typed=new Typed('.multi',{
strings: ['Frontend Developer','Backend Developer', 'Apsiring ML Engineer'],
typeSpeed: 100,
backSpeed: 100,
backDelay:1000,
loop:true
});

let btnsend=document.getElementById('btnsend');
let name=document.getElementById('name').value;
let email=document.getElementById('email').value;
let phone=document.getElementById('phone-number').value;
let subject=document.getElementById('subject').value;
let mess=document.getElementById('message').value;
let body='Name:'+name+'<br/>'+'Email:'+email+'<br/>'+'Phone:'+phone+'<br/>'+'Subject:'+subject+'<br/>'+mess;
btnsend.addEventListener('click',function(e){
e.preventDefault();
Email.send({
    Host : "smtp.gmail.com",
    Username : "tshivhulafhulufhelo@gmail.com",
    Password : "vyobisotdnljljjn",
    To : 'tshivhulafhulufhelo@gmail.com',
    From : email,
    Subject : subject,
    Body : body
}).then(
  message => alert(message)
);});
