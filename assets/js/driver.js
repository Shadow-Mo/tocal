document.addEventListener('alpine:init', () => {
   Alpine.store('accordion', {
      tab: 0
   });

   Alpine.data('accordion', (idx) => ({
      init() {
         this.idx = idx;
      },
      idx: -1,
      handleClick() {
         this.$store.accordion.tab = this.$store.accordion.tab === this.idx ? 0 : this.idx;
      },
      handleRotate() {
         return this.$store.accordion.tab === this.idx ? 'rotate-180' : '';
      },
      handleToggle() {
         return this.$store.accordion.tab === this.idx ? `max-height: ${this.$refs.tab.scrollHeight}px` : '';
      }
   }));
})

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