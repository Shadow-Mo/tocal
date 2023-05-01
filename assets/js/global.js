$(window).scroll(function () {
   if ($(this).scrollTop() > 80) {
      $('#header').addClass('scroll');
   } else {
      $('#header').removeClass('scroll');
   }

   if ($(this).scrollTop() < 300) {
      $('#goToTop').addClass('hidden');
   } else {
      $('#goToTop').removeClass('hidden');
   }
});



function goToTop() {
   document.body.scrollTop = 0; // For Safari
   document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
