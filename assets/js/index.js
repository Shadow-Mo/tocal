$(document).ready(function () {
   // fluids
   const pinkFluid = $(".fluid.pink");
   const blueFluid = $(".fluid.blue");

   pinkFluid.css({
      "top": Math.floor(Math.random() * (50 - 0 + 1) + 0) + "%",
      "left": Math.floor(Math.random() * (50 - 0 + 1) + 0) + "%",
   })
   blueFluid.css({
      "top": Math.floor(Math.random() * (100 - 50 + 1) + 50) + "%",
      "left": Math.floor(Math.random() * (100 - 50 + 1) + 50) + "%",
   })
   setInterval(() => {
      pinkFluid.css({
         "top": Math.floor(Math.random() * (50 - 0 + 1) + 0) + "%",
         "left": Math.floor(Math.random() * (50 - 0 + 1) + 0) + "%",
      })
      blueFluid.css({
         "top": Math.floor(Math.random() * (100 - 50 + 1) + 50) + "%",
         "left": Math.floor(Math.random() * (100 - 50 + 1) + 50) + "%",
      })
   }, 3000);
   // fluid ends



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
   var scrollOffset1 = 300;
   $(window).scroll(function () {
      // checking scroll position
      if (($(window).scrollTop() + $(window).height() - scrollOffset1) > $("#whyUs").position().top) {
         $('.progress').each(function (i, obj) {
            // getting data change
            const dataChange = $(this).data("change");
            // changing the span element width
            if (dataChange > 0) {
               $($(this)).addClass("positive");
               $($(this).find(".progressChange")).css("width", `${dataChange}%`)
               $($(this).find(".value")).css("left", `calc(100% + ${dataChange - (dataChange > 50 ? 30 : 10)}%)`)
            } else {
               $($(this)).addClass("negative");
               $($(this).find(".progressChange")).css("width", `${dataChange * -1}%`)
               $($(this).find(".value")).css("left", `calc(100% - 7%)`)
            }

         });
      }
   });


})