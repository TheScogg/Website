$( window ).on("load", function() {
    var canvas = document.getElementById('game');
    var ctx = canvas.getContext('2d');
    var map = new Map("Scoggytown", 25, 20, "oceanside", canvas, ctx);
    var time;

    //ctx.fillRect(x, y, width, height)


    function init() {
      // Set dimensions to full screen, perhaps implement windowed & full screen mode as options
      map.setWindowDimensions(window.innerWidth, window.innerHeight, canvas);
      map.populate(ctx);

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
