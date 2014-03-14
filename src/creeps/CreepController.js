var util = require('./../Utility');
var Controller = require('./Controller');
var Chat = require('./../Chat');

function CreepController(tileMap, creepMap, creep) {
    this.tileMap = tileMap;
    this.creepMap = creepMap;
    this.character = creep;
    this.aggroed = false;
}

CreepController.prototype = new Controller();

util.extend(CreepController, {
    /**
     * Checks to see if the creep is adjacent to the hero
     * @returns {*}
     */
    isAdjacentToHero: function() {
        var ourLoc = this.getCharacter().getLocation();
        var theirLoc = this.creepMap.getHero().getLocation();
        if (!ourLoc || !theirLoc) {
            console.warn("something wrong here!");
        }
        return ourLoc && theirLoc && ourLoc.isAdjacentTo(theirLoc);
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

        console.log("creep trying to hit");
        if(this.getCharacter().getStats().resolveHit(target.getStats())) {
            var dmg = this.getCharacter().getStats().resolveDamage(target.getStats());
            target.applyDamage(dmg, this.getCharacter().getRGB());
        } else {
            Chat.log(this.getCharacter().getName() + " misses you");
        }

    },
    attackHero: function() {
        if (!this.isAdjacentToHero()) {
            throw "Tried to attack hero but not adjacent!";
        }
        var dirToHero = this.getCharacter().getLocation().directionTo(this.getCreepMap().getHero().getLocation());
        this.attack(dirToHero);
    },
    aggroHero: function() {
        var ourLoc = this.getCharacter().getLocation();
        var theirLoc = this.creepMap.getHero().getLocation();
        if (!ourLoc || !theirLoc) {
            console.warn("something wrong here!");
        }
        var sees = ourLoc && theirLoc && ourLoc.distanceSquaredTo(theirLoc) <= this.getCharacter().getRadiusSquared();
        if (sees && !this.getCharacter().isAggroed()) {
            // once we see the hero, don't stop chasing till he's dead!
            Chat.warn(this.getCharacter().getName() + " sees you!");
            this.getCharacter().setAggro(true);
            var neighbors = this.getCreepsInRadiusSquared();
            for (var i = 0; i < neighbors.length; i++) {
                if (!this.getCharacter().getRGB().mask(neighbors[i].getRGB()).isBlack()) {
                    neighbors[i].setAggro(true);
                }
            }
        }
        return this.getCharacter().isAggroed();
    }
});

module.exports = CreepController;
