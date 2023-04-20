$(window).scroll(function () {
   if ($(this).scrollTop() > 100) {
      $('#header').addClass('fixed');
   } else {
      $('#header').removeClass('fixed');
   }

   if ($(this).scrollTop() < 300) {
      $('#goToTop').addClass('hidden');
   } else {
      $('#goToTop').removeClass('hidden');
   }
});

const currentURL = location.pathname;
const navLinks = document.querySelectorAll(".navbar #navbarMenu li a");
// const currentURL = location.pathname.replace('/budget-renovations', '');
navLinks.forEach(link => {
   if (link.getAttribute('href').split("/")[1] == currentURL.split("/")[1]) {
      link.classList.toggle("active");
   }
});

function goToTop() {
   document.body.scrollTop = 0; // For Safari
   document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
} 