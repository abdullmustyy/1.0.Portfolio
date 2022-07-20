///////////////////////////////////// HEADER SECTION /////////////////////////////////////
// My picture animation on click
let myPicture = document.querySelector("img.my-pics");
myPicture.addEventListener("click", function () {
  myPicture.classList.add("pressed");
  setTimeout(() => {
    myPicture.classList.remove("pressed");
  }, 50);
});

// Animations
// let tl = gsap.timeline();

// Scroll to the top of the page on reload
if (history.scrollRestoration) {
  history.scrollRestoration = "manual";
} else {
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };
}

// All animations
gsap.from("#home", {
  duration: 5,
  overflow: "hidden",
});
gsap.from(".nav-item", {
  delay: 5,
  duration: 1.5,
  ease: "elastic.out(1, 0.3)",
  opacity: 0,
  stagger: 0.3,
  y: -100,
});
gsap.from(".cv-btn-hr", {
  delay: 6,
  duration: 1,
  ease: "Ease.easeInOut",
  opacity: 0,
  width: 0,
});
gsap.from(".anim-btn", {
  delay: 6,
  duration: 2,
  ease: "Ease.easeInOut",
  opacity: 0,
  stagger: 0.3,
  x: -50,
});
gsap.from(".socials-hr, .vr", {
  delay: 6,
  duration: 1,
  ease: "Ease.easeInOut",
  opacity: 0,
  width: 0,
});
gsap.from(".socials-links", {
  delay: 6,
  duration: 2,
  ease: "Ease.easeInOut",
  opacity: 0,
  scaleY: 2,
});
gsap.from(".anim-text", {
  delay: 6,
  duration: 2,
  ease: "Ease.easeInOut",
  opacity: 0,
  stagger: 0.3,
  y: 50,
});
gsap.from(".header-container-l", {
  delay: 6,
  duration: 2,
  ease: "Ease.easeInOut",
  opacity: 0,
  scale: 1.05,
});
