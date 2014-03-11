var util = require('./../Utility');
var Controller = require('./Controller');

function CreepController(tileMap, creepMap, creep) {
    Controller.call(
        this,
        tileMap,
        creepMap,
        creep
    );
}

util.inherit(CreepController, Controller);

util.extend(CreepController, {
    /**
     * Checks to see if the creep is adjacent to the hero
     * @returns {*}
     */
    isAdjacentToHero: function() {
        return this.character.getLocation().isAdjacentTo(this.creepMap.getHero().getLocation());
    },
    /**
     * Attacks whatever is in the given direction
     * @param dir
     */
    attack: function(dir) {
        var loc = this.character.getLocation().add(dir);
        if (this.isEmpty(loc)) {
            throw "Tried to attack an empty square... :("
        }
        var target = this.creepMap.getCreepAtLoc(loc);

        if(this.getStats().resolveHit(target.getStats())) {
            var dmg = this.getStats().resolveDamage(this.target.getStats());
            this.target.applyDamage(dmg);
        }

    },
    attackHero: function() {
        if (!this.isAdjacentToHero()) {
            throw "Tried to attack hero but not adjacent!";
        }
        var dirToHero = this.character.getLocation().directionTo(this.creepMap.getHero());
        this.attack(dirToHero);
    }
});

module.exports = CreepController;
