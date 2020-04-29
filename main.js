document.querySelector(".menu-btn").addEventListener("click", () => {
  document.querySelector(".nav-menu").classList.toggle("show");
});

ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('#carouselExampleIndicators', { delay: 1000 });
ScrollReveal().reveal('.cards-banner-one', { delay: 500 });
ScrollReveal().reveal('.cards-banner-two', { delay: 500 });
ScrollReveal().reveal('#montaña', { delay: 500 });
ScrollReveal().reveal('.esfuerzo', { delay: 500 });

