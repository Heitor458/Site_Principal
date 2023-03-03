$(document).ready(function (){
    $(window).scroll(function(){
        if($(this).scrollTop() > 100){
            $('.header-area').addClass('sticky');
        }else{
            $('.header-area').removeClass('sticky');
        }
    });

    $('.header ul li a').click(function() {
        $('header ul li a ').removeClass('active');
        $(this).addClass('active');
    } )

     var options = {
        strings : ['Web Developer', 'Game dev', 'Designer 3D', 'QA'],
        typeSpeed: 90,
        loop: true;
     };
     var typed = new Typed('.element', options)

     ScrollReveal({
        distance: '100px',
        duration:2000,
        delay:200
     });
     ScrollReveal().reveal('.header a, .banner-content, .about-content',{origin: 'left'});
     ScrollReveal().reveal('.header ul, .bannar-img, .about-skills',{origin: 'right'});
     ScrollReveal().reveal('.section-title',{origin: 'top'});
     ScrollReveal().reveal('.services, .projects, .footer-area',{origin: 'bottom'});


     let menu_icon = document.querySelector('.menu-icon i');
     let menu_list = document.querySelector('.header ul');

     menu_icon.onclick = () =>{
        menu_icon.classList.toggle('bx-x');
        menu_icon.classList.toggle('show');
     }
})

