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

const currentURL = location.pathname;
const navLinks = document.querySelectorAll(".navbar #navbarMenu li a");
// const currentURL = location.pathname.replace('/budget-renovations', '');
navLinks.forEach(link => {
   let anchorLink = link.getAttribute('href').split("/")[1];
   if (anchorLink == currentURL.split("/")[1] || (anchorLink.includes("index.html") && currentURL.split("/")[1] == undefined)) {
      link.classList.toggle("active");
   }
});

function goToTop() {
   document.body.scrollTop = 0; // For Safari
   document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
} 