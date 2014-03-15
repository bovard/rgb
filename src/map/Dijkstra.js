var Location = require('./Location');

/* Runs Dijkstra to compute moveMap. Each value in moveMap is one of the following offsets
   indicating shortest direction to startLoc: [0,1], [0,-1], [1,0], [-1,0]. */
function calculate(dij) {
    /* Init open list with start loc & mark a [0,0] on movemap at hero loc 
	   representing start location. */
	var open = [];
	open.push(dij.startLoc);
	dij.moveMap[dij.startLoc.x][dij.startLoc.y] = new Location(0,0);
	
	/* While open is not empty, take out the first loc in the list, expand it, 
	   and add expanded locs to end of list. Once open is empty, moveMap should be 
	   initialized. */
	while (open.length) {
		var curr = open.shift();
		var expanded = expand(curr, dij.map, dij.moveMap, dij.isTraversable, dij.startLoc);
		open = open.concat(expanded);
	}
}

/* Finds all non-diagonal adjacent locs that are 1) unexplored in move map and 
   2) class member isTraversable function returns true. The second condition 
   makes the algorithm much more flexible and allows for definitions of obstacles 
   external to this class. */
function expand(loc, map, moveMap, isTraversable, startLoc) {
	var expanded = [];
	var offsets = [new Location(0,1), new Location(0,-1), new Location(1,0), new Location(-1,0)];
	var newLoc;
	
	for (var i = 0; i < 4; i++) {
		try {
		// newLoc = loc + offset
		newLoc = loc.addLoc(offsets[i]); 
		// Is unexplored and has tile?
		if (!moveMap[newLoc.x][newLoc.y]) {
			if (!map.locOnMap(newLoc)) return;
			/* set moveMap[newLoc] = reflected offset (offset * -1) regardless of 
			   whether it is traversable. This solves the problem of obstacles 
			   that can move (that is, obstacle locs adjacent to traversable locs 
			   will still need SP data). */
			moveMap[newLoc.x][newLoc.y] = new Location(offsets[i].x * -1, offsets[i].y * -1);
			// add newLoc to expanded if newLoc is traversable
			if (isTraversable(map, newLoc, startLoc)) {
				expanded.push(newLoc);
			}			
		}
		} catch(err) {
			var testtest = 1;
		}
	}
	
	return expanded;
}

/* map - tileMap, creepMap, etc, whatever contains obstacle data  
   loc - location to build SP graph to
   isTraversable - has the form
   
   function(map, loc, startLoc) 
   
   and returns true/false whether the specified loc should be considered 
   traversible in the map, given the specified startLoc in case that matters. */
function Dijkstra(map, loc, isTraversable) {
    this.map = map;
	this.isTraversable = isTraversable;
	this.startLoc = loc;
    this.moveMap = new Array(this.map.width);
	
    for (var i = 0; i < this.map.width; i++) {
        this.moveMap[i] = new Array(this.map.height);
    }

    calculate(this);
}

Dijkstra.prototype = {
    getNextTile: function(loc) {
		// Return passed in loc + offset in moveMap
		if (!this.moveMap[loc.x][loc.y]) {
			return;
		}
		return loc.addLoc(this.moveMap[loc.x][loc.y]);
    }

};

module.exports = Dijkstra;