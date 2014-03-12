var Experience = require('./Experience');
var Utility = require('../Utility');
/* Core stats for game entities performing actions. */

function CoreStats(level, statGain, seed) {
    this.str = (seed && seed.str) || 8;
    this.agi = (seed && seed.agi) || 8;
    this.con = (seed && seed.con) || 8;
    this.level = 0;
    this.statGain = statGain || {
        str: 1,
        agi: 1,
        con: 1
    };
    for (var i = 0; i < level; i++) {
        this.levelUp();
    }
    this.experience = 0;
}

CoreStats.HeroStatGain = {
    str: 1.1,
    agi: 1.1,
    con: 1.1
};

CoreStats.HeoStatSeed = {
    str: 10,
    agi: 10,
    con: 10
}

CoreStats.prototype = new Experience();

Utility.extend(CoreStats, {
	// Resolves whether this entity successfully hits target entity by comparing core stats
	resolveHit: function(targetCoreStats) {
		var chanceToHit = Math.atan(this.agi / targetCoreStats.agi) / (Math.PI/2);
        // if agi are equal, 50%
        // never gets to 100%
        // never gets to 0%
        // this.agi / target = .1 => 6% chance
        // this.agi / target = 10 => 93% chance
		return Math.random() < chanceToHit;
	},
	// Resolves how much damage this entity deals to target entity by comparing core stats
	resolveDamage: function(targetCoreStats) {
		var dmg = this.str / 10;
        dmg += (this.str - targetCoreStats.str) / 10;
        // chance for crit!
        for(var i = 0; i < this.agi / 10; i++) {
            if (Math.random() > .99) {
                dmg *= 2;
                break;
            }
        }
        return Math.max(1, dmg);

	},
    getMaxHP: function() {
        return Math.round(this.con);
    },
    levelUp: function() {
        // increase str
        this.str += this.statGain.str;
        if (Math.random() > .95) {
            this.str += this.statGain.str;
        }

        // increase agi
        this.agi += this.statGain.agi;
        if (Math.random() > .95) {
            this.agi += this.statGain.agi;
        }

        // increase con
        this.con += this.statGain.con;
        if (Math.random() > .95) {
            this.con += this.statGain.con;
        }

        this.level++;
    },
    getLevel: function() {
        return this.level;
    }
});

module.exports = CoreStats;