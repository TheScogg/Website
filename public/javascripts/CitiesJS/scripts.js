$( window ).on("load", function() {
    var canvas = document.getElementById('game');
    var ctx = canvas.getContext('2d');
    // var map = new Map("Scoggytown", 25, 20, "oceanside", canvas, ctx);
    var time;

    var audio = require(['../CitiesJS/sound/audio']);




    require(['../CitiesJS/sound/audio'], function(Maps){
        console.log(Maps);
        var map = new Maps("Scoggytown", 25, 20, "oceanside", canvas, ctx);
        map.setWindowDimensions(window.innerWidth, window.innerHeight, canvas);
        map.populate(ctx);
    });

    var Maps = require(['../CitiesJS/sound/audio']);
    console.log(Maps);
    // var map = new Maps("Scoggytown", 25, 20, "oceanside", canvas, ctx);





    function init() {
      // Set dimensions to full screen, perhaps implement windowed & full screen mode as options


      console.log()


      var qqq = canvas.addEventListener("click", drawOutlineOnHover);

      canvas.addEventListener("mousemove", function() {
        var getCoords = drawOutlineOnHover.bind(this);
        getCoords();
      });

    }

    function update() {

            time = new Date();
            // console.log(canvas);
            // console.log(frame);
            requestAnimationFrame(update);
    }

    // init();
    init();
    requestAnimationFrame(update);
});
