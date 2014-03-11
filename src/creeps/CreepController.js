var util = require('./../Utility');
var Controller = require('./Controller');

function CreepController(tileMap, creepMap, creep) {
    this.tileMap = tileMap;
    this.creepMap = creepMap;
    this.character = creep;
}

CreepController.prototype = new Controller();

util.extend(CreepController, {
    /**
     * Checks to see if the creep is adjacent to the hero
     * @returns {*}
     */
    isAdjacentToHero: function() {
        return this.getCharacter().getLocation().isAdjacentTo(this.creepMap.getHero().getLocation());
    },
    /**
     * Attacks whatever is in the given direction
     * @param dir
     */
    attack: function(dir) {
        var loc = this.getCharacter().getLocation().add(dir);
        if (this.isEmpty(loc)) {
            throw "Tried to attack an empty square... :("
        }
        var target = this.getCreepMap().getCreepAtLoc(loc);

        if(this.getCharacter().getStats().resolveHit(target.getStats())) {
            var dmg = this.getCharacter().getStats().resolveDamage(target.getStats());
            target.applyDamage(dmg);
        }

    },
    attackHero: function() {
        if (!this.isAdjacentToHero()) {
            throw "Tried to attack hero but not adjacent!";
        }
        var dirToHero = this.getCharacter().getLocation().directionTo(this.getCreepMap().getHero().getLocation());
        this.attack(dirToHero);
    }
});

module.exports = CreepController;
