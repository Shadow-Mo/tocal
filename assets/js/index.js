$(document).ready(function () {
   // Initiate Animation
   AOS.init({
      // Global settings:
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
      initClassName: 'aos-init', // class applied after initialization
      animatedClassName: 'aos-animate', // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 120, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 1000, // values from 0 to 3000, with step 50ms
      easing: 'ease', // default easing for AOS animations
      once: true, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
   });

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