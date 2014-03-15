var Creep = require("./Creep");
var Messages = require("./Messages");
var RGB = require('../RGB');
var CoreStats = require('./CoreStats');


module.exports = {
    getGnome: function(rgb, level) {
        var options = {
            name: 'gnome',
            repr: 'g',
            radiusSquared: 2,
            rgb: rgb,

            numActions: 1,
            stats: new CoreStats(level || 1),
            messages: new Messages(
                "Gnome",
                {

                    hit: "The gnome swings its tiny pickaxe at you with unsettling determination.",
                    miss: "The gnome slams its tiny pickaxe into the ground next to you.",
                    alert: "The gnome lets forth a shriek and closes to attack.",
                    death: "The gnome curses your to its pagen gods as you smite it"

                }
            )
        };

        return new Creep(options);
    },
    getOrc: function(rgb, level) {
        var options = {
            name: 'orc',
            repr: 'o',
            radiusSquared: 4,
            rgb: rgb,

            numActions: 1,
            stats: new CoreStats(level || 1),
            messages: new Messages(
                "Orc",
                {
                    hit: "The orc slashes into with its curved scimitar",
                    miss: "The orc slashes at the air next to your face",
                    alert: "The orc yells, 'Ruuuush' and runs toward you",
                    death: "The orc cries out for it's bretheren"
                }
            )
        };

        return new Creep(options);
    }
};
