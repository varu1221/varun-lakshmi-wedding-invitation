// =====================================
// WEDDING COUNTDOWN
// =====================================

const weddingDate = new Date("2026-07-05T08:00:00").getTime();

function updateCountdown() {

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

if (!daysEl || !hoursEl || !minutesEl || !secondsEl) return;

const now = Date.now();
const distance = weddingDate - now;

if (distance <= 0) {
    daysEl.textContent = "00";
    hoursEl.textContent = "00";
    minutesEl.textContent = "00";
    secondsEl.textContent = "00";
    return;
}

const days = Math.floor(distance / (1000 * 60 * 60 * 24));
const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
const minutes = Math.floor((distance / (1000 * 60)) % 60);
const seconds = Math.floor((distance / 1000) % 60);

daysEl.textContent = String(days).padStart(2, "0");
hoursEl.textContent = String(hours).padStart(2, "0");
minutesEl.textContent = String(minutes).padStart(2, "0");
secondsEl.textContent = String(seconds).padStart(2, "0");


}

updateCountdown();
setInterval(updateCountdown, 1000);

// =====================================
// SMOOTH SCROLL
// =====================================

document.querySelectorAll('a[href^="#"]').forEach(link => {


link.addEventListener("click", function (e) {

    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
        e.preventDefault();

        target.scrollIntoView({
            behavior: "smooth"
        });
    }

});


});


// =====================================
// GALLERY LIGHTBOX
// =====================================

const galleryImages =
document.querySelectorAll(".gallery-grid img");

if (galleryImages.length > 0) {


const lightbox =
document.createElement("div");

lightbox.id = "lightbox";

document.body.appendChild(lightbox);

galleryImages.forEach(image => {

    image.addEventListener("click", () => {

        lightbox.classList.add("active");

        lightbox.innerHTML =
        `<img src="${image.src}" alt="">`;

    });

});

lightbox.addEventListener("click", () => {

    lightbox.classList.remove("active");

});


}

// =====================================
// FLOWER PETALS
// =====================================

function createPetal() {


const petal = document.createElement("div");

petal.className = "petal";
petal.innerHTML = "🌸";

petal.style.left =
    Math.random() * window.innerWidth + "px";

petal.style.animationDuration =
    (Math.random() * 5 + 5) + "s";

petal.style.opacity =
    Math.random();

document.body.appendChild(petal);

setTimeout(() => {
    petal.remove();
}, 10000);


}

setInterval(createPetal, 1200);

// =====================================
// NAVBAR SHRINK
// =====================================

window.addEventListener("scroll", () => {


const navbar = document.querySelector(".navbar");

if (!navbar) return;

navbar.style.height =
    window.scrollY > 50
        ? "75px"
        : "90px";


});

// =====================================
// FADE IN
// =====================================

const sections = document.querySelectorAll("section");

if ("IntersectionObserver" in window) {


const observer = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    },

    {
        threshold: 0.15
    }

);

sections.forEach(section => {

    section.style.opacity = "0";
    section.style.transform = "translateY(50px)";
    section.style.transition = "all 1s ease";

    observer.observe(section);

});


}

// =====================================
// WELCOME SCREEN + MUSIC
// =====================================

document.addEventListener("DOMContentLoaded", () => {


const enterBtn = document.getElementById("enterBtn");
const welcomeScreen = document.getElementById("welcomeScreen");
const bgMusic = document.getElementById("bgMusic");

if (!enterBtn || !welcomeScreen) return;

let entered = false;

function enterWebsite() {

    if (entered) return;
    entered = true;

    if (bgMusic) {
        bgMusic.volume = 0.5;

        bgMusic.play().catch(err => {
            console.log("Music blocked:", err);
        });
    }

    welcomeScreen.style.opacity = "0";
    welcomeScreen.style.visibility = "hidden";
    welcomeScreen.style.pointerEvents = "none";

    setTimeout(() => {
        welcomeScreen.remove();
    }, 500);

}

enterBtn.addEventListener("click", enterWebsite);

enterBtn.addEventListener("touchstart", (e) => {
    e.preventDefault();
    enterWebsite();
});


});
