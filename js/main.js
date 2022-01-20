document.addEventListener('DOMContentLoaded', function () {

  const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    loop: true,
    allowTouchMove: false,
    effect: "fade",
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    speed: 750,
  });


  const checkbox = document.querySelectorAll('.checkbox');
  checkbox.forEach(item => {
    item.addEventListener('click', () => {
      item.classList.toggle('active');
    })
  })

})