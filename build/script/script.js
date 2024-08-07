new Swiper('.review__slider', {
  loop: true,
  speed: 1000,
  slidesPerView: 1,
  grabCursor: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  breakpoints: {
    888: {
      slidesPerView: 3
    }
  }
});
const nav = document.querySelector('.header__nav'),
      content = document.querySelector('.content'),
      social = document.querySelector('.content .social');
window.addEventListener('scroll', function () {
  return navs();
});

function navs() {
  scrollY > nav.clientHeight ? (nav.classList.add('scrolled'), social.classList.add('scrolled')) : (nav.classList.remove('scrolled'), social.classList.remove('scrolled'));
}

const burger = document.querySelector('.btn-burger'),
      headerNav = document.querySelector('.header__nav-menu');
burger.addEventListener('click', () => {
  burger.classList.toggle('open'), headerNav.classList.toggle('open');
});
document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.request__form');
  const inputs = form.querySelectorAll('input[type="text"], input[type="tel"], input[type="email"]');
  inputs.forEach(input => {
    input.addEventListener('input', function () {
      if (input.value.trim() !== '') {
        input.classList.add('input-filled');
      } else {
        input.classList.remove('input-filled');
      }
    });
  });
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    const nameInput = document.getElementById('nameInput');
    const phoneInput = document.getElementById('phoneInput');
    const emailInput = document.getElementById('emailInput');

    if (!nameInput.value || !phoneInput.value || !emailInput.value) {
      alert('Пожалуйста, заполните все поля формы.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(emailInput.value)) {
      alert('Пожалуйста, введите корректный адрес электронной почты.');
      return;
    }

    alert('Спасибо что выбрали нас! Скоро мы с Вами свяжемся');
    form.reset();
  });
});