var util = require('./../Utility');
var Controller = require('./Controller');
var Chat = require('../Chat');

function HeroController(tileMap, creepMap, hero) {
    this.tileMap = tileMap;
    this.creepMap = creepMap;
    this.character = hero;
}

HeroController.prototype = new Controller();

util.extend(HeroController, {
    /**
     * Attacks whatever is in the given direction
     * @param dir
     */
    attack: function(dir) {
        var loc = this.character.getLocation().add(dir);
        if (this.isEmpty(loc)) {
            throw "Tried to attack an empty square... :("
        }
        var target = this.getCreepMap().getCreepAtLoc(loc);

        if(this.getCharacter().getDimension().getRGB().mask(target.getRGB()).isBlack()) {
            Chat.log("You bump against an entity in another dimension");
        } else if(this.getCharacter().getStats().resolveHit(target.getStats())) {
            var dmg = this.getCharacter().getStats().resolveDamage(target.getStats());
            this.doDamageToCreep(target, dmg);
        } else {
            Chat.debug("You miss " + target.name);
        }

    },
    doDamageToCreep: function(target, dmg) {
        var loc = target.getLocation();
        Chat.log("You hit " + target.name + " for " + Math.round(dmg) + " damage!");
        target.applyDamage(dmg, this.getCharacter().getDimension().getRGB());
        this.character.addPowerUpCount();
        console.log(target.name, target.getHealth());
        if (target.isDead()) {
            console.log("We killed it!");
            this.character.gainXPForKill(target);
            this.getCreepMap().deleteCreepAtLoc(loc);
        }
    },
    moveOrAttack: function(dir) {
        var toMove = this.getCharacter().location.add(dir);
        var creep = this.getCreepMap().getCreepAtLoc(toMove);
        if (!this.getTileMap().getTileAtLoc(toMove)) {
            Chat.warn("You step out into nothingness and feel yourself start to fall");
            this.getCreepMap().removeHero();
            this.getCharacter().kill();
        } else if (!creep) {
            this.character.removePowerUpCount();
            this.getCreepMap().moveHeroToLoc(toMove);
        } else if (creep) {
            this.attack(dir);
        }
    }
});

module.exports = HeroController;