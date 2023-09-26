// ===========================================================
// ! HEADER of the website
// ===========================================================
// Class
class WebsiteFooter extends HTMLElement {
   connectedCallback() {
      this.innerHTML = `
      <footer class="bg-dark-950 text-dark-50">
         <div class="flex flex-col gap-10 lg:gap-14 py-14 lg:py-16">
            <!-- Top Footer -->
            <aside>
               <div class="container">
                  <div class="flex flex-col lg:flex-row lg:justify-between lg:items-center lg:w-full gap-2 md:gap-0">
                     <div>
                        <h3 class="heading text-3xl leading-[120%] font-arimo font-[500]">
                           Don't let your doubts scratch your head.
                        </h3>
                        <h4 class="text-xl">Let us help you.</h4>
                     </div>

                     <div class="flex flex-wrap gap-3 mt-5 lg:mt-0">
                        <a href="./our-services.html#bookAPilot" class="btn btn__secondary btn__secondary--bordered">
                           Book a free Pilot
                        </a>
                        <a href="./contact-us.html" class="btn btn__primary">
                           <span>Send Us a Message</span>
                           <i class="bi bi-arrow-right"></i>
                        </a>
                     </div>
                  </div>
               </div>
            </aside>
            <!-- Main Footer -->
            <aside>
               <div class="container flex flex-col gap-10 lg:flex-row lg:justify-between">
                  <div class="about flex flex-col gap-1 max-w-[600px]">
                     <h4 class="text-lg font-[700]">About Us</h4>
                     <p class="para text-[#d6d6d6] mb-2 text-sm">
                        DbyT Dynamics Mobility Solutions Private Limited is an early-stage startup working with a
                        vision to build a sustainable hyperlocal & last-mile delivery network called TOCAL to help
                        businesses deliver their goods locally & cost-effectively.                     
                     </p>
                     <div class="flex flex-wrap gap-10 gap-y-3 my-2">
                        <p class="para">
                           <span class="font-[400] block text-white">Registered Address:</span>
                           <span class="text-sm text-[#d6d6d6]">
                              Tiruchirappalli Regional Engineering College TREC-STEP, Rec 
                              Complex Thuvakudy, Tiruchirappalli, Tamil Nadu- 620015, India.                           
                           </span>
                        </p>
                        <p class="para">
                           <span class="font-[400] block text-white">Office Address:</span>
                           <span class="text-sm text-[#d6d6d6]">
                              TOCAL,1642/C, A Block, AECS Layout, Singasandra, Bengaluru, Karnataka 560068
                           </span>
                        </p>
                     </div>
                     <div class="flex flex-wrap gap-10 gap-y-3">
                        <p class="para">
                           <span class="font-[400] block text-white">Email:</span>
                           <span class="text-sm text-[#d6d6d6]">
                              <a href="mailto:info@dbytdynamics.com"
                                 class="underline hover:text-primary-700">info@dbytdynamics.com</a>
                           </span>
                        </p>
                        <p class="para">
                           <span class="font-[400] block text-white">Phone:</span>
                           <span class="text-sm text-[#d6d6d6] flex gap-2">
                              <a href="tel:918222042225" class="underline hover:text-primary-700">+91-8222042225</a>
                           </span>
                        </p>
                     </div>
                  </div>
                  <div class="links flex flex-wrap gap-20 lg:gap-32 gap-y-10 w-full lg:justify-center">
                     <ul class="flex flex-col gap-3">
                        <li>
                           <h4 class="text-lg font-[700]">Important Links</h4>
                        </li>
                        <li>
                           <a href="/our-services.html"
                              class="flex items-center gap-2 text-[#d6d6d6] font-[300] hover:text-primary-600 leading-[100%]">
                              <i class="bi bi-caret-right-fill text-primary-600"></i>
                              <span>Our Services</span>
                           </a>
                        </li>
                        <li>
                           <a href="/about-us.html"
                              class="flex items-center gap-2 text-[#d6d6d6] font-[300] hover:text-primary-600 leading-[100%]">
                              <i class="bi bi-caret-right-fill text-primary-600"></i>
                              <span>About Us</span>
                           </a>
                        </li>
                        <li>
                           <a href="/become-a-driver.html"
                              class="flex items-center gap-2 text-[#d6d6d6] font-[300] hover:text-primary-600 leading-[100%]">
                              <i class="bi bi-caret-right-fill text-primary-600"></i>
                              <span>Become a Driver</span>
                           </a>
                        </li>
                        <li>
                           <a href="/contact-us.html"
                              class="flex items-center gap-2 text-[#d6d6d6] font-[300] hover:text-primary-600 leading-[100%]">
                              <i class="bi bi-caret-right-fill text-primary-600"></i>
                              <span>Contact Us</span>
                           </a>
                        </li>
                     </ul>
                     <!--
                     <ul class="flex flex-col gap-3">
                        <li>
                           <h4 class="text-lg font-[700]">Miscellaneous</h4>
                        </li>
                        <li>
                           <a href="#"
                              class="flex items-center gap-2 text-[#d6d6d6] font-[300] hover:text-primary-600 leading-[100%]">
                              <i class="bi bi-caret-right-fill text-primary-600"></i>
                              <span>Terms & Conditions</span>
                           </a>
                        </li>
                        <li>
                           <a href="#"
                              class="flex items-center gap-2 text-[#d6d6d6] font-[300] hover:text-primary-600 leading-[100%]">
                              <i class="bi bi-caret-right-fill text-primary-600"></i>
                              <span>Privacy Policy</span>
                           </a>
                        </li>
                        <li>
                           <a href="#"
                              class="flex items-center gap-2 text-[#d6d6d6] font-[300] hover:text-primary-600 leading-[100%]">
                              <i class="bi bi-caret-right-fill text-primary-600"></i>
                              <span>Become a Driver</span>
                           </a>
                        </li>
                        <li>
                           <a href="#"
                              class="flex items-center gap-2 text-[#d6d6d6] font-[300] hover:text-primary-600 leading-[100%]">
                              <i class="bi bi-caret-right-fill text-primary-600"></i>
                              <span>Insurance Policy</span>
                           </a>
                        </li>
                        <li>
                           <a href="#"
                              class="flex items-center gap-2 text-[#d6d6d6] font-[300] hover:text-primary-600 leading-[100%]">
                              <i class="bi bi-caret-right-fill text-primary-600"></i>
                              <span>Disclaimer</span>
                           </a>
                        </li>
                        <li>
                           <a href="#"
                              class="flex items-center gap-2 text-[#d6d6d6] font-[300] hover:text-primary-600 leading-[100%]">
                              <i class="bi bi-caret-right-fill text-primary-600"></i>
                              <span>Partner Policy</span>
                           </a>
                        </li>
                     </ul>
                     -->
                     <ul class="flex flex-col gap-3">
                        <li>
                           <h4 class="text-lg font-[700]">Follow Us</h4>
                        </li>
                        <li class="flex flex-wrap gap-2">
                           <a href="https://www.linkedin.com/company/dbyt-dynamics-mobility-solutions-private-limited/"
                              class="inline-block w-10 aspect-square rounded-lg bg-dark-700 flex items-center justify-center ease-in duration-300 hover:bg-[#0077b5]"
                              title="Connect with Us" target="_blank">
                              <i class="bi bi-linkedin"></i>
                           </a>
                           <a href="https://www.instagram.com/tocal.dbyt/"
                              class="inline-block w-10 aspect-square rounded-lg bg-dark-700 flex items-center justify-center ease-in duration-300 hover:bg-[#E1306C]"
                              title="Follow Us" target="_blank">
                              <i class="bi bi-instagram"></i>
                           </a>
                           <a href="https://www.facebook.com/tocal.dbyt"
                              class="inline-block w-10 aspect-square rounded-lg bg-dark-700 flex items-center justify-center ease-in duration-300 hover:bg-[#4267B2]"
                              title="Become a Friend" target="_blank">
                              <i class="bi bi-facebook"></i>
                           </a>
                        </li>
                     </ul>
                  </div>
               </div>
            </aside>
         </div>
         <!-- Copyright -->
         <div class="copyright bg-black">
            <div class="container">
               <div class="flex justify-center items-center text-center p-2 text-sm font-[300]">
                  &copy; 2021-23. All rights reserved &nbsp;| &nbsp;DbyT Dynamics Mobility Solutions Private Limited
               </div>
            </div>
         </div>

         <!-- Go to Top -->
         <div href="#" id="goToTop" class="
               hidden flex justify-center items-center 
               w-10 aspect-square p-2 
               bg-black hover:bg-primary-700 rounded-lg cursor-pointer
               fixed right-7 bottom-[5.5rem] z-index-10" onclick="goToTop()" title="Go to top">
            <i class="bi bi-arrow-up"></i>
         </div>

         <!-- WhatsApp -->
         <a href="https://wa.me/918222042225?text=Hi, I want to try your services." class="
               flex justify-center items-center 
               w-14 aspect-square p-2 
               bg-[#25d366] hover:bg-[#35897e] rounded-full cursor-pointer
               fixed right-5 bottom-5 z-index-10" title="Send us a Message">
            <i class="bi bi-whatsapp text-xl"></i>
         </a>
      </footer>
      `;
   }
}
// Rendering
customElements.define('website-footer', WebsiteFooter);