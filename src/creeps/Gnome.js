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
	Creep.call(this, 
		1, 						 // Difficulty Level
		Creep.ATTACK_TYPE_MELEE, // Attack Range
		1,                       // Actions
		5,                       // Max Health
		4,						 // Aggro Radius^2
		new RGB(255, 255, 255),  // RGB
		new CoreStats(2, 1)      // Core stats
		);
    this.repr = 'g';
}

util.inherit(Gnome, Creep);

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
	},
});

module.exports = Gnome;