var GameObject = require('./../GameObject');

var Creep = {
	getHealth: function() {},
	canMove: function(tile) {},
    attackMessage: function() {},
    tryToHit: function(hero) {},
    doDamage: function(hero) {},
    getLocation: function() {},
    setLocation: function(loc) {}
};

module.exports = Creep;