const nav = document.getElementById("nav");
const toggle = document.getElementById("mobileToggle");
const links = document.getElementById("navLinks");

window.addEventListener("scroll", () => {
  nav.classList.toggle("scrolled", window.scrollY > 40);
});

toggle.addEventListener("click", () => {
  links.classList.toggle("open");
});

links.querySelectorAll("a").forEach(a => {
  a.addEventListener("click", () => links.classList.remove("open"));
});

const observer = new IntersectionObserver(
  entries => entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add("visible");
      observer.unobserve(e.target);
    }
  }),
  { threshold: 0.15 }
);

document.querySelectorAll(".fade-in").forEach(el => observer.observe(el));
