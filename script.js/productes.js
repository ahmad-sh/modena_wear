// انيميشن دخول المنتجات باستخدام ScrollReveal
ScrollReveal().reveal('.product-card', {
  interval: 150,
  distance: '60px',
  origin: 'bottom',
  duration: 800,
  easing: 'ease-in-out',
  reset: false
});

// مودال عرض التفاصيل
const modal = document.getElementById('product-modal');
const modalImg = document.getElementById('modal-img');
const modalTitle = document.getElementById('modal-title');
const modalPrice = document.getElementById('modal-price');
const modalDescription = document.getElementById('modal-description');
const closeBtn = document.querySelector('.close-btn');

document.querySelectorAll('.details-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    const card = e.target.closest('.product-card');
    modal.style.display = 'flex';
    modalImg.src = card.querySelector('img').src;
    modalTitle.textContent = card.querySelector('h3').textContent;
    modalPrice.textContent = card.querySelector('.price').textContent;
    modalDescription.textContent = "وصف مفصل للمنتج هنا. يمكنك تعديل هذا النص ليشمل تفاصيل المنتج الحقيقية.";
  });
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

// إغلاق المودال عند الضغط خارج المحتوى
window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});