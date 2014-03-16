var CoreStats = require('../CoreStats');

function FastStats(level) {
    this.str = CoreStats.FastSeed.str;
    this.agi = CoreStats.FastSeed.agi;
    this.con = CoreStats.FastSeed.con;
    this.level = 0;
    this.statGain = CoreStats.FastGain;
    for (var i = 0; i < level; i++) {
        this.levelUp();
    }
    this.experience = this.getXPForLevel(level);
}

FastStats.prototype = new CoreStats();

module.exports = FastStats;