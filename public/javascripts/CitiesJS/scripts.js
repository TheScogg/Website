$( window ).on("load", function() {
    var canvas = document.getElementById('game');
    var ctx = canvas.getContext('2d');
    var map = new Map("Scoggytown", 25, 20, "oceanside", canvas, ctx);
    var time;

    var audio = require(['../CitiesJS/sound/audio']);

    var map2 = require(['../CitiesJS/sound/audio'], function(Map){
      // map = new Map("Scoggytown", 25, 20, "oceanside", canvas, ctx);
      var map = new Map("Scoggytown", 25, 20, "oceanside", canvas, ctx);



    });

    //LEARN requirejs
    require(['Human', 'John'], function(Human, John){

        console.log( Human.GET_TYPE() ); // biped
        console.log( Human.NUM_LEGS ); // 2


        var human = new Human('Peter');
        console.log( human.name ); // Peter
        console.log( human.walk() ); // Peter is walking
        console.log( human.getAge() ); // 0


        var john = new John();
        console.log( john.name ); // John
        console.log( john.walk() ); // John is walking quickly
        console.log( john.getAge() ); // 28
        console.log( john.getNumEyes() ); // 2

    });




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
