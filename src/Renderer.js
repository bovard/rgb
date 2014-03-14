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
	this.context.font = Renderer.FONT;
	// Get loc in canvas space
	canvasLoc = toCanvasSpace(loc, this.centerLoc);
	var txt = entity.getRepr();
	var txtWidth = this.context.measureText(txt).width;
	var txtHeight = parseInt(Renderer.FONT) * .5; // approx height
	this.context.fillText(txt,
		canvasLoc.x - txtWidth/2, 
		canvasLoc.y + txtHeight/2);
}

// Draws HUD for hero
function drawHud(hero) {
	this.context.font = Renderer.HUD_FONT;
	/********************** Draw health *******************************/
	this.context.fillStyle = Renderer.HUD_HEALTH_COLOR;
	var txtWidth = this.context.measureText(Renderer.HUD_HEALTH_SYM).width;
	var wholeHealthSymbols = parseInt(hero.health / Renderer.HUD_HEALTH_SYM_COUNT);
	var percentage = 
		(hero.health % Renderer.HUD_HEALTH_SYM_COUNT) / Renderer.HUD_HEALTH_SYM_COUNT;
	
	var loc = new Location(Renderer.HUD_OFFSET.x, Renderer.HUD_OFFSET.y);
	for (var i = 0; i < wholeHealthSymbols; i++, loc.x += txtWidth ) {
		drawHudSymbol.call(this, Renderer.HUD_HEALTH_SYM, loc, 1); 
	}
	
	if (percentage > 0) {
		drawHudSymbol.call(this, Renderer.HUD_HEALTH_SYM, loc, percentage);
	}
}

/* Draws a HUD symbol or a left-to-right percentage of a HUD symbol. The percentage 
   allows for the HUD to store more count information in a smaller space. */
function drawHudSymbol(symbol, loc, percentage) {
	var txtWidth = this.context.measureText(symbol).width;
	var txtHeight = parseInt(Renderer.HUD_FONT) * .5; // approx height
	this.context.save();
	this.context.beginPath();
	/* The height of the clipping rects here doesn't matter, just make sure they are
	   tall enough to not clip horizontally. */
	this.context.rect(loc.x - txtWidth/2, loc.y - 5 * txtHeight,
		txtWidth * percentage, 5 * txtHeight);
	this.context.clip();
	this.context.fillText(symbol,
		loc.x - txtWidth/2, 
		loc.y + txtHeight/2);
	this.context.restore();
}

function Renderer(canvas) {
	this.canvas = canvas;
	this.context = canvas.getContext("2d");
	// Determines the game location that the canvas should be centered on
	this.centerLoc = null;
	this.zoomFactor = 2; // 1.1 would be 10% magnification
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
Renderer.FONT = "12px Arial";
Renderer.HUD_OFFSET = new Location(-100,-100);
Renderer.HUD_FONT = "24px Arial";
Renderer.HUD_HEALTH_SYM = "*";
// Each HUD_HEALTH_SYM represents HUD_HEALTH_SYM_COUNT health
Renderer.HUD_HEALTH_SYM_COUNT = 2;
Renderer.HUD_HEALTH_COLOR = "#FF0000";

Renderer.prototype = {
    render: function(tileMap, creepMap, hero, filter) {
		this.context.save();
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
                if (loc.distanceSquaredTo(hero.location) > hero.getVisionRadiusSquared()) {
                    // COMMENT OUT THE continue TO SEE EVERYTHING
                    continue;
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
		
		// Draw HUD
		drawHud.call(this, hero);
		
		this.context.restore();
    }
};

module.exports = Renderer;