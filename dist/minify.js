var swiper=new Swiper(".mySwiper",{spaceBetween:30,centeredSlides:!0,autoplay:{delay:5000,disableOnInteraction:!1,},pagination:{el:".swiper-pagination",clickable:!0,},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev",},});var swiper=new Swiper(".mySwiper-2",{effect:"cards",grabCursor:!0,});const bntMobile=document.getElementById('btn_mobile')
function toggleMenu(){const nav=document.getElementById('nav')
nav.classList.toggle('active')}
bntMobile.addEventListener('click',toggleMenu);const spaceMobile=document.getElementById('btn_mobile')
function spaceMenu(){const header=document.getElementById('header')}