var ctx = null;
var tileW = 40, tileH = 40;
var mapW = 20, mapH = 20;

var currentSecond = 0, frameCount = 0, framesLastSecond = 0;

var player = new Character();

var keysDown = {
  37: false,
  38: false,
  39: false,
  40: false
};

// Create game map and populate with on/off fills
var gameMap = [];

for (var i = 0; i < mapW * mapH; i++) {
  gameMap.push(Math.round(Math.random()));
}
///////////////////////////////////////////////////

function Character() {
  this.tileFrom = [1,1];
  this.tileTo = [1,1];
  this.timeMoved = 0;
  this.dimensions = [30,30];
  this.position = [45,45];
  this.delayMove = 700;
}

window.onload = function() {
  ctx = document.getElementById('game').getContext('2d');
  requestAnimationFrame(drawGame);
  ctx.font = 'bold 10pt sans-serif';

var rect = document.getElementById('game').getBoundingClientRect();
  console.log(ctx);
};




document.getElementById('game').addEventListener('mousemove', function(e) {
  // console.log('window clicked: X:' + e.clientX + ' Y:' + e.clientY);
})

function drawGame() {
  if(ctx==null) {return;}

  var sec = Math.floor(Date.now()/1000);
  if(sec != currentSecond) {
    currentSecond = sec;
    framesLastSecond = frameCount;
    frameCount = 1;
  } else {
    frameCount++;
  }



   for (var y = 0; y < mapH; y++) {
     for (var x = 0; x < mapW; x++) {
       switch(gameMap[(y*mapW) + x]) {
         case 0:
          ctx.fillStyle = "#999999";
          break;
        default:
          ctx.fillStyle = "#bbbbbb";
       }


       ctx.fillRect(x * tileW, y * tileH, tileW, tileH);
       ctx.fillStyle = "#ff0000";
      //  console.log(y*tileH);
       ctx.fillText(x, x * tileW, (y * tileH) + 20);


     }
   }

   ctx.fillStyle = "#ff0000";
   ctx.fillText("FPS: " + framesLastSecond, 10, 20);


  //  console.log(gameMap);

  //  console.log(gameMap.length);
   requestAnimationFrame(drawGame);

}


//
// var zero = [];
// var one = [];
//
// gameMap.forEach(function (num) {
//   if (num === 0) {
//     zero.push(num);
//   } else {
//
//     one.push(num);
//   }
// });
//
// console.log(zero);
// console.log(one);
