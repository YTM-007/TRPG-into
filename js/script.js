let currentIndex = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

setInterval(nextSlide, 3000); // 3秒ごとに切り替え

let lastScrollY = window.pageYOffset;
const header = document.querySelector('.siteHeader');

window.addEventListener('scroll', () => {
  const currentScrollY = window.pageYOffset;

  if (currentScrollY > lastScrollY && currentScrollY > 100) {
    // 下にスクロール → ヘッダーを隠す
    header.classList.add('hide');
  } else {
    // 上にスクロール → ヘッダーを表示
    header.classList.remove('hide');
  }

  lastScrollY = currentScrollY;
});