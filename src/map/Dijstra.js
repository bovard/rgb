
function calculate(dij) {
    // does all the calcs

}


function Dijstra(map, x, y) {
    this.map = map;

    this.moveMap = new Array(time.map.width);
    for (var i = 0; i < this.map.width; i++) {
        this.moveMap[i] = new Array(this.map.height);
    }

    calculate(this);
}

Dijstra.prototype = {
    getNextTile: function(x, y) {
        return [x, y];
    }

};


module.exports = Dijstra;