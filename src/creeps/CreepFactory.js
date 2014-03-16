var Creep = require("./Creep");
var Messages = require("./Messages");
var RGB = require('../RGB');
var CoreStats = require('./CoreStats');
var FastStats = require('./stats/FastStats');
var SlowStats = require('./stats/SlowStats');
var EasyStats = require('./stats/EasyStats');
var HardStats = require('./stats/HardStats');
var GlassCannonStats = require('./stats/GlassCannonStats');
var LumberingMonstrosityStats = require('./stats/LumberingMonstrosityStats');
var NinjaStats = require('./stats/NinjaStats');


module.exports = {
    getGnome: function(rgb, level) {
        var options = {
            name: 'gnome',
            repr: 'g',
            radiusSquared: 4,
            rgb: rgb,

            numActions: 1,
            stats: new CoreStats(level),
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
            stats: new SlowStats(level),
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
            stats: new CoreStats(level),
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
            stats: new EasyStats(level),
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
            name: 'rat king',
            repr: 'R',
            radiusSquared: 25,
            rgb: rgb,

            numActions: 1,
            stats: new HardStats(level),
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
    },
	getSheDevil: function(rgb, level) {
        var options = {
            name: 'she-devil',
            repr: 'S',
            radiusSquared: 999,
            rgb: rgb,

            alertRange: 0,
            numActions: 2,
            stats: new NinjaStats(level),
            messages: new Messages(
                "she-devil",
                {
                    hit: "The she-devil swipes at you with her poisonous claws",
                    miss: "The she-devil's baneful claws miss you by mere inches",
                    alert: "The she-devil alerts no one...she wants you all to herself",
                    death: "The she-devil saves her last breath for a diatribe as cutting as her claws"
                }
            )
        };

        return new Creep(options);
    },
	getGiant: function(rgb, level) {
        var options = {
            name: 'giant',
            repr: 'G',
            radiusSquared: 45,
            rgb: rgb,

            alertRange: 15,
            numActions: .5,
            stats: new LumberingMonstrosityStats(level),
            messages: new Messages(
                "giant",
                {
                    hit: "The giant's massive fist almost knocks you into another dimension",
                    miss: "The giant stomps the ground next to you with his colossal foot",
                    alert: "The giant rallies surrounding creeps visible from his high vantage point",
                    death: "The giant teeters precariously before crashing to the ground in a deafening cacophony"
                }
            )
        };

        return new Creep(options);
    },
	getBull: function(rgb, level) {
        var options = {
            name: 'bull',
            repr: 'B',
            radiusSquared: 20,
            rgb: rgb,

            alertRange: 10,
            numActions: 3,
            stats: new GlassCannonStats(level),
            messages: new Messages(
                "bull",
                {
                    hit: "The bull puts its enormous bulk to good use and tramples you violenty",
                    miss: "You veer out of the bull's killing path at the last second",
                    alert: "The bull's thundering hooves bring nearby enemies in tow",
                    death: "The bull falls on its side from exhaustion, snorts once, and then dies"
                }
            )
        };

        return new Creep(options);
    }
};
