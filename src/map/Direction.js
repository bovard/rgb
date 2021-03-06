function Direction(x, y) {
    var result;
    if (Math.abs(x) + Math.abs(y) > 1) {
         if (Math.abs(x) > Math.abs(y)) {
             if (x * Direction.EAST.x > 0) {
                 result = Direction.EAST;
             } else {
                 result = Direction.WEST;
             }
             y = 0;
         } else {
             if (y * Direction.NORTH.y > 0) {
                 result = Direction.NORTH;
             } else {
                 result = Direction.SOUTH;
             }
             x = 0;
         }
    }
    if (result) {
        this.x = result.x;
        this.y = result.y;
    } else {
        this.x = x;
        this.y = y;
    }
}

Direction.prototype = {
    rotateRight: function() {
        if (this.isEqualTo(Direction.NORTH)) {
            return Direction.EAST;
        }
        if (this.isEqualTo(Direction.EAST)) {
            return Direction.SOUTH;
        }
        if (this.isEqualTo(Direction.SOUTH)) {
            return Direction.WEST
        }
        if (this.isEqualTo(Direction.WEST)) {
            return Direction.NORTH;
        }
    },
    rotateLeft: function() {
        if (this.isEqualTo(Direction.NORTH)) {
            return Direction.WEST;
        }
        if (this.isEqualTo(Direction.EAST)) {
            return Direction.NORTH;
        }
        if (this.isEqualTo(Direction.SOUTH)) {
            return Direction.EAST;
        }
        if (this.isEqualTo(Direction.WEST)) {
            return Direction.SOUTH;
        }
    },
    opposite: function() {
        if (this.isEqualTo(Direction.NORTH)) {
            return Direction.SOUTH;
        }
        if (this.isEqualTo(Direction.EAST)) {
            return Direction.WEST;
        }
        if (this.isEqualTo(Direction.SOUTH)) {
            return Direction.NORTH
        }
        if (this.isEqualTo(Direction.WEST)) {
            return Direction.EAST;
        }
    },
    isEqualTo: function(dir) {
        return this.x === dir.x && this.y === dir.y;
    },
};


Direction.NORTH = new Direction(0, -1);
Direction.EAST = new Direction(1, 0);
Direction.WEST = new Direction(-1, 0);
Direction.SOUTH = new Direction(0, 1);
Direction.NONE = new Direction(0, 0);

Direction.randomDir = function() {
    var random = Math.random();
    if (random < .25) {
        return Direction.NORTH;
    }
    if (random < .50) {
        return Direction.EAST;
    }
    if (random < .75) {
        return Direction.WEST;
    }
    return Direction.SOUTH;
};



module.exports = Direction;