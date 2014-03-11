var Level = require('./Level');

function TestLevel(tileMap, creepMap) {
    this.tileMap = tileMap;
    this.creepMap = creepMap;
}

TestLevel.prototype = Object.create(Level);

module.exports = TestLevel;