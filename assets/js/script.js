let navLinks = document.querySelectorAll("nav ul li a");

let pagination = document.querySelectorAll(".pagination .cont div");

window.addEventListener("scroll", () => {

    let x = window.pageYOffset;

    pagination.forEach(p => {
        p.classList.remove("active");
    });
    navLinks.forEach(l => {
        l.classList.remove("active");
    });

    if(x < 400)
    {
        pagination[0].classList.add("active");
        navLinks[0].classList.add("active");
    }
    else if(x < 1250)
    {
        pagination[1].classList.add("active");
        navLinks[1].classList.add("active");
    }
    else if(x < 2000)
    {
        pagination[2].classList.add("active");
        navLinks[2].classList.add("active");
    }
    else if(x < 3000)
    {
        pagination[3].classList.add("active");
        navLinks[3].classList.add("active");
    }
})





window.addEventListener("scroll", function() {
    var nav = document.querySelector('nav');
    if ( window.pageYOffset > 10 ) {
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }
});




let leftArr = document.querySelector(".left-arrow");
let rightArr = document.querySelector(".right-arrow");

let scrollContent = document.querySelector(".section-three .wrapper .content");

let vieLink = document.querySelectorAll(".section-three ul li");

leftArr.addEventListener("click", () => {
    var w = window.innerWidth;
    if(w < 500)
        scrollContent.scrollLeft -= 500;
    else
        scrollContent.scrollLeft -= 800;
})

rightArr.addEventListener("click", () => {
    var w = window.innerWidth;
    if(w < 500)
        scrollContent.scrollLeft += 500;
    else
        scrollContent.scrollLeft += 800;
})

scrollContent.addEventListener("scroll", () => {
    let x = scrollContent.scrollLeft;

    vieLink.forEach(l => {
        l.classList.remove("active");
    });
    
    if(x < 1000)
        vieLink[0].classList.add("active");
    else if(x < 2000)
        vieLink[1].classList.add("active");
    else if(x < 3000)
        vieLink[2].classList.add("active");
});










let hamBtn = document.querySelector(".hamburger");
let hamburger = document.querySelector(".hamburger-menu");

hamBtn.addEventListener("click", () => {
    hamburger.classList.toggle("open");
    hamBtn.classList.toggle("open");
});

let hamLinks = document.querySelectorAll(".hamburger-menu ul li a");

hamLinks.forEach(link => {
    link.addEventListener("click", () => {
        hamburger.classList.toggle("open");
        hamBtn.classList.toggle("open");
    })
});