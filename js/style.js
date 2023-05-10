const swiper = new Swiper(".swiper", {
    loop: true,
    spaceBetween: 40,
    loopedSlides: 3,
    slidesPerView: "auto",
    speed: 8000,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
});

jQuery('a[href^="#"]').on('click', function() {

  var header = jQuery ('header').innerHeight();
  var id = jQuery(this).attr('href');
  var position = 0;
  if ( id != '#') {
     var position = jQuery(id).offset().top - header;
  }
  var position = jQuery(id).offset().top - header;
  jQuery('html,body').animate({
     scrollTop: position
  },
  300);
});