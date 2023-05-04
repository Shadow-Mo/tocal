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