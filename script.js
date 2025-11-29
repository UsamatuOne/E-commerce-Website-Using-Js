

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
const bannerOne = document.querySelector(".banner-one");
const bOneBtn = document.querySelector(".b1Btn");

bannerOne.addEventListener("mouseover", () => {
    bOneBtn.style.backgroundColor = "rgb(27, 81, 27)";
})
bannerOne.addEventListener("mouseout", () => {
    bOneBtn.style.backgroundColor = "transparent";
})

const bannerTwo = document.querySelector(".banner-2");
const bTwoBtn = document.querySelector(".b2Btn");

bannerTwo.addEventListener("mouseover", () => {
    bTwoBtn.style.backgroundColor = "rgb(27, 81, 27)";
})
bannerTwo.addEventListener("mouseout", () => {
    bTwoBtn.style.backgroundColor = "transparent";
})
