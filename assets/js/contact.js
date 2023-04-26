
$(document).ready(function () {
   $("#submitContactFormBtn").click(function (e) {
      e.preventDefault();

      // Disabling Button
      var _btn = $(this);
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
      var message = $("#message").val();

      // validatng inputs
      // #region
      var fullNameError = "";
      var emailError = "";
      var phoneNumberError = "";
      var subjectError = "";
      var messageError = "";

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

      if (message === "" || message === undefined || message === null) {
         messageError = "Required!";
      } else {
         messageError = "";
      }

      // #endregion

      // print error messages
      $("#fullNameError").html(fullNameError);
      $("#emailError").html(emailError);
      $("#phoneNumberError").html(phoneNumberError);
      $("#messageError").html(messageError);

      // if all errors none
      if (fullNameError === "" && emailError === "" && phoneNumberError === "" && messageError === "") {
         // execute success script
         var data = {
            service_id: 'service_ogn6d1f',
            template_id: 'template_siybc87',
            user_id: 'QDGDXQSi1xfkyYI-t',
            template_params: {
               'from_name': fullName,
               'contact': phoneNumber,
               'from_email': email,
               'message': message
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
            $("#contactForm").trigger("reset");
            $("#responseText").html("Hurray! We got your message. Our team will reach out to you shortly.");
            $("#responseText").addClass("bg-[#00ff000d] text-[#006400] p-5");
         }).fail(function (error) {
            // removing diable
            $(_btn).removeAttr('disabled');
            $(_btn).css({ 'opacity': '1', 'pointer-events': 'all' });
            // Error response
            $("#contactForm").trigger("reset");
            $("#responseText").html("Oops! Something went wrong. Please try later.");
            $("#responseText").addClass("bg-[#ff00000d] text-[#640000] p-5");
         });
      } else {
         // removing diable
         $(_btn).removeAttr('disabled');
         $(_btn).css({ 'opacity': '1', 'pointer-events': 'all' });
      }
   })
})