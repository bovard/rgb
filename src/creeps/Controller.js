function Controller(tileMap, creepMap, character) {
    this.tileMap = tileMap;
    this.creepMap = creepMap;
    this.character = character;
}

Controller.prototype = {
    /**
     * Checks if the tile is empty before moving
     * @param dir direction to move
     * @returns {*}
     */
    canMove: function(dir) {
        return this.isEmpty(this.character.getLocation().add(dir));
    },
    /**
     * Checks to see if you can see the tile before moving
     * @param dir direction to move
     * @returns {boolean|*}
     */
    canSafeMove: function(dir) {
        var loc = this.character.getLocation().add(dir);
        return this.isViewableTile(loc)
            && this.isEmpty(loc)
            && this.character.getLocation().isAdjacentTo(loc);
    },
    /**
     * Returns whether or not the character can 'see' the tile
     * @param loc
     * @returns {boolean}
     */
    isViewableTile: function(loc) {
        var tile = this.tileMap.getTileAtLoc(loc);
        if (!tile) {
            return false;
        }
        return !tile.getRGB(this.character.getRGB()).isBlack();
    },
    /**
     * Returns if the given tile is empty
     * @param loc
     * @returns {boolean}
     */
    isEmpty: function(loc) {
        return !this.creepMap.getCreepAtLoc(loc);
    },
    /**
     * Moves the character in the given direction is possible!
     * @param dir
     */
    move: function(dir) {
        if (!dir) {
            throw "can't move in dir " + dir;
        }
        if (!this.canMove(dir)) {
            throw "Can't move in that dir " + dir;
        }
        this.creepMap.moveCreepToLoc(this.character.getLocation().add(dir), this.character);
    },

    /**
     * Attacks whatever is in the given direction
     * @param dir
     */
    attack: function(dir) {
        throw "Controller attack, implement me!"
    },
    getCharacter: function() {
        return this.character;
    }
};

module.exports = Controller;