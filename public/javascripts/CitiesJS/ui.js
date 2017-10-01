var canvas = document.getElementById('game');
var ctx = canvas.getContext('2d');

function drawOutlineOnHover(e, map) {
  // 'this' is canvas object. coords is a FUNCTION!
  var coordsFunction = relMouseCoords.bind(this);
  var coords = coordsFunction();
  console.log(coords);
}
