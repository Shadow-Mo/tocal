$(document).ready(function () {
   $('.hero-slider').slick({
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      adaptiveHeight: true,
      arrows: false,
      autoplay: true,
      autoplayDuration: 2000
   });


   $('.content-slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dots: false,
      asNavFor: '.nav-slider'
   });
   $('.nav-slider').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      asNavFor: '.content-slider',
      dots: false,
      focusOnSelect: true,
      vertical: true,
   });
})