var TileMap = require('../map/TileMap');
var Tile = require('../map/Tile');
var RGB = require('../RGB');

function createLevel() {
    var height = 20;
    var width = 20;
    var tileMap = new TileMap(height, width);
    for (var x = 0; x < width; x++) {
        for (var y = 0; y < height; y++) {
            var rgb = new RGB(
                Math.round(Math.random() * 255),
                Math.round(Math.random() * 255),
                Math.round(Math.random() * 255)
            );
            var tile = new Tile(Tile.FLOOR_TILE, rgb);
            tileMap.addTileAtXY(x, y, tile);
        }
    }
    return tileMap;
}


module.exports = {
    createLevel: createLevel
};