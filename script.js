

// RESPONSIVE NAVIGATION BAR SECTION
const openb = document.querySelector("#open-bar");
const closeb = document.querySelector("#close-bar");
const mobileNavbar = document.querySelector("#mobile-navbar");
const bgColor = document.querySelector(".nav-bg-color");

openb.addEventListener("click", () => {
    mobileNavbar.style.display = "flex";
    mobileNavbar.style.transition = "0.75s ease";
    if (mobileNavbar.style.display = "flex") {
        bgColor.style.display = "flex";
    }
})

closeb.addEventListener("click", () => {
    mobileNavbar.style.display = "none";
    if (mobileNavbar.style.display = "none") {
        bgColor.style.display = "none";
    }

})
bgColor.addEventListener("click", () => {
    mobileNavbar.style.display = "none";
    bgColor.style.display = "none";
})

// TWO BANNERS HOVER EFFECT
const banner1 = document.querySelector("#banner-one");
const bOneBtn = document.querySelector("#b1Btn");

banner1.addEventListener("mouseover", () => {
    bOneBtn.style.backgroundColor = "rgb(27, 81, 27)";
})
banner1.addEventListener("mouseout", () => {
    bOneBtn.style.backgroundColor = "transparent";
})

const banner2 = document.querySelector("#banner-2");
const bTwoBtn = document.querySelector("#b2Btn");

banner2.addEventListener("mouseover", () => {
    bTwoBtn.style.backgroundColor = "rgb(27, 81, 27)";
})
banner2.addEventListener("mouseout", () => {
    bTwoBtn.style.backgroundColor = "transparent";
})

// TEXT SLIDE SECTION
const slideArray =
    ["Free Shippping", "Online Order",
        "Promotion", "Save Money",
        "F24/7 Support", "Happy Sells"];

let slideItem = document.querySelector("#slide-item");
let slideIndex = 0;

slide();
function slide() {

    if (slideIndex >= slideArray.length) {
        slideIndex = 0;
    }

    slideItem.innerText = slideArray[slideIndex];

    setTimeout(() => {
        slideIndex++;
        slide();
    }, 2500);
}
