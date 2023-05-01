// ===========================================================
// ! HEADER of the website
// ===========================================================
// Class
class WebsiteHeader extends HTMLElement {
   connectedCallback() {
      this.innerHTML = `
      <header class="header w-full fixed top-0 z-50" id="header">
         <nav class="navbar relative">
            <div class="container">
               <!-- checkbox -->
               <input type="checkbox" class="hidden" id="navbarToggle">
               <!-- Logo -->
               <div class="flex w-full items-center justify-between">
                  <a href="./index.html">
                     <img src="/assets/img/tocal-logo.svg" alt="Tocal Logo" class="h-8 lg:h-10">
                  </a>
                  <label for="navbarToggle" class="block lg:hidden text-2xl cursor-pointer">
                     <i class="bi bi-list"></i>
                  </label>
               </div>
               <!-- Nav Links -->
               <ul id="navbarMenu" class="
                     hidden 
                     absolute lg:relative top-full left-0 w-full bg-dark-50 lg:bg-transparent
                     opacity-100 
                     lg:flex flex-col gap-5 lg:flex-row items-center xl:gap-10 
                     pt-5 pb-10 lg:py-0 
                     drop-shadow-xl lg:drop-shadow-none whitespace-nowrap font-arimo">
                  <li class="hover:text-primary-700">
                     <a href="./index.html">Home</a>
                  </li>
                  <li>
                     <a href="./about-us.html" class="hover:text-primary-700">About Us</a>
                  </li>
                  <li>
                     <a href="./our-services.html" class="hover:text-primary-700">Our Services</a>
                  </li>
                  <li>
                     <a href="./become-a-driver.html" class="hover:text-primary-700">Become a Driver</a>
                  </li>
                  <li>
                     <a href="./contact-us.html" class="hover:text-primary-700">Contact Us</a>
                  </li>
                  <li>
                     <a href="./our-services.html#bookAPilot" class="btn btn__primary">
                        <span>Book a free Pilot</span>
                        <i class="bi bi-arrow-right"></i>
                     </a>
                  </li>
               </ul>
            </div>
         </nav>
      </header>
      `;
   }
}
// Rendering
customElements.define('website-header', WebsiteHeader);


const currentURL = location.pathname;
const navLinks = document.querySelectorAll(".navbar #navbarMenu li a");
// const currentURL = location.pathname.replace('/budget-renovations', '');
navLinks.forEach(link => {
   let anchorLink = link.getAttribute('href').split("/")[1];
   if (anchorLink == currentURL.split("/")[1] || (anchorLink.includes("index.html") && currentURL.split("/")[1] == "")) {
      link.classList.toggle("active");
   }
});