$(window).on('load', function () {
   $('.hero-slider').slick({
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      adaptiveHeight: true,
      arrows: false,
      autoplay: true,
      autoplayDuration: 2000,
      fade: true
   });
   $('.content-slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.nav-slider',
      swipe: false
   });
   $('.nav-slider').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      asNavFor: '.content-slider',
      dots: false,
      focusOnSelect: true,
      vertical: true,
      swipe: false,
      responsive: [
         {
            breakpoint: 976,
            settings: {
               vertical: false
            }
         }
      ]
   });

   // For smooth animations
   AOS.refresh();
})
$(document).ready(function () {
   // COnfugring charts
   setBarGraph();

   const graph3 = document.getElementById('graph3');
   new Chart(graph3, {
      type: 'line',
      data: {
         labels: ['Per KM', 'Daily', 'Monthly', 'Quarterly', 'Half yearly', 'Yearly'],
         datasets: [
            {
               label: 'Hero NYX',
               data: [0.045, 4.500, 117.000, 351.000, 702.000, 1404.000],
               borderWidth: 1,
               borderColor: '#005ce5',
               backgroundColor: '#005ce5',
            },
            {
               label: 'Sheema Eagle',
               data: [0.045, 4.500, 117.000, 351.000, 702.000, 1404.000],
               borderWidth: 1,
               borderColor: '#005ce5',
               backgroundColor: '#005ce5',
            },
            {
               label: 'Eular',
               data: [0.184, 18.400, 478.400, 1435.200, 2870.400, 5740.800],
               borderWidth: 1,
               borderColor: "#ea2fa6",
               backgroundColor: "#ea2fa6",
            },
            {
               label: 'Rage +',
               data: [0.184, 18.400, 478.400, 1435.200, 2870.400, 5740.800],
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


   // Form Interactions
   $(".form-wrapper.first").click(() => {
      $(".form-wrapper").removeClass("first");
   })

})

// ! ======================================================================
// #region bookapilot form
// getting variable data
var city = setCityValue();
var deliveryType = setDeliveryType();
var vehicle = setVehicle();
var services = setServices();
var products = setProducts();

function setCityValue(radioClick = false) {
   if (radioClick) {
      city = $('input[name=city]').filter(':checked').val();
      $("#cityText").val("");
   } else if ($("#cityText").val() != "") {
      city = $("#cityText").val();
      $('input[name=city]').filter(':checked').prop('checked', false);
   }
}

function setDeliveryType() {
   deliveryType = $('input[name=delivery]').filter(':checked').val();
}

function setVehicle() {
   vehicle = $('input[name=vehicle]').filter(':checked').val();

   // change graph data
   var yData = [];
   if (vehicle === "Hero Nyx") {
      var yData = [10960.0, 25548.0, 5464.0, 0, 0, 0];
   } else if (vehicle === "Eagle") {
      var yData = [10960.0, 25548.0, 0, 5100.0, 0, 0];
   } else if (vehicle === "Rage +") {
      var yData = [10960.0, 25548.0, 0, 0, 13500.0, 0];
   } else if (vehicle === "Eular") {
      var yData = [10960.0, 25548.0, 0, 0, 0, 17600.0];
   } else {
      var yData = [10960.0, 25548.0, 0, 0, 0, 0];
   }

   setBarGraph(yData);
}

function setServices() {
   let temp = [];
   $('.serviceCheckbox:checked').each(function (i) {
      temp[i] = $(this).val();
   });
   services = temp;
}

function setProducts() {
   let temp = [];
   $('.productCheckbox:checked').each(function (i) {
      temp[i] = $(this).val();
   });
   products = temp;
}

function updateUIDisplay() {
   setProducts();

   if (city !== undefined || city !== null || city !== "") {
      $("#showCity").html(`<span class="pill">${city}</span>`);
   }
   if (deliveryType !== undefined || deliveryType !== null || deliveryType !== "") {
      $("#showDeliveryType").html(`<span class="pill">${deliveryType}</span>`);
   }
   if (vehicle !== undefined || vehicle !== null || vehicle !== "") {
      $("#showVehicle").html(`<span class="pill">${vehicle}</span>`);
   }
   if (services.length > 0) {
      $("#showServices").html(``);
      for (var i = 0; i < services.length; i++) {
         $("#showServices").append(`<span class="pill">${services[i]}</span>`);
      }
   }
   if (products.length > 0) {
      $("#showProducts").html(``);
      for (var i = 0; i < products.length; i++) {
         $("#showProducts").append(`<span class="pill">${products[i]}</span>`);
      }
   }
}

function setBarGraph(yData = null) {
   const graph1 = document.getElementById('graph1');

   // check chart status
   let chartStatus = Chart.getChart("graph1"); // <canvas> id
   if (chartStatus != undefined) {
      chartStatus.destroy();
   }

   // plot new graph
   new Chart(graph1, {
      type: 'bar',
      data: {
         labels: ['Petrol 2 Wheeler', 'Dissel 3 Wheeler', 'Hero Nyx', 'Eagle', 'Rage +', 'Eular'],
         datasets: [{
            label: 'Delivery Cost in (₹)',
            data: yData == null ? [10960.0, 25548.0, 0, 0, 0, 0] : yData,
            borderWidth: 1,
            borderColor: ["#005ce5", "#005ce5", "#25d366", "#25d366", "#25d366", "#25d366"],
            backgroundColor: ["#005ce5", "#005ce5", "#25d366", "#25d366", "#25d366", "#25d366"],
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
}

// Multi Step Form
function app() {
   return {
      step: 1,
      bookAPilot: function (e) {
         e.preventDefault();

         // Disabling Button
         var _btn = $("#submitContactFormBtn");
         $(_btn).prop('disabled', 'true');
         $(_btn).css({ 'opacity': '0.2', 'pointer-events': 'none' });

         // Resetting Response Message
         $("#responseText").html("");
         $("#responseText").removeClass("bg-[#00ff000d] text-[#006400] p-5");
         $("#responseText").removeClass("bg-[#ff00000d] text-[#640000] p-5");

         // form data
         var fullName = $("#fullName").val();
         var email = $("#email").val();
         var phoneNumber = $("#phoneNumber").val();

         // validatng inputs
         // #region
         var fullNameError = "";
         var emailError = "";
         var phoneNumberError = "";

         if (fullName === "" || fullName === undefined || fullName === null) {
            fullNameError = "Required!";
         } else if (!(/^[a-zA-Z\s]*$/.test(fullName))) {
            fullNameError = "Name should contain only alphabets";
         } else {
            fullNameError = "";
         }

         if (email === "" || email === undefined || email === null) {
            emailError = "Required!";
         } else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))) {
            emailError = "Invalid email address";
         } else {
            emailError = ""
         }

         if (phoneNumber === "" || phoneNumber === undefined || phoneNumber === null) {
            phoneNumberError = "Required!";
         } else if (!(/^\d{10}$/.test(phoneNumber))) {
            phoneNumberError = "Invalid phone number";
         } else {
            phoneNumberError = "";
         }
         // #endregion

         // print error messages
         $("#fullNameError").html(fullNameError);
         $("#emailError").html(emailError);
         $("#phoneNumberError").html(phoneNumberError);

         // if all errors none
         if (fullNameError === "" && emailError === "" && phoneNumberError === "") {
            // execute success script
            var data = {
               service_id: 'service_ogn6d1f',
               template_id: 'template_j963afs',
               user_id: 'QDGDXQSi1xfkyYI-t',
               template_params: {
                  'from_name': fullName,
                  'contact': phoneNumber,
                  'from_email': email,
                  'city': city,
                  'delivery_type': deliveryType,
                  'vehicle': vehicle,
                  'services': services,
                  'products': products
               }
            };

            $.ajax('https://api.emailjs.com/api/v1.0/email/send', {
               type: 'POST',
               data: JSON.stringify(data),
               contentType: 'application/json'
            }).done(function () {
               // removing diable
               $(_btn).removeAttr('disabled');
               $(_btn).css({ 'opacity': '1', 'pointer-events': 'all' });
               // Success response
               $("#bookAPilotForm").trigger("reset");
               $("#responseText").html("Hurray! We got your message. Our team will reach out to you shortly.");
               $("#responseText").addClass("bg-[#00ff000d] text-[#006400] p-5");
            }).fail(function (error) {
               // removing diable
               $(_btn).removeAttr('disabled');
               $(_btn).css({ 'opacity': '1', 'pointer-events': 'all' });
               // Error response
               $("#bookAPilotForm").trigger("reset");
               $("#responseText").html("Oops! Something went wrong. Please try later.");
               $("#responseText").addClass("bg-[#ff00000d] text-[#640000] p-5");
            });

            // make step complete
            this.step = "complete";
         } else {
            // removing diable
            $(_btn).removeAttr('disabled');
            $(_btn).css({ 'opacity': '1', 'pointer-events': 'all' });
         }
      }
   }
}
// #endregion
// ! ======================================================================