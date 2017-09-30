$( window ).on("load", function() {

    var canvas = document.getElementById('game');
    var ctx = canvas.getContext('2d');
    var map = new Map("Scoggytown", 20, 20, "oceanside", canvas);
    var time;

    //ctx.fillRect(x, y, width, height)


    function init() {
      // Set dimensions to full screen, perhaps implement windowed & full screen mode as options
      map.setWindowDimensions(window.innerWidth, window.innerHeight, canvas);
      map.populate(ctx);

      console.log()



    }

    function update() {
            canvas.addEventListener("click", drawOutlineOnHover, false);

            time = new Date();
            // console.log(canvas);
            // console.log(frame);
            requestAnimationFrame(update);
    }

    // init();
    init();
    requestAnimationFrame(update);


});
