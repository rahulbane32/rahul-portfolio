// Progressive reveal effects and a small back-to-top control.
const revealTargets = document.querySelectorAll('.section-heading, .project-card, .ticker-section, .about-intro, .fact, .experience-strip, .contact h2, .contact-copy, .email-link');
revealTargets.forEach((element) => element.classList.add('reveal'));
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) { entry.target.classList.add('in-view'); observer.unobserve(entry.target); }
    });
  }, { threshold: 0.12 });
  revealTargets.forEach((element) => observer.observe(element));
} else { revealTargets.forEach((element) => element.classList.add('in-view')); }
const backTop = document.querySelector('.back-top');
const updateBackTop = () => backTop.classList.toggle('visible', window.scrollY > 600);
window.addEventListener('scroll', updateBackTop, { passive: true }); updateBackTop();
backTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
