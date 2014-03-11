/* Core stats for game entities performing actions. */

function CoreStats(str, agi) {
	this.str = str;
	this.agi = agi;
}

CoreStats.prototype = {
	// Resolves whether this entity successfully hits target entity by comparing core stats
	resolveHit: function(targetCoreStats) {
		var chanceToHit = this.agi / targetCoreStats.agi;
		if (Math.random() < chanceToHit) {
			return true;
		} else {
			return false;
		}
	},
	// Resolves how much damage this entity deals to target entity by comparing core stats
	resolveDamage: function(targetCoreStats) {
		var dmg = this.str / 10;
        dmg += (this.str - targetCoreStats.str) / 10;
        //TODO: add variance
        return Math.max(1, dmg);

	}
};

module.exports = CoreStats;