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

function Gnome(rgb) {
    this.name = 'Gnome';
    this.difficultyLevel = 1;
    this.attackType = Creep.ATTACK_TYPE_MELEE;
    this.numActions = 1;
    this.radiusSquared = 4;
    this.rgb = rgb;
    this.stats = new CoreStats(1);
    this.health = this.stats.getMaxHealth();
    this.repr = 'g';
    this.location = null;
    console.log("Making gnome with health", this.stats.getMaxHealth())
}

Gnome.prototype = new Creep();

util.extend(Gnome, {
    getAttackMessage: function() {
		return "The gnome swings its tiny pickaxe at you with unsettling determination."; 
	}
});

module.exports = Gnome;