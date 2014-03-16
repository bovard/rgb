var Creep = require("./Creep");
var Messages = require("./Messages");
var RGB = require('../RGB');
var CoreStats = require('./CoreStats');
var FastStats = require('./stats/FastStats');
var SlowStats = require('./stats/SlowStats');
var EasyStats = require('./stats/EasyStats');
var HardStats = require('./stats/EasyStats');


module.exports = {
    getGnome: function(rgb, level) {
        var options = {
            name: 'gnome',
            repr: 'g',
            radiusSquared: 4,
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
    getConstruct: function(rgb, level) {
        var options = {
            name: 'gnomish construct',
            repr: 'c',
            radiusSquared: 8,
            rgb: rgb,

            numActions: .5,
            stats: new SlowStats(),
            messages: new Messages(
                "Gnomish Construct",
                {

                    hit: "The gnomish construct slams its fist into you.",
                    miss: "The gnomish construct wiffs.",
                    alert: "The gnomish construct sounds the alarm and lumbers toward you.",
                    death: "The gnomish construct falls to the ground."

                }
            )
        };

        return new Creep(options);
    },
    getOrc: function(rgb, level) {
        var options = {
            name: 'orc',
            repr: 'o',
            radiusSquared: 9,
            rgb: rgb,

            numActions: 1,
            stats: new CoreStats(level || 1),
            messages: new Messages(
                "Orc",
                {
                    hit: "The orc slashes into with its curved scimitar",
                    miss: "The orc slashes at the air next to your face",
                    alert: "The orc yells, 'Ruuuush' and runs toward you",
                    death: "The orc cries out for its bretheren"
                }
            )
        };

        return new Creep(options);
    },
    getOrcBoss: function(rgb, level) {
        var options = {
            name: 'orc boss',
            repr: 'O',
            radiusSquared: 16,
            rgb: rgb,

            numActions: 1,
            stats: new HardStats(level),
            messages: new Messages(
                "Orc Boss",
                {
                    hit: "The orc boss slams you with its club",
                    miss: "The orc boss misses you!",
                    alert: "The orc boss yells, 'For Gulb!' and races toward you",
                    death: "The orc boss cries out for its bretheren"
                }
            )
        };

        return new Creep(options);
    },
    getOrcHunter: function(rgb, level) {
        var options = {
            name: 'orc hunter',
            repr: 'h',
            radiusSquared: 64,
            rgb: rgb,

            alertRange: 2,
            numActions: 2,
            stats: new FastStats(level),
            messages: new Messages(
                "Orc Hunter",
                {
                    hit: "The orc hunter slips its dagger into your side",
                    miss: "The orc hunter misses you!",
                    alert: "An orc hunter sounds the hunt is on",
                    death: "The orc hunter cries out for its bretheren"
                }
            )
        };

        return new Creep(options);
    },
    getRat: function(rgb, level) {
        var options = {
            name: 'giant rat',
            repr: 'r',
            radiusSquared: 4,
            rgb: rgb,

            numActions: 1,
            stats: new EasyStats(),
            messages: new Messages(
                "Rat",
                {
                    hit: "The rat bites into your flesh with its yellow teeth",
                    miss: "The rat lunges for you but misses!",
                    alert: "The rat squeaks hungrily and closes.",
                    death: "The rat squeaks and dies"
                }
            )
        };

        return new Creep(options);
    },
    getRatKing: function(rgb, level) {
        var options = {
            name: 'giant rat',
            repr: 'r',
            radiusSquared: 25,
            rgb: rgb,

            numActions: 1,
            stats: new HardStats(),
            messages: new Messages(
                "Rat",
                {
                    hit: "The rat king bites into your flesh with its yellow teeth",
                    miss: "The rat king lunges for you but misses!",
                    alert: "The rat king squeaks regally and closes.",
                    death: "The rat king squeaks and dies"
                }
            )
        };

        return new Creep(options);
    }
};
