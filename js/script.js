document.addEventListener('DOMContentLoaded', function() {
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


})
