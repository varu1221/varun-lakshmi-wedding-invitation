// =====================================
// WEDDING COUNTDOWN
// =====================================

const weddingDate = new Date(
"July 05, 2026 08:00:00"
).getTime();

function updateCountdown(){

const now = new Date().getTime();

const distance =
weddingDate - now;

if(distance < 0){

document.getElementById("days").innerHTML = "00";
document.getElementById("hours").innerHTML = "00";
document.getElementById("minutes").innerHTML = "00";
document.getElementById("seconds").innerHTML = "00";

return;

}

const days = Math.floor(
distance / (1000 * 60 * 60 * 24)
);

const hours = Math.floor(
(distance %
(1000 * 60 * 60 * 24))
/
(1000 * 60 * 60)
);

const minutes = Math.floor(
(distance %
(1000 * 60 * 60))
/
(1000 * 60)
);

const seconds = Math.floor(
(distance %
(1000 * 60))
/
1000
);

document.getElementById("days").innerHTML =
String(days).padStart(2,"0");

document.getElementById("hours").innerHTML =
String(hours).padStart(2,"0");

document.getElementById("minutes").innerHTML =
String(minutes).padStart(2,"0");

document.getElementById("seconds").innerHTML =
String(seconds).padStart(2,"0");

}

updateCountdown();

setInterval(updateCountdown,1000);

// =====================================
// SMOOTH SCROLL
// =====================================

document
.querySelectorAll('a[href^="#"]')
.forEach(anchor => {

anchor.addEventListener(
"click",
function(e){

e.preventDefault();

const target =
document.querySelector(
this.getAttribute("href")
);

if(target){

target.scrollIntoView({
behavior:"smooth"
});

}

});

});

// =====================================
// GALLERY LIGHTBOX
// =====================================

const galleryImages =
document.querySelectorAll(
".gallery-grid img"
);

const lightbox =
document.createElement("div");

lightbox.id = "lightbox";

document.body.appendChild(lightbox);

galleryImages.forEach(image => {

image.addEventListener("click", () => {

lightbox.classList.add("active");

const img =
document.createElement("img");

img.src = image.src;

while(lightbox.firstChild){

lightbox.removeChild(
lightbox.firstChild
);

}

lightbox.appendChild(img);

});

});

lightbox.addEventListener(
"click",
() => {

lightbox.classList.remove(
"active"
);

}
);

// =====================================
// FLOWER PETALS
// =====================================

function createPetal(){

const petal =
document.createElement("div");

petal.classList.add("petal");

petal.innerHTML = "🌸";

petal.style.left =
Math.random() *
window.innerWidth +
"px";

petal.style.animationDuration =
(Math.random() * 5 + 5)
+ "s";

petal.style.opacity =
Math.random();

document.body.appendChild(
petal
);

setTimeout(() => {

petal.remove();

},10000);

}

setInterval(createPetal,1200);

// =====================================
// MUSIC BUTTON
// =====================================

const musicButton =
document.getElementById(
"musicToggle"
);

const bgMusic =
document.getElementById(
"bgMusic"
);

if(musicButton && bgMusic){

musicButton.innerHTML =
"🎵 Music On";

musicButton.addEventListener(
"click",
() => {

if(bgMusic.paused){

bgMusic.play();

musicButton.innerHTML =
"🎵 Music Off";

}else{

bgMusic.pause();

musicButton.innerHTML =
"🎵 Music On";

}

}
);

}

// =====================================
// NAVBAR SHRINK EFFECT
// =====================================

window.addEventListener(
"scroll",
() => {

const navbar =
document.querySelector(
".navbar"
);

if(window.scrollY > 50){

navbar.style.height =
"75px";

}else{

navbar.style.height =
"90px";

}

}
);

// =====================================
// FADE-IN ANIMATION
// =====================================

const sections =
document.querySelectorAll(
"section"
);

const observer =
new IntersectionObserver(

entries => {

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.style.opacity = "1";

entry.target.style.transform =
"translateY(0)";

}

});

},

{
threshold:0.15
}

);

sections.forEach(section => {

section.style.opacity = "0";
section.style.transform =
"translateY(50px)";
section.style.transition =
"all 1s ease";

observer.observe(section);

});
