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
    this.name = 'Gnome';
    this.difficultyLevel = 1;
    this.attackType = Creep.ATTACK_TYPE_MELEE;
    this.numActions = 1;
    this.aggroRadiusSquared = 4;
    this.rgb = new RGB(255, 255, 255);
    this.stats = new CoreStats(1);
    this.health = this.stats.getMaxHP();
    this.repr = 'g';
    console.log("Making gnome with health", this.stats.getMaxHP())
}

Gnome.prototype = new Creep();

util.extend(Gnome, {
    getAttackMessage: function() {
		return "The gnome swings its tiny pickaxe at you with unsettling determination."; 
	}
});

module.exports = Gnome;