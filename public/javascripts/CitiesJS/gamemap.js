// define('Map', function() {

  function Map(name, height, width, terrain, canvas) {
    this.name = name;
    this.height = height;
    this.width = width;
    this.terrain = terrain;
    this.ctx = canvas.getContext('2d');
  }

  // Sets Canvas Window to entire viewable area
  Map.prototype.setWindowDimensions = function(width, height, canvas) {
    canvas.width = width;
    canvas.height = height;
    console.log(canvas.width, canvas.height);
  };

  // Returns basic details on Map
  Map.prototype.getDetails = function() {
    return (`Welcome to ${this.name} Height: ${this.height} Width: ${this.width} Terrain Type: ${this.terrain}`);
  };

  // Creates array of tiles and draws them to canvas
  Map.prototype.populate = function(ctx) {
    // Map Array to Hold data for every tile
    var mapArray = {
      terrain : this.terrain,
      tiles : []
    };

    // Pushing procederually generated tiles to mapArray
    for (var i = 0; i < this.width; i++) {
      for (var j = 0; j < this.height; j++) {
        mapArray.tiles.push({
          type: getTileType(),
          building: null,
          coordsX: i,
          coordsY: j
        });
      }
    }

    // Fill in Graphics to canvas from data in mapArray
    for (var i = 0; i < this.width; i++) {
      for (var j = 0; j < this.height; j++) {

        // Gets color pertaining to tile type
        ctx.fillStyle = mapArray.tiles[i + j * this.width].type.img;
        ctx.fillRect(i * tileWidth, j * tileHeight, tileWidth, tileHeight);

        // Print Coordinates for Debugging & Setup
        ctx.fillStyle="#000000";
        ctx.fillText(`${i}, ${j}`, i * tileWidth + 10, j * tileHeight + 20);

      }
    }

    // console.log(mapArray.tiles);

  };

  Map.prototype.draw = function() {

  };


function getTileType() {
  const tileTypes = [{
    type: "grass",
    img: "#00ff00"
  },
    {type: "water",
    img: "#0000ff"}
    ,
    {type: "dirt",
    img: "#f4a460"}
  ];
  return tileTypes[Math.floor(Math.random() * tileTypes.length)];
};

function loadImages() {
  return "HELLO";
}

var imgURLs = [];
var images = [];
var tileWidth = 40;
var tileHeight = 40;

// return Map;
// });
