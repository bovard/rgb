/* Renders the game to the canvas. */
var Location = require('./../map/Location');
var Tile = require('./../map/Tile');
var RGB = require('../RGB');

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
	 var rgb = isHero ? entity.getRGB() : entity.getRGB(filter);
    if (rgb.isBlack()) {
        rgb = RGB.DarkGrey
    }
    var color = rgb.toString();
	
	// Get loc in canvas space
	canvasLoc = toCanvasSpace(loc, this.centerLoc);
	var txt = entity.getRepr();
	drawText.call(this, txt, canvasLoc, color);
	// Stroke white outline for visibility on creeps
	// This doesnt look that good, but might bring it back later
	/*if (!isHero) {
		this.context.save();
		this.context.strokeStyle = RGB.White.toString();
		this.context.lineWidth = .5;
		this.context.strokeText(txt,
			canvasLoc.x - txtWidth/2, 
			canvasLoc.y + txtHeight/2);
		this.context.restore();
	}*/
}

/* Why not just compute fontHeight from font? Good question. Apparently formula
   for approximating font height varies by font and possibly zoom, so have to 
   pass it in so that the ideal formula can be used. If it's not passed, 
   assume parseInt(font) * .5, which works great for the game font. */
function drawText(txt, loc, color, font, fontHeight) {
	this.context.font = font == undefined ? Renderer.FONT : font;
	fontHeight = fontHeight == undefined ? Renderer.FONT_HEIGHT : fontHeight;
	this.context.fillStyle = color;
	var txt = txt;
	var txtWidth = this.context.measureText(txt).width;
	var txtHeight = fontHeight; // approx height
	this.context.fillText(txt,
		loc.x - txtWidth/2, 
		loc.y + txtHeight/2);
}

function Renderer(canvas) {
	this.canvas = canvas;
	this.context = canvas.getContext("2d");
	// Determines the game location that the canvas should be centered on
	this.centerLoc = null;
	this.zoomFactor = 2; // 1.1 would be 10% magnification
}

Renderer.prototype = {
    render: function(tileMap, creepMap, hero, filter, score, dungeonLvl, closeQtrDijkstra, dijkstra) {
		this.context.save();
		this.centerLoc = hero.getLocation();
		var canvasLoc;
	
		// Fill canvas with black background
		this.context.fillStyle = Renderer.BACKGROUND_COLOR;
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
		
		// Draw Game Outline
		this.context.strokeStyle = Renderer.OUTLINE_COLOR;
		this.context.lineWidth = Renderer.OUTLINE_WIDTH;
		this.context.strokeRect(0, 0, this.canvas.width, this.canvas.height);
		
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

                var tile = tileMap.getTileAtLoc(loc);
				// If there is a tile to draw in this location, draw it
				if (tile) {
					drawTile.call(this, tileMap.getTileAtLoc(loc), loc, filter);
				}
				// If a character or the hero resides in this location, draw it
                var creep = creepMap.getCreepAtLoc(loc);
				if (creep) {
					if (creepMap.heroAtLoc(loc)) {
						drawSymbol.call(this, creep, loc, filter, true);
					} else {
                        // if the tile is not black or the creep is not black, draw it
                        if (tile.getRGB(hero.getDimension().getRGB()).isNotBlack()
                                || creep.getRGB(hero.getDimension().getRGB()).isNotBlack()) {
                            drawSymbol.call(this, creepMap.getCreepAtLoc(loc), loc, filter, false);
                        }
					}
				}
				
				/* Debug: draw dijkstra move map data. Move symbol = N,S,E,W,
				   U for undefined, and B for BAD if unknown offset. closeQtrDijkstra/dijkstra will
				   be null on first couple renders. */
				/*if (closeQtrDijkstra) {
					var moveSymbol = closeQtrDijkstra.getDijkstraSymbol(loc);
					this.context.save();
					drawText.call(this, moveSymbol, toCanvasSpace(loc, this.centerLoc), "#00FF00", "4px Arial");
					this.context.restore();
				}*/
				// Debug: end draw dijkstra move map data
			}
		}
		
		// Draw game title using current filter
		drawText.call(this, Renderer.GAME_TITLE, 
			new Location(this.canvas.width/(2 * this.zoomFactor) - Renderer.GAME_INFO_BUFFER_SPACE_X,
						 -this.canvas.height/(2 * this.zoomFactor) + Renderer.GAME_INFO_BUFFER_SPACE_Y), 
						 filter.toString(), 
						 Renderer.GAME_TITLE_FONT,
						 Renderer.GAME_TITLE_FONT_HEIGHT);
		// Draw score using current filter
		drawText.call(this, Renderer.SCORE_TXT + score, 
			new Location(-this.canvas.width/(2 * this.zoomFactor) + Renderer.GAME_INFO_BUFFER_SPACE_X,
						 -this.canvas.height/(2 * this.zoomFactor) + Renderer.GAME_INFO_BUFFER_SPACE_Y), 
						 filter.toString(), 
						 Renderer.GAME_SCORE_FONT,
						 Renderer.GAME_SCORE_FONT_HEIGHT);
		// Draw dungeon lvl
		drawText.call(this, Renderer.DUNGEON_LVL_TXT + dungeonLvl, 
			new Location(0,
						 -this.canvas.height/(2 * this.zoomFactor) + Renderer.GAME_INFO_BUFFER_SPACE_Y), 
						 filter.toString(), 
						 Renderer.GAME_SCORE_FONT,
						 Renderer.GAME_SCORE_FONT_HEIGHT);
		
		this.context.restore();
    }
};

/* Scale factor going between game coordinates and canvas coordinates 
   i.e. game<x * GAME_TO_CANVAS,y * GAME_TO_CANVAS> = canvas<x,y> 
	
   Basically, this changes how far apart the objects are rendered. We'll want to
   keep this at a number that jives with the object asset size (read: font size).
   !!!IMPORTANT NOTE!!!: Don't use this for zoom! Zoom is accomplished by scaling 
   the canvas context.
*/
Renderer.OUTLINE_COLOR = RGB.White.toString();
Renderer.OUTLINE_WIDTH = 5;
Renderer.BACKGROUND_COLOR = RGB.Black.toString();
Renderer.GAME_TO_CANVAS = 18;
Renderer.TILE_WIDTH = 15;
Renderer.FONT = "12px Arial";
Renderer.FONT_HEIGHT = parseInt(Renderer.FONT) * .5;
Renderer.GAME_TITLE = "RGB";
Renderer.SCORE_TXT = "Score: ";
Renderer.DUNGEON_LVL_TXT = "Dungeon: ";
Renderer.GAME_INFO_COLOR = RGB.LightGreen.toString();
Renderer.GAME_TITLE_FONT = "24px Impact";
Renderer.GAME_TITLE_FONT_HEIGHT = parseInt(Renderer.GAME_TITLE_FONT) * 1.0;
Renderer.GAME_SCORE_FONT = "12px Impact";
Renderer.GAME_SCORE_FONT_HEIGHT = parseInt(Renderer.GAME_SCORE_FONT) * 1.0;
Renderer.GAME_INFO_BUFFER_SPACE_X = 40;
Renderer.GAME_INFO_BUFFER_SPACE_Y = 20;

module.exports = Renderer;