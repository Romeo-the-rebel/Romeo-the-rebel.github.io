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

const form=document.querySelector("form")
const Name=document.getElementById("Name")
const email=document.getElementById("email");
const phone=document.getElementById("phone")
const Subject=document.getElementById("subject")
const Message=document.getElementById("message")


function sendMail(){
    const body= "Name:"+Name.value+"<br>Email:"+ email.value+"<br> Contact:"+phone.value+"<br> Message:"+Message.value;

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "tshivhulafhulufhelo@gmail.com",
        Password : "4743F30B4EAFF7C2CF845A2B927BA3BABD30",
        To : "tshivhulafhulufhelo@gmail.com",
        From :"tshivhulafhulufhelo@gmail.com" ,
        Subject : Subject.value,
        Body : body
    }).then(
      message =>{ if(message=="OK"){
        Swal.fire({
            title: "Congratulations!",
            text: "Your message has been sent!",
            icon: "success"
          });

      }
    }
    ); 
}

function checkInputs(){
    const items=document.querySelector(".item");
    for(const item of items){
        if(item.value==""){
            item.classList.add("error");
            item.parentElement.classList.add("error");
            
        }
    }
    }
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    sendMail();
    //checkInputs();
});
