/* Gnome creep. Properties:
   * Difficulty Level: very easy  
   * Attack Range: melee
   * Actions: 1
   * Str/Agi: 2/1
   * Max Health: 5
   * Aggro Radius^2: 4
   * RGB: #FFFFFF
*/

var Creep = require('./Creep');
var util = require('./../Utility');
var RGB = require('./../RGB');
var CoreStats = require('./CoreStats');

function Gnome() {
    this.difficultyLevel = 1;
    this.attackType = Creep.ATTACK_TYPE_MELEE;
    this.numActions = 1;
    this.maxHealth = 5;
    this.aggroRadiusSquared = 4;
    this.rgb = new RGB(255, 255, 255);
    this.stats = new CoreStats(2, 1);
    this.repr = 'g';
}

Gnome.prototype = new Creep();

util.extend(Gnome, {
    getAttackMessage: function() {
		return "The gnome swings its tiny pickaxe at you with unsettling determination."; 
	},
    tryToHit: function(hero) { 
		return this.coreStats.resolveHit(hero.coreStats); 
	},
    doDamage: function(hero) { 
		var damageDealt = this.coreStats.resolveDamage(hero.coreStats);
		hero.takeDamage(damageDealt);
	}
});

module.exports = Gnome;