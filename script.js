const swiper = new Swiper('.swiper', {
    loop: true,
    grabCursor: true,
    spaceBetween: 10,
    slidesPerView:5,
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        0: {
          slidesPerView: 4
        },
        768: {
          slidesPerView: 4
        },
        1024: {
          slidesPerView: 4
        }
      }
  });




  