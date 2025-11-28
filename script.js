const openb = document.querySelector("#open-bar");
const closeb = document.querySelector("#close-bar");
const mobileNavbar = document.querySelector("#mobile-navbar");
const bgColor = document.querySelector(".nav-bg-color");

openb.addEventListener("click", () => {
    mobileNavbar.style.display = "flex";
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