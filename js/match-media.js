document.addEventListener('DOMContentLoaded', function() {
  var mediaQuery = window.matchMedia("screen and (max-width: 600px)");
  mediaQuery.addListener(myFunc);

  function myFunc(mq) {
      if (mq.matches) {
        document.querySelectorAll('.events__card').forEach(function(event) {
          event.classList.add('events__card-active')
        });
        document.querySelector('.events__container').classList.add('event__swiper');
        document.querySelector('.events__list').classList.add('swiper-wrapper');
        document.querySelectorAll('.events__card').forEach(function(addSwiper) {
          addSwiper.classList.add('swiper-slide');
        });
        document.querySelector('.books__swiper-mobile').classList.remove('books__swiper');
        document.querySelector('.books__swiper-wrapper-mobile').classList.remove('swiper-wrapper');
        document.querySelectorAll('.books__card').forEach(function(removeSwiper) {
          removeSwiper.classList.remove('swiper-slide');
        })
      }

      else {
        document.querySelectorAll('.events__card').forEach(function(event) {
          event.classList.remove('events__card-active')
        });
        document.querySelector('.events__container').classList.remove('event__swiper');
        document.querySelector('.events__list').classList.remove('swiper-wrapper');
        document.querySelectorAll('.events__card').forEach(function(addSwiper) {
          addSwiper.classList.remove('swiper-slide');
        })
        document.querySelector('.books__swiper-mobile').classList.add('books__swiper');
        document.querySelector('.books__swiper-wrapper-mobile').classList.add('swiper-wrapper');
        document.querySelectorAll('.books__card').forEach(function(removeSwiper) {
          removeSwiper.classList.add('swiper-slide');
        })
      }
    };
  myFunc(mediaQuery);
})
