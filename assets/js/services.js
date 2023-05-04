$(document).ready(function () {
   $('.hero-slider').slick({
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      adaptiveHeight: true,
      arrows: false,
      autoplay: true,
      autoplayDuration: 2000
   });


   $('.content-slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.nav-slider'
   });
   $('.nav-slider').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      asNavFor: '.content-slider',
      dots: false,
      focusOnSelect: true,
      vertical: true,
      responsive: [
         {
            breakpoint: 976,
            settings: {
               vertical: false
            }
         }
      ]
   });



   // COnfugring charts
   const graph1 = document.getElementById('graph1');
   new Chart(graph1, {
      type: 'bar',
      data: {
         labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
         datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            borderWidth: 1,
            borderColor: '#005ce5',
            backgroundColor: '#005ce5',
         }]
      },
      options: {
         responsive: true,
         scales: {
            x: {
               beginAtZero: true,
               grid: {
                  display: false
               }
            },
            y: {
               beginAtZero: true,
               grid: {
                  display: false
               }
            }
         },
         layout: {
            autoPadding: false,
            padding: 0
         },
         plugins: {
            legend: {
               display: false
            }
         }
      },
   });

   const graph3 = document.getElementById('graph3');
   new Chart(graph3, {
      type: 'line',
      data: {
         labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
         datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            borderWidth: 1,
            borderColor: '#005ce5',
            backgroundColor: '#005ce5',
         },
         {
            label: '# of Votes',
            data: [10, 9, 10, 11, 20, 30],
            borderWidth: 1,
            borderColor: "#ea2fa6",
            backgroundColor: "#ea2fa6",
         }]
      },
      options: {
         responsive: true,
         scales: {
            x: {
               beginAtZero: true,
               grid: {
                  display: false
               }
            },
            y: {
               beginAtZero: true,
               grid: {
                  display: false
               }
            }
         },
         layout: {
            autoPadding: false,
            padding: 0
         },
         plugins: {
            legend: {
               display: false
            }
         }
      },
   });
})