function Direction(x, y) {
    this.x = x;
    this.y = y;
}

Direction.NORTH = new Direction(0, 1);
Direction.EAST = new Direction(0, 1);
Direction.WEST = new Direction(0, -1);
Direction.SOUTH = new Direction(-1, 0);

Direction.prototype = {
    rotateRight: function(dir) {
        if (dir.x === Direction.NORTH.x && dir.y === Direction.NORTH.y) {
            return Direction.EAST;
        }
        if (dir.x === Direction.EAST.x && dir.y === Direction.EAST.y) {
            return Direction.SOUTH;
        }
        if (dir.x === Direction.SOUTH.x && dir.y === Direction.SOUTH.y) {
            return Direction.WEST
        }
        if (dir.x === Direction.WEST.x && dir.y === Direction.WEST.y) {
            return Direction.NORTH;
        }
    },
    rotateLeft: function(dir) {
        if (dir.x === Direction.NORTH.x && dir.y === Direction.NORTH.y) {
            return Direction.WEST;
        }
        if (dir.x === Direction.EAST.x && dir.y === Direction.EAST.y) {
            return Direction.NORTH;
        }
        if (dir.x === Direction.SOUTH.x && dir.y === Direction.SOUTH.y) {
            return Direction.EAST
        }
        if (dir.x === Direction.WEST.x && dir.y === Direction.WEST.y) {
            return Direction.SOUTH;
        }
    }
};

module.exports = Direction;