function Experience() {
    this.experience = 0;  // all of the xp a character has gotten
}

Experience.getExperience = function(myLevel, creepLevel) {
    // you get 10 experience per kill of a creep
    // +1 for every level they are above you (no max)
    // -1 for every level they are below you (down to zero)
    return Math.max(0, 10 - (myLevel - creepLevel));
};

Experience.prototype = {
    gainXPForKill: function(target) {
        var xpForNextLevel = this.getXPForNextLevel();
        this.experience += Experience.getExperience(this.getLevel(), target.getLevel());
        if (this.experience >= xpForNextLevel) {
            this.levelUp();
            return true;
        }
        return false;
    },
    getXPForLevel: function(level) {
        return (level) * 50;
    },
    getXPForNextLevel: function() {
        // each level is 50 xp
        return this.getXPForLevel(this.getLevel() + 1);
    },
    getXP: function() {
        return this.experience;
    },
    levelUp: function() { throw "Experience.levelUp abstract called!"},
    getLevel: function() { return this.level; }
};

module.exports = Experience;