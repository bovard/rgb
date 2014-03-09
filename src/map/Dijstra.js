/* Runs Dijkstra to compute moveMap. Each value in moveMap is one of the following offsets 
   indicating shortest direction to startLoc: [0,1], [0,-1], [1,0], [-1,0]. */
function calculate(dij) {
    /* Init open list with start loc & mark a [0,0] on movemap at hero loc 
	   representing start location. */
	var open = [];
	open.push(dij.startLoc);
	dij.moveMap[dij.startLoc[0]][dij.startLoc[1]] = [0,0];
	
	/* While open is not empty, take out the first loc in the list, expand it, 
	   and add expanded locs to end of list. Once open is empty, moveMap should be 
	   initialized. */
	while (open.length) {
		var curr = open.shift();
		var expanded = expand(curr, dij.map, dij.moveMap);
		open = open.concat(expanded);
	}
}

/* Finds all non-diagonal adjacent locs that are 1) unexplored in move map and 
   2) have a corresponding tile in map. */
function expand(loc, map, moveMap) {
	var expanded = [];
	var offsets = [[0,1],[0,-1],[1,0],[-1,0]];
	var newLoc;
	
	for (var i = 0; i < 4; i++) {
		// newLoc = loc + offset
		newLoc = [loc[0] + offsets[i][0], loc[1] + offsets[i][1]];
		// Is unexplored and has tile?
		if (!moveMap[newLoc[0]][newLoc[1]] && !!map.getTileAtLoc(newLoc[0], newLoc[1])) {
			// set moveMap[newLoc] = reflected offset (offset * -1)
			moveMap[newLoc[0]][newLoc[1]] = [offsets[i][0] * -1, offsets[i][1] * -1];
			// add newLoc to expanded
			expanded.push(newLoc);
		}
	}
	
	return expanded;
}


function Dijstra(map, x, y) {
    this.map = map;
	this.startLoc = [x,y];
    this.moveMap = new Array(this.map.width);
	
    for (var i = 0; i < this.map.width; i++) {
        this.moveMap[i] = new Array(this.map.height);
    }

    calculate(this);
}

Dijstra.prototype = {
    getNextTile: function(x, y) {
		// Return passed in loc + offset in moveMap
        return [x + this.moveMap[x][y][0], y + this.moveMap[x][y][1]];
    }

};

module.exports = Dijstra;