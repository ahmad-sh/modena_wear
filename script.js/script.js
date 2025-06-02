// Scroll Reveal Animation
const reveals = document.querySelectorAll('.reveal');

function revealOnScroll() {
  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = reveals[i].getBoundingClientRect().top;
    const revealPoint = 100; // مقدار النزول قبل التفعيل

    if (elementTop < windowHeight - revealPoint) {
      reveals[i].classList.add('active');
    }
  }
}

window.addEventListener('scroll', revealOnScroll);

// للتأكد من تفعيل العناصر التي تظهر مباشرة بعد تحميل الصفحة
window.addEventListener('load', revealOnScroll);