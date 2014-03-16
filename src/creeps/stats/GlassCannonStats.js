var CoreStats = require('../CoreStats');

function GlassCannonStats(level) {
    this.str = CoreStats.GlassCannonSeed.str;
    this.agi = CoreStats.GlassCannonSeed.agi;
    this.con = CoreStats.GlassCannonSeed.con;
    this.level = 3;
    this.statGain = CoreStats.GlassCannonGain;
    for (var i = 0; i < level; i++) {
        this.levelUp();
    }
    this.experience = this.getXPForLevel(level);
}

GlassCannonStats.prototype = new CoreStats();

module.exports = GlassCannonStats;