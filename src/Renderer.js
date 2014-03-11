/* Renders the game to the canvas. */
var Location = require('./map/Location');

// Transform location to be relative to center & scaled by Renderer.GAME_TO_CANVAS
function toCanvasSpace(location, centerLoc) {
	var relativeLoc = new Location(location.x + -centerLoc.x, location.y + -centerLoc.y); 
	return new Location(relativeLoc.x * Renderer.GAME_TO_CANVAS,
		relativeLoc.y * Renderer.GAME_TO_CANVAS);
}

function Renderer(canvas) {
	this.canvas = canvas;
	this.context = canvas.getContext("2d");
	// Determines the game location that the canvas should be centered on
	this.centerLoc = null;
	this.zoomFactor = 1; // 1.1 would be 10% magnification
}

/* Scale factor going between game coordinates and canvas coordinates 
   i.e. game<x * GAME_TO_CANVAS,y * GAME_TO_CANVAS> = canvas<x,y> 
	
   Basically, this changes how far apart the objects are rendered. We'll want to
   keep this at a number that jives with the object asset size (read: font size).
   !!!IMPORTANT NOTE!!!: Don't use this for zoom! Zoom is accomplished by scaling 
   the canvas context.
*/
Renderer.GAME_TO_CANVAS = 18;

Renderer.prototype = {
    render: function(tileMap, creepMap, filter) {
		this.context.save();
        var hero = creepMap.hero;
		this.centerLoc = hero.getLocation();
		var canvasLoc;
	
		// Fill canvas with black background
		this.context.fillStyle = "#000000";
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
		
		// Center grid at canvas center
		this.context.translate(this.canvas.width/2, this.canvas.height/2);
		
		// Scale by zoom factor
		this.context.scale(this.zoomFactor,this.zoomFactor);
		
		// Calculate left and top canvas margins in order to keep tiles centered in the canvas
		var leftMargin = (this.canvas.width - Renderer.TILE_WIDTH_PX * tileMap.width) / 2;
		if (leftMargin < 0) throw "Renderer.render: canvas width cannot accommodate tileMap width.";
		var topMargin = (this.canvas.height - Renderer.TILE_HEIGHT_PX * tileMap.height) / 2;
		if (topMargin < 0) throw "Renderer.render: canvas height cannot accommodate tileMap height.";
	
		// Iterate through tileMap & creepMap and draw tiles & creeps & player.
		for (var x = 0; x < tileMap.width; x++) {
			for (var y = 0; y < tileMap.height; y++ ) {
                var loc = new Location(x, y);
                if (loc.distanceSquaredTo(hero.location) > hero.visionRadiusSquared) {
                    // COMMENT OUT THE continue TO SEE EVERYTHING
                    //continue;
                }
				// If there is a tile to draw in this location, draw it
				if (tileMap.getTileAtLoc(loc)) {
					this.context.fillStyle = tileMap.getTileAtLoc(loc).getRGB(filter).toString();
					// Get loc in canvas space
					canvasLoc = toCanvasSpace(loc, this.centerLoc);
					this.context.fillText(tileMap.getTileAtLoc(loc).getRepr(),
						canvasLoc.x, 
						canvasLoc.y);
				}
				// If a character or the hero resides in this location, draw it
				if (creepMap.getCreepAtLoc(loc)) {
					// If hero, draw without filter
					this.context.fillStyle = creepMap.heroAtLoc(loc) ?
						creepMap.getCreepAtLoc(loc).getRGB().toString() :
						creepMap.getCreepAtLoc(loc).getRGB(filter).toString();
					// Get loc in canvas space
					canvasLoc = toCanvasSpace(loc, this.centerLoc);
					this.context.fillText(creepMap.getCreepAtLoc(loc).getRepr(),
						canvasLoc.x, 
						canvasLoc.y);
				}
			}
		}
		
		this.context.restore();
    }
};

module.exports = Renderer;