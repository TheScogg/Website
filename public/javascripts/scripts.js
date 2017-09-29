$(document).ready(function () {

    // Automatic Page Scrolling on Link Click
    $( "#introLink" ).on( "click", function() {
        console.log("Intro Link");
        $('html, body').animate({
            scrollTop: $("#intro").offset().top - $(".navbar").height()
        }, 2000);    });

    $("#portfolioLink").on( "click", function() {
        console.log("Portfolio Link");
        $('html, body').animate({
            scrollTop: $("#portfolio").offset().top - $(".navbar").height()
        }, 2000);    });

    $( "#contactLink" ).on( "click", function() {
        console.log("Contact Link");
        $('html, body').animate({
            scrollTop: $("#contact").offset().top - $(".navbar").height()
        }, 2000);    });

    // Overlay project information & link on top of thumbnail
    $(".thumbnail").hover(function() {
            console.log("hover in")
            $(this).children(".thumbnailOverlay").animate({opacity:'1'});
        },
        function() {
            $(this).children(".thumbnailOverlay").animate({opacity:'0'});
        });


    // Contact Me Submission Code


    $('#submit').on('click', function(e) {


        if (document.getElementById("contactForm").checkValidity()) {

          $('.form-overlay').addClass('flexbox');

          $('#confirm').on('click', function() {
            console.log("confirmed click");
            ajaxRequest();
            thankYouAnimation();
            $('.form-overlay').removeClass('flexbox');

          });

          // ***** FIND A WAY TO BREAK THE INCREMENTAL NATURE OF THIS
          $('#cancel').on('click', function() {
            $('.form-overlay').removeClass('flexbox');
          });

        };


        // Change message on left side of page to thank user for message;
        function thankYouAnimation(promise) {
            var contactText = [document.getElementById('contactText').childNodes];
            $(contactText[0][0]).html("Thanks " + document.getElementById('InputName').value.split(' ')[0] + "!");
            $(contactText[0][1]).html("I will be in contact with you shortly.");
            console.log(document.getElementById('InputName').value.split(' '));
        }

        function ajaxRequest() {
            return $.ajax({
            url: '/sendMail',
            data: {
                name: document.getElementById('InputName').value,
                email: document.getElementById('InputEmail').value,
                phone: document.getElementById('InputPhone').value,
                message: document.getElementById('InputMessage').value
            },
            method: "POST",
            success: function(data, status, xhr) {

            }, fail: function() {
                console.log("failed");
            }}).done(function () {
            console.log("Then accessed");
          })
          .catch(function (err) {
            console.log(err);
          });
        };




    });


});
