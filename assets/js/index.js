$(document).ready(function () {
   // testimonial slider
   $('.testimonial-slider').slick({
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      adaptiveHeight: true,
      prevArrow: $('.testimonial-wrapper .btn-prev'),
      nextArrow: $('.testimonial-wrapper .btn-next')
   });

   // Statistics Sldier
   $('.statistics-slider').slick({
      centerMode: true,
      centerPadding: '60px',
      slidesToShow: 3,
      vertical: true,
      arrows: false,
      dots: false,
      autoplay: true,
      autoplaySpeed: 2000,
   });

})