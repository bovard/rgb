function Direction(x, y) {
    this.x = x;
    this.y = y;
    
    
}

Direction.NORTH = new Direction(1, 0);
Direction.EAST = new Direction(0, 1);
Direction.WEST = new Direction(0, -1);
Direction.SOUTH = new Direction(-1, 0);

Direction.prototype = {
    rotateRight: function() {
        
    },
    rotateLeft: function() {
        
    }
}