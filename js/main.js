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

  var changeScreen = window.matchMedia("screen and (max-width: 1200px)");
  changeScreen.addListener(myFunction);

  function myFunction(change) {
      if (change.matches) {
        var h = hero.offsetHeight;
        var blockHeight = document.getElementById('menu');

        blockHeight = h;
        blockHeight = blockHeight + "px";
        menu.style.height = blockHeight;
      }
    };
    myFunction(changeScreen);

  document.querySelector('#burger').addEventListener('click', function() {
    document.querySelector('#menu').classList.add('is-active')
  });

  document.querySelector('#burgerExit').addEventListener('click', function() {
    document.querySelector('#menu').classList.remove('is-active')
  });

  document.querySelector('.header__top-search-btn').addEventListener('click', function() {
    document.querySelector('.header__top-search-container').classList.add('form-active');
    document.querySelector('.search-btn-svg').style.visibility = 'hidden';
  });

  document.querySelector('.search-exit').addEventListener('click', function() {
    document.querySelector('.header__top-search-container').classList.remove('form-active');
    document.querySelector('.search-btn-svg').style.visibility = 'visible';
  });

  document.querySelectorAll('.header__dropdown').forEach(function (dropdownWrapper) {

    const dropdownBtn = dropdownWrapper.querySelector('.header__dropdown-btn');
    const dropdownContent = dropdownWrapper.querySelector('.header__dropdown-content');
    const dropwownListLinks = dropdownContent.querySelectorAll('.header__dropdown-link');
    const dropdownBtnActive = dropdownWrapper.querySelector('.header__dropdown-btn-active')

    dropdownBtn.addEventListener('click', function () {
      dropdownContent.classList.toggle('dropdown-active');
      this.classList.toggle('header__dropdown-btn-active');
    });

    dropwownListLinks.forEach(function (dropdownLink) {
      dropdownLink.addEventListener('click', function (e) {
        e.stopPropagation();
        dropdownContent.classList.remove('dropdown-active');
        dropdownBtn.classList.remove('header__dropdown-btn-active');
      })
    });

    document.addEventListener('click', function (e) {
      if ( e.target !==  dropdownBtn) {
        dropdownContent.classList.remove('dropdown-active');
      }
    });

    document.addEventListener('click', function (e) {
      if ( e.target !==  dropdownBtn) {
        dropdownBtn.classList.remove('header__dropdown-btn-active');
      }
    });

    document.addEventListener('keydown', function (e) {
      if ( e.key === 'Escape' ) {
        dropdownContent.classList.remove('dropdown-active');
      }
    })

    document.addEventListener('keydown', function (e) {
      if ( e.key === 'Escape' ) {
        dropdownBtn.classList.remove('header__dropdown-btn-active');
      }
    })
  })

  document.querySelectorAll('.catalog__languages-btn').forEach(function(languagesBtn) {
    languagesBtn.addEventListener('click', function(event) {
      const path = event.currentTarget.dataset.path

      document.querySelectorAll('.catalog__tab-content').forEach(function(catalogTabContent) {
        catalogTabContent.classList.remove('tab-content-active')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('tab-content-active')
    })
  });

  document.querySelectorAll('.catalog__languages-btn').forEach(function(languagesBtn) {
    languagesBtn.addEventListener('click', function(event) {

      document.querySelectorAll('.catalog__languages-btn').forEach(function(catalogTabContent) {
        catalogTabContent.classList.remove('catalog__languages-btn-active')
      })
      event.target.classList.add('catalog__languages-btn-active')
    })
  });

  document.querySelectorAll('.artist-tabs-btn').forEach(function(artistTabsBtn) {
    artistTabsBtn.addEventListener('click', function(event) {
      const path = event.currentTarget.dataset.path

      document.querySelectorAll('.tab-content').forEach(function(tabContent) {
        tabContent.classList.remove('tab-content-active')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('tab-content-active')
    })
  });

  document.querySelectorAll('.artist-tabs-btn').forEach(function(artistTabsBtn) {
    artistTabsBtn.addEventListener('click', function(event) {

      document.querySelectorAll('.catalog__item-ul-btn').forEach(function(tabContent) {
        tabContent.classList.remove('artist-active-btn')
      })
      event.target.classList.add('artist-active-btn')
    })
  });

  document.querySelector('.events__btn').addEventListener('click', function() {
    document.querySelectorAll('.events__card').forEach(function(event) {
      event.classList.add('events__card-active')
    })
    document.querySelector('.events__btn').classList.add('events__btn-disabled')
  });

  document.querySelector('.books__checkbox-heading').addEventListener('click', function() {
    document.querySelectorAll('.books__checkbox-label').forEach(function(event) {
      event.classList.toggle('active-checkbox')
    })
    document.querySelector('.books__checkbox-heading').classList.toggle('checkbox-heading-active')
  });

  $(function () {
    $("#accordion-rus").accordion({
      collapsible: true,
      active: 0,
      heightStyle: "content"
    });
  });

  $(function () {
    $("#accordion-italy").accordion({
      collapsible: true,
      active: 0,
      heightStyle: "content"
    });
  });

    const swiperHero = document.querySelector('.hero__swiper');
    const swiperEvent = document.querySelector('.event__swiper');
    const swiperGallery = document.querySelector('.gallery__swiper');
    const swiperBooks = document.querySelector('.books__swiper');
    const swiperProjects = document.querySelector('.projects__swiper');

    new Swiper(swiperHero, {
      // Optional parameters
      loop: true,
      slidesPerView: 1,
      slidesPerGroup: 1,
    });

    new Swiper(swiperEvent, {
      // Optional parameters
      loop: false,
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 15,

      pagination: {
        el: '.events__pagination',
        clickable: true,
      },
    });

    new Swiper(swiperGallery, {
      loop: false,
      autoHeght: false,

      breakpoints: {
        320: {
          slidesPerColumn: 1,
          slidesPerView: 1,
          slidesPerGroup: 1,
          spaceBetween: 20,
          initialSlide: 2,
        },
        // when window width is >= 601px
        601: {
          slidesPerColumn: 2,
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 34,
        },
        // when window width is >= 1201px
        1201: {
          slidesPerColumn: 2,
          slidesPerView: 3,
          slidesPerGroup: 3,
          spaceBetween: 50,
        },
      },

      pagination: {
        el: '.gallery__swiper-pagination',
        type: 'fraction',
      },

      navigation: {
        nextEl: '.gallery__btn-next',
        prevEl: '.gallery__btn-prev',
      },
    });

    new Swiper(swiperBooks, {
      // Optional parameters
      loop: false,
      autoHeght: false,

      breakpoints: {
        601: {
          slidesPerView: 2,
          slidesPerGroup: 1,
          spaceBetween: 34,
        },
        // when window width is >= 993px
        993: {
          slidesPerView: 2,
          slidesPerGroup: 1,
          spaceBetween: 50,
        },
        // when window width is >= 1201px
        1201: {
          slidesPerView: 3,
          slidesPerGroup: 1,
          spaceBetween: 50,
        },
      },

      pagination: {
        el: '.books__swiper-pagination',
        type: 'fraction',
      },

      // Navigation arrows
      navigation: {
        nextEl: '.books__btn-next',
        prevEl: '.books__btn-prev',
      },
    });

    new Swiper(swiperProjects, {
      // Optional parameters
      loop: false,
      autoHeght: false,

      breakpoints: {
        320: {
          slidesPerView: 1,
          slidesPerGroup: 1,
        },

        601: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 34,
        },
        // when window width is >= 993px
        993: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 50,
        },
        // when window width is >= 1201px
        1201: {
          slidesPerView: 3,
          slidesPerGroup: 3,
          spaceBetween: 50,
        },
      },

      // Navigation arrows
      navigation: {
        nextEl: '.projects__btn-next',
        prevEl: '.projects__btn-prev',
      },
    });

    const elements = document.querySelectorAll('.custom-select');
    elements.forEach(el => {
      const choices = new Choices(el, {
        searchEnabled: false,
        itemSelectText: '',
        silent: true,
      })
    });

    document.querySelectorAll('.header__bottom .header__dropdown-content').forEach(el => {
      new SimpleBar(el)
    });

    ymaps.ready(init);
    function init() {
      var myMap = new ymaps.Map("map", {
        center: [55.76306718389715, 37.63223147635113],
        zoom: 14,
        controls: []
      });
      myMap.controls.add('zoomControl');

      var myPlacemark = new ymaps.Placemark([55.75846806898367, 37.60108849999989], {}, {
        iconLayout: 'default#image',
        iconImageHref: 'img/map-placemark.svg',
        iconImageSize: [20, 20],
        iconImageOffset: [-10, 0],
      });
      myMap.geoObjects.add(myPlacemark);
    }

    var selector = document.querySelector("input[type='tel']");
    var im = new Inputmask("+7 (999)-999-99-99");

    im.mask(selector);

    new JustValidate('.contacts__form', {
      rules: {
        name: {
          required: true,
          minLength: 2,
          maxLength: 30
        },
        tel: {
          required: true,
          function: (name, value) => {
            const phone = selector.inputmask.unmaskedvalue()

            return Number(phone) && phone.length === 10
          }
        },
      },
      messages: {
        name: {
          required: 'Заполните поле!',
          minLength: 'Минимум 2 символа.',
          maxLength: 'Максимум 30 символов.'
        },

        tel: {
          required: 'Заполните поле!',
          function: 'Недопустимый формат'
        }
      },
    });

    tippy('#projectsTooltip1', {
      maxWidth: 264,
      content: 'Пример современных тенденций - современная методология разработки',
      duration: 300,
      theme: 'blanchard',
    });
    tippy('#projectsTooltip2', {
      maxWidth: 264,
      content: 'Приятно, граждане, наблюдать, как сделанные на базе аналитики выводы вызывают у вас эмоции',
      duration: 300,
      theme: 'blanchard',
    });
    tippy('#projectsTooltip3', {
      maxWidth: 264,
      content: 'В стремлении повысить качество',
      duration: 300,
      theme: 'blanchard',
    });
})
