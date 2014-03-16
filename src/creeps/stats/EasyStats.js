var CoreStats = require('../CoreStats');

function EasyStats(level) {
    this.str = CoreStats.EasySeed.str;
    this.agi = CoreStats.EasySeed.agi;
    this.con = CoreStats.EasySeed.con;
    this.level = 0;
    this.statGain = CoreStats.EasyGain;
    for (var i = 0; i < level; i++) {
        this.levelUp();
    }
    this.experience = this.getXPForLevel(level);
}

EasyStats.prototype = new CoreStats();

module.exports = EasyStats;