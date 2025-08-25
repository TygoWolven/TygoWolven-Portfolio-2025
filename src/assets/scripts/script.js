// Import all the needed packages
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// My Skills Hover Animation
const hoverContainer = document.querySelector(".hover-container"),
      imageContainer = hoverContainer.querySelector(".image-container");

gsap.set(hoverContainer, { xPercent: -50, yPercent: -50 });
      
let setX = gsap.quickTo(hoverContainer, "x", { duration: 0.6, ease: "power3" });
let setY = gsap.quickTo(hoverContainer, "y", { duration: 0.6, ease: "power3" });

const align = e => {
  setX(e.clientX);
  setY(e.clientY);
};

const scaleIn = gsap.to(hoverContainer, {
    scale: 1,
    ease: "power2.out",
    paused: true,
    onReverseComplete: () => document.removeEventListener("mousemove", align)
});

document.querySelectorAll('.hover-content').forEach((el, index) => {
  el.addEventListener('mouseenter', (e) => {
    document.addEventListener("mousemove", align);
    scaleIn.play();
    align(e);

    gsap.to(imageContainer, {
      y: -index * 338,
      duration: 0.4,
      ease: "power2.inOut"
    });
  });

  el.addEventListener('mouseleave', () => {
    scaleIn.reverse();
  });
});