document.addEventListener('DOMContentLoaded', function () {
  const swiper = new Swiper('.mySwiper', {
      loop: true,
      autoplay: {
          delay: 1000,
          disableOnInteraction: false,
      },
      navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
      },
      pagination: {
          el: '.swiper-pagination',
          clickable: true,
      },
      slidesPerView: 3,
      spaceBetween: 20,
      breakpoints: {
          0: {
              slidesPerView: 1,
          },
          768: {
              slidesPerView: 2,
          },
          1024: {
              slidesPerView: 3,
          },
      },
      speed: 500,
      mousewheel: {
          invert: false,
          sensitivity: 1,
      },
      grabCursor: true,
  });
});