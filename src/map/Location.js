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
        this.x += times * direction.x;
        this.y += times * direction.y;
    },
    distanceSquaredTo: function(location) {
        return Math.pow(this.x - location.x, 2) + Math.pow(this.y - location.y, 2);
    },
    directionTo: function(location) {
        var x = location.x - this.x;
        var y = location.y - this.y;
        if (x === 0 && y === 0) {
            return Direction.NONE;
        }
        if (Math.abs(x) > Math.abs(y)) {
            if (x * Direction.EAST.x > 0) {
                return Direction.EAST;
            } else {
                return Direction.WEST;
            }
        } else {
            if (y * Direction.NORTH.y > 0) {
                return Direction.NORTH;
            } else {
                return Direction.SOUTH;
            }
        }

    },
    isAdjacentTo: function(location) {
        var x = location.x - this.x;
        var y = location.y - this.y;
        return Math.abs(x) + Math.abs(y) <= 1;
    }
};

module.exports = Location;