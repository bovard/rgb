var util = require('./../Utility');
var Controller = require('./Controller');

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

        if(this.getCharacter().getStats().resolveHit(target.getStats())) {
            var dmg = this.getCharacter().getStats().resolveDamage(target.getStats());
            target.applyDamage(dmg);
            console.log(target.name, target.getHealth());
            if (target.isDead()) {
                console.log("We killed it!");
                this.getCharacter().setHealth(this.getCharacter().maxHealth);
                this.getCreepMap().deleteCreepAtLoc(loc);
                this.getCreepMap().moveHeroToLoc(loc);
            }
        }

    },
    moveOrAttack: function(dir) {
        this.getCharacter().actionsPerformed += 1;
        var toMove = this.getCharacter().location.add(dir);
        var creep = this.getCreepMap().getCreepAtLoc(toMove);
        if (!this.getTileMap().getTileAtLoc(toMove)) {
            this.getCharacter().kill();
        } else if (!creep) {
            this.getCreepMap().moveHeroToLoc(toMove);
        } else if (creep) {
            this.attack(dir);
        }
    }
});

module.exports = HeroController;