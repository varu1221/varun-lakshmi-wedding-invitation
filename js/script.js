// =====================================
// WEDDING COUNTDOWN
// =====================================

const weddingDate = new Date("July 05, 2026 08:00:00").getTime();

function updateCountdown() {

```
const now = new Date().getTime();
const distance = weddingDate - now;

if (distance < 0) {
    document.getElementById("days").textContent = "00";
    document.getElementById("hours").textContent = "00";
    document.getElementById("minutes").textContent = "00";
    document.getElementById("seconds").textContent = "00";
    return;
}

const days = Math.floor(distance / (1000 * 60 * 60 * 24));
const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
const seconds = Math.floor((distance % (1000 * 60)) / 1000);

document.getElementById("days").textContent = String(days).padStart(2, "0");
document.getElementById("hours").textContent = String(hours).padStart(2, "0");
document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");
```

}

updateCountdown();
setInterval(updateCountdown, 1000);

// =====================================
// SMOOTH SCROLL
// =====================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

```
anchor.addEventListener("click", function (e) {

    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
        target.scrollIntoView({
            behavior: "smooth"
        });
    }

});
```

});

// =====================================
// GALLERY LIGHTBOX
// =====================================

const galleryImages = document.querySelectorAll(".gallery-grid img");

const lightbox = document.createElement("div");
lightbox.id = "lightbox";

document.body.appendChild(lightbox);

galleryImages.forEach(image => {

```
image.addEventListener("click", () => {

    lightbox.classList.add("active");

    const img = document.createElement("img");
    img.src = image.src;

    lightbox.innerHTML = "";
    lightbox.appendChild(img);

});
```

});

lightbox.addEventListener("click", () => {
lightbox.classList.remove("active");
});

// =====================================
// FLOWER PETALS
// =====================================

function createPetal() {

```
const petal = document.createElement("div");

petal.classList.add("petal");
petal.innerHTML = "🌸";

petal.style.left = Math.random() * window.innerWidth + "px";
petal.style.animationDuration = (Math.random() * 5 + 5) + "s";
petal.style.opacity = Math.random();

document.body.appendChild(petal);

setTimeout(() => {
    petal.remove();
}, 10000);
```

}

setInterval(createPetal, 1200);

// =====================================
// NAVBAR SHRINK
// =====================================

window.addEventListener("scroll", () => {

```
const navbar = document.querySelector(".navbar");

if (!navbar) return;

navbar.style.height =
    window.scrollY > 50
        ? "75px"
        : "90px";
```

});

// =====================================
// FADE-IN EFFECT
// =====================================

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(

```
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
```

);

sections.forEach(section => {

```
section.style.opacity = "0";
section.style.transform = "translateY(50px)";
section.style.transition = "all 1s ease";

observer.observe(section);
```

});

// =====================================
// WELCOME SCREEN + MUSIC
// =====================================

document.addEventListener("DOMContentLoaded", () => {

```
const enterBtn = document.getElementById("enterBtn");
const welcomeScreen = document.getElementById("welcomeScreen");
const bgMusic = document.getElementById("bgMusic");

if (!enterBtn || !welcomeScreen) return;

function enterWebsite() {

    if (bgMusic) {
        bgMusic.volume = 0.5;
        bgMusic.play().catch(() => {});
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
```

});
