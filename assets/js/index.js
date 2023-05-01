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
      autoplaySpeed: 1000,
      pauseOnHover: false,
      pauseOnFocus: false,
      pauseOnDotsHover: false
   });

   // Progress
   $('.progress').each(function (i, obj) {
      // getting data change
      const dataChange = $(this).data("change");

      // changing the span element width
      if (dataChange > 0) {
         $($(this)).addClass("positive");
         $($(this).find(".progressChange")).css("width", `${dataChange}%`)
         $($(this).find(".value")).css("left", `calc(100% + ${dataChange - 10}%)`)
      } else {
         $($(this)).addClass("negative");
         $($(this).find(".progressChange")).css("width", `${dataChange * -1}%`)
         $($(this).find(".value")).css("left", `calc(100% - 7%)`)
      }
   });

})