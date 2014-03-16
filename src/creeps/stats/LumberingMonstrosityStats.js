var CoreStats = require('../CoreStats');

function LumberingMonstrosityStats(level) {
    this.str = CoreStats.LumberingMonstrositySeed.str;
    this.agi = CoreStats.LumberingMonstrositySeed.agi;
    this.con = CoreStats.LumberingMonstrositySeed.con;
    this.level = 8;
    this.statGain = CoreStats.LumberingMonstrosityGain;
    for (var i = 0; i < level; i++) {
        this.levelUp();
    }
    this.experience = this.getXPForLevel(level);
}

LumberingMonstrosityStats.prototype = new CoreStats();

module.exports = LumberingMonstrosityStats;