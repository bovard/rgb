var Level = require('./Level');
var utils = require('./../Utility');

function TestLevel(tileMap, creepMap, creeps) {
    Level.call(
        this,
        tileMap,
        creepMap,
        creeps
    );
}

utils.inherit(TestLevel, Level);

module.exports = TestLevel;