var Level = require('./Level');
var TestLevelCreator = require('./TestLevelCreator');


function TestLevel() {
    this.tileMap = TestLevelCreator.createLevel();
    this.creepMap = TestLevelCreator.createTestCreepMap(this.tileMap);
}

TestLevel.prototype = Object.create(Level);

module.exports = TestLevel;