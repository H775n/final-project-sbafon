const slides = document.querySelectorAll('.slide');
// when we ues array in js
let currentSlide = 0;
//عمل هاذي الدالة إضهار الكلاسات النشطه  
function showSlide(index) {
  slides.forEach((slide, i) => {
    if (i === index) {
      slide.classList.add('active');
    } else {
      slide.classList.remove('active');
    }
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}
// تستخدم هاذه الداله لتحديد وقت إضهار كل سلايدر
setInterval(nextSlide, 3000);