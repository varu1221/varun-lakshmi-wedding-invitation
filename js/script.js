// ==============================
// COUNTDOWN TIMER
// ==============================

const weddingDate = new Date("July 05, 2026 08:00:00").getTime();

const countdown = setInterval(function () {

const now = new Date().getTime();

const distance = weddingDate - now;

const days = Math.floor(distance / (1000 * 60 * 60 * 24));

const hours = Math.floor(
(distance % (1000 * 60 * 60 * 24))
/
(1000 * 60 * 60)
);

const minutes = Math.floor(
(distance % (1000 * 60 * 60))
/
(1000 * 60)
);

const seconds = Math.floor(
(distance % (1000 * 60))
/
1000
);

const countdownElement =
document.getElementById("countdown");

if (countdownElement) {

countdownElement.innerHTML = `

<div class="countdown-grid">

<div class="count-box">
<span>${days}</span>
<p>Days</p>
</div>

<div class="count-box">
<span>${hours}</span>
<p>Hours</p>
</div>

<div class="count-box">
<span>${minutes}</span>
<p>Minutes</p>
</div>

<div class="count-box">
<span>${seconds}</span>
<p>Seconds</p>
</div>

</div>

`;

}

if (distance < 0) {

clearInterval(countdown);

countdownElement.innerHTML =
"<h2>💍 Wedding Day Has Arrived 💍</h2>";

}

}, 1000);

// ==============================
// SMOOTH SCROLL
// ==============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

anchor.addEventListener("click", function (e) {

e.preventDefault();

document.querySelector(this.getAttribute("href"))
.scrollIntoView({
behavior: "smooth"
});

});

});

// ==============================
// GALLERY LIGHTBOX
// ==============================

const images =
document.querySelectorAll(".gallery-grid img");

const lightbox =
document.createElement("div");

lightbox.id = "lightbox";

document.body.appendChild(lightbox);

images.forEach(image => {

image.addEventListener("click", () => {

lightbox.classList.add("active");

const img =
document.createElement("img");

img.src = image.src;

while (lightbox.firstChild) {
lightbox.removeChild(lightbox.firstChild);
}

lightbox.appendChild(img);

});

});

lightbox.addEventListener("click", e => {

if (e.target !== e.currentTarget) return;

lightbox.classList.remove("active");

});

// ==============================
// FLOWER PETAL EFFECT
// ==============================

function createPetal() {

const petal =
document.createElement("div");

petal.innerHTML = "🌸";
petal.classList.add("petal");

petal.style.left =
Math.random() * window.innerWidth + "px";

petal.style.animationDuration =
Math.random() * 5 + 5 + "s";

petal.style.opacity =
Math.random();

document.body.appendChild(petal);

setTimeout(() => {

petal.remove();

}, 10000);

}

setInterval(createPetal, 500);

// ==============================
// MUSIC TOGGLE
// ==============================

const musicButton =
document.getElementById("musicToggle");

const music =
document.getElementById("bgMusic");

if (musicButton && music) {

musicButton.addEventListener("click", () => {

if (music.paused) {

music.play();

musicButton.innerHTML =
"🎵 Music On";

} else {

music.pause();

musicButton.innerHTML =
"🎵 Music Off";

}

});

}
