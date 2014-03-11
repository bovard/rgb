var GameObject = require('../GameObject');
var RGB = require('../RGB');
var util = require('./../Utility');

function Tile(repr, rgb) {
	this.repr = repr;
	this.rgb = rgb;
	if (!this.rgb) {
		this.rgb = new RGB(255, 255, 255);
	}

}

Tile.FLOOR_TILE = '[_]';
Tile.UP_STAIRS = '^';
Tile.DOWN_STAIRS = '/';

util.inherit(Tile, GameObject);

module.exports = Tile;
