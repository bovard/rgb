/* Renders the game to the canvas. */
var Location = require('./map/Location');
var Tile = require('./map/Tile');

// Transform location to be relative to center & scaled by Renderer.GAME_TO_CANVAS
function toCanvasSpace(location, centerLoc) {
	var relativeLoc = new Location(location.x + -centerLoc.x, location.y + -centerLoc.y); 
	return new Location(relativeLoc.x * Renderer.GAME_TO_CANVAS,
		relativeLoc.y * Renderer.GAME_TO_CANVAS);
}

// Draws a tile 
function drawTile(tile, loc, filter) {
	this.context.strokeStyle = tile.getRGB(filter).toString();
	this.context.lineWidth = 2;
	// Get loc in canvas space
	canvasLoc = toCanvasSpace(loc, this.centerLoc);
	this.context.strokeRect(canvasLoc.x - Renderer.TILE_WIDTH/2, 
		canvasLoc.y - Renderer.TILE_WIDTH/2,
		Renderer.TILE_WIDTH, 
		Renderer.TILE_WIDTH);
	// If this is upstairs or downstairs, draw the symbol as well
	if (tile.getRepr() !== Tile.FLOOR_TILE) {
		drawSymbol.call(this, tile, loc, filter, false);
	}
} 

/* Draws the appropriate symbol for a:
	- creep
	- hero
	- downstairs tile
	- upstairs tile
*/
function drawSymbol(entity, loc, filter, isHero) {
	// If hero, draw without filter
	this.context.fillStyle = isHero ? entity.getRGB().toString() :
		entity.getRGB(filter).toString();
	// Set font size
	this.context.font = "12px Arial";
	// Get loc in canvas space
	canvasLoc = toCanvasSpace(loc, this.centerLoc);
	var txt = entity.getRepr();
	var txtWidth = this.context.measureText(txt).width;
	var txtHeight = 6; // txtHeight ~ .5 * font size
	this.context.fillText(txt,
		canvasLoc.x - txtWidth/2, 
		canvasLoc.y + txtHeight/2);
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
Renderer.TILE_WIDTH = 15;

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
					drawTile.call(this, tileMap.getTileAtLoc(loc), loc, filter);
				}
				// If a character or the hero resides in this location, draw it
				if (creepMap.getCreepAtLoc(loc)) {
					if (creepMap.heroAtLoc(loc)) {
						drawSymbol.call(this, creepMap.getCreepAtLoc(loc), loc, filter, true);
					} else {
						drawSymbol.call(this, creepMap.getCreepAtLoc(loc), loc, filter, false);
					}
				}
			}
		}
		
		this.context.restore();
    }
};

module.exports = Renderer;