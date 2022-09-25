

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
