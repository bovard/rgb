/* Renders the game to the canvas. */

function Renderer(canvas) {
	this.canvas = canvas;
	this.context = canvas.getContext("2d");
}

// Tile width and height in pixels
Renderer.TILE_WIDTH_PX = 30;
Renderer.TILE_HEIGHT_PX = 30;

Renderer.prototype = {
    render: function(tileMap, creepMap, filter) {
		this.context.save();
	
		// Fill canvas with black background
		this.context.fillStyle = "#000000";
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
		
		// Calculate left and top canvas margins in order to keep tiles centered in the canvas
		var leftMargin = (this.canvas.width - Renderer.TILE_WIDTH_PX * tileMap.width) / 2;
		if (leftMargin < 0) throw "Renderer.render: canvas width cannot accommodate tileMap width.";
		var topMargin = (this.canvas.height - Renderer.TILE_HEIGHT_PX * tileMap.height) / 2;
		if (topMargin < 0) throw "Renderer.render: canvas height cannot accommodate tileMap height.";
	
		// Iterate through tileMap & creepMap and draw tiles & creeps & player.
		for (var x = 0; x < tileMap.width; x++) {
			for (var y = 0; y < tileMap.height; y++ ) {
				// If there is a tile to draw in this location, draw it
				if (tileMap.getTileAtLoc(x, y)) {
					this.context.fillStyle = tileMap.getTileAtLoc(x, y).getRGB(filter).toString();
					this.context.fillText(tileMap.getTileAtLoc(x, y).getRepr(), 
						leftMargin + x * Renderer.TILE_WIDTH_PX, 
						topMargin + y * Renderer.TILE_HEIGHT_PX);
				}
				// If a creep or the hero resides in this location, draw it
				if (creepMap.getCreepAtLoc(x, y)) {
                    console.log(creepMap.getCreepAtLoc(x, y));
					// If hero, draw without filter
					this.context.fillStyle = creepMap.heroAtLocation(x, y) ? 
						creepMap.getCreepAtLoc(x, y).getRGB().toString() :
						creepMap.getCreepAtLoc(x, y).getRGB(filter).toString();
					this.context.fillText(creepMap.getCreepAtLoc(x, y).getRepr(), 
						leftMargin + x * Renderer.TILE_WIDTH_PX, 
						topMargin + y * Renderer.TILE_HEIGHT_PX);
				}
			}
		}
		
		this.context.restore();
    }
};

module.exports = Renderer;