var Map = require('./Map');
var Location = require('./Location');


function CoarserMap(map, tileSize) {
    this.width = Math.ceil(map.width/tileSize);
    this.height = Math.ceil(map.height/tileSize);
    this.fineMap = map;
    this.tileSize = tileSize;
    this.map = new Array(this.width);
    for (var i = 0; i < this.width; i++) {
        this.map[i] = new Array(this.height);
    }
}

CoarserMap.prototype = {
    locOnMap: Map.locOnMap,
    projectLocOnMap: Map.projectLocOnMap,
    getValAtLoc: Map.getValAtLoc,
    setValAtLoc: Map.setValAtLoc,
    getCoarseTileLocForMapLoc: function(loc) {
        return new Location(
            Math.floor(loc.x / this.tileSize),
            Math.floor(loc.y / this.tileSize)
        );
    },
    getMapLocCenterFromCoarseMapLoc: function(loc) {
        return new Location(
            Math.floor(loc.x * this.tileSize + this.tileSize / 2),
            Math.floor(loc.y * this.tileSize + this.tileSize / 2)
        );
    }

};



module.exports = CoarserMap;