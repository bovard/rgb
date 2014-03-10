var GameObject = require('../GameObject');
var RGB = require('../RGB');

function Tile(repr, rgb) {
	this.repr = repr;
	this.rgb = rgb;
	if (!this.rgb) {
		this.rgb = new RGB(255, 255, 255);
	}

}

Tile.FLOOR_TILE = '□';
Tile.UP_STAIRS = '^';
Tile.DOWN_STAIRS = '/';

Tile.prototype = Object.create(GameObject);

module.exports = Tile;
