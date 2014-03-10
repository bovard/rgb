var CreepMap = require('../map/CreepMap');

var Level = {
	getTileMap: function() {
		return this.tileMap;
	},
	getCreepMap: function() {
		return this.creepMap;
	}
};

module.exports = Level;