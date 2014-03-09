var CreepMap = require('../map/CreepMap');

var Level = {
	getCreepsAtPosition: function(x, y) {
		return this.creepMap[x][y];
	},
	getTileAtPosition: function(x, y) {
		return this.map.getTileAtPosition[x][y];
	},
	getCreeps: function() {
		return this.creepsLoc;
	}

}