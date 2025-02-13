function navigateTo(page) {
    window.location.href = page;
}

gsap.from(".home", {duration: 1.5, opacity: 0, y: 40, ease: "power2.out"});
gsap.from(".content", {duration: 1, opacity: 0, y: 20, stagger: 0.2, delay: 1});
  
gsap.from(".pro", {duration: 1.5, opacity: 0, y: 40, ease: "power2.out", delay: 0.5});