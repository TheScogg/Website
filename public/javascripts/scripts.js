$(document).ready(function () {
    console.log("javascript has been loaded");


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

    $(".thumbnail").hover(function() {
            console.log("hover in")
            $(this).children(".thumbnailOverlay").animate({opacity:'1'});
        },
        function() {
            $(this).children().animate({opacity:'0'});
        });

    $(':submit').on('click', function () {
        var message = "";
        $.ajax({
          url: '/sendMail',
          data: {
              name: 'thescogg@gmail.com',
              email: 'Bjq03dX7xBg6fmpnR2Zg',
              phone: '502-398-3480',
              message: 'hello me'
          },
          method: "POST"
        }).then(function (response) {
          console.log(response);
        }).catch(function (err) {
          console.log(err);
        });
    });
});
