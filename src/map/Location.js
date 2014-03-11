var Direction = require('./Direction');

function Location(x, y) {
    this.x = x;
    this.y = y;
}

Location.prototype = {
    isEqualTo: function(location) {
        return this.x && this.y && this.x === location.x && this.y === location.y;
    },
    add: function(direction, times) {
        if (!times) {
            times = 1;
        }
        var x = this.x + times * direction.x;
        var y = this.y + times * direction.y;
        return new Location(x, y);
    },
    distanceSquaredTo: function(location) {
        return Math.pow(this.x - location.x, 2) + Math.pow(this.y - location.y, 2);
    },
    directionTo: function(location) {
        var x = location.x - this.x;
        var y = location.y - this.y;

        // Direction constructor takes care of mapping to scaler direction
        return new Direction(x, y);
    },
    isAdjacentTo: function(location) {
        var x = location.x - this.x;
        var y = location.y - this.y;
        return Math.abs(x) + Math.abs(y) <= 1;
    },
    toString: function() {
        return '[' + this.x + ', ' + this.y + ']';
    }
};

module.exports = Location;