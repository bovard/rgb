var Experience = require('./Experience');
var Utility = require('../Utility');
/* Core stats for game entities performing actions. */

function CoreStats(level, statGain, seed) {
    this.str = (seed && seed.str) || 10;
    this.agi = (seed && seed.agi) || 10;
    this.con = (seed && seed.con) || 10;
    this.level = 0;
    this.statGain = statGain || {
        str: 1,
        agi: 1,
        con: 1
    };
    for (var i = 0; i < level; i++) {
        this.levelUp();
    }
    this.experience = this.getXPForLevel(level);
}

CoreStats.HeroStatGain = {
    str: 1.2,
    agi: 1.2,
    con: 1.2
};

CoreStats.HeoStatSeed = {
    str: 12,
    agi: 12,
    con: 12
};

CoreStats.EasyGain = {
    str: .8,
    agi: .8,
    con: .8
};

CoreStats.EasySeed = {
    str: 8,
    agi: 8,
    con: 8
};

CoreStats.MediumGain = {
    str: 1.0,
    agi: 1.0,
    con: 1.0
};

CoreStats.MediumSeed = {
    str: 10,
    agi: 10,
    con: 10
};

CoreStats.FastSeed = {
    str: 10,
    agi: 10,
    con: 5
};

CoreStats.FastGain = {
    str: 1,
    agi: 1,
    con:.5
};


CoreStats.SlowSeed = {
    str: 20,
    agi: 10,
    con: 20
};

CoreStats.SlowGain = {
    str: 2,
    agi: .9,
    con: 2
};


CoreStats.HardSeed = {
    str: 12,
    agi: 12,
    con: 12
};

CoreStats.HardGain = {
    str: 1.2,
    agi: 1.2,
    con: 1.2
};

CoreStats.GlassCannonSeed = {
    str: 20,
    agi: 8,
    con: 2
};

CoreStats.GlassCannonGain = {
    str: 1.2,
    agi: 1.2,
    con: 0.2
};

CoreStats.LumberingMonstrositySeed = {
    str: 20,
    agi: 3,
    con: 20
};

CoreStats.LumberingMonstrosityGain = {
    str: 1.2,
    agi: 0.3,
    con: 1.5
};

CoreStats.NinjaSeed = {
    str: 13,
    agi: 30,
    con: 5
};

CoreStats.NinjaGain = {
    str: 1.0,
    agi: 2.0,
    con: 0.1,
};

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
    getMaxHealth: function() {
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
    }
});

module.exports = CoreStats;