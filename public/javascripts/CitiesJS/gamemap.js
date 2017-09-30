function Map(name, height, width, terrain) {
  this.name = name;
  this.height = height;
  this.width = width;
  this.terrain = terrain;
}

Map.prototype.setWindowDimensions = function(width, height, canvas) {
  canvas.width = width;
  canvas.height = height;
  console.log(canvas.width, canvas.height);
};

Map.prototype.getDetails = function() {
  return (`Welcome to ${this.name} Height: ${this.height} Width: ${this.width} Terrain Type: ${this.terrain}`);
};

Map.prototype.populate = function(ctx) {
  // Map Array to Hold data for every tile
  var mapArray = {
    terrain : this.terrain,
    tiles : []
  };

  mapArray.tiles.push({
    type: "grass",
    building: null,
    coords: [5,5]
  });

  console.log(mapArray.tiles);

  function loadImages() {

  }

  var imgURLs = [];
  var images = [];
  var tileWidth = 40;
  var tileHeight = 40;

  console.log("Populating");
  var tilemap = [];

  for (var i = 0; i < this.width; i++) {
    for (var j = 0; j < this.height; j++) {
      var tile = "#"+((1<<24)*Math.random()|0).toString(16);

      if ((i % 2 === 0 && j % 2 === 0) || (i % 2 !== 0 && j & 2 !== 0)) {
        ctx.fillStyle=tile;

      } else {
        ctx.fillStyle="#000000";
      }

      ctx.fillRect(i * tileWidth, j * tileHeight, tileWidth, tileHeight);

      // Print Coordinates for Debugging & Setup
      ctx.fillStyle="#FFFFFF";
      ctx.fillText(`${i}, ${j}`, i * tileWidth + 10, j * tileHeight + 20);

    }
  }

  // grass.onload = function() {
  //   console.log("Grass Loaded");
  //   ctx.drawImage(grass, 0, 0, 40, 40);
  //   ctx.rect(120,120,100,100);
  //
  // };
  //
  // grass.src = "./images/CitiesJS/grass01.png";

};
