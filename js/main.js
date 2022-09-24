

let nav=document.querySelector("nav")
window.addEventListener('scroll' ,function () {
    if (window.scrollY >= 25) {
        nav.classList.add("scroll")
    }
    else{
        nav.classList.remove("scroll")
    }
})

let toggler=document.querySelector(".navbar-toggler");

toggler.onclick=function(){
    nav.classList.toggle("top")
}


var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    loop:true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
    },
  });