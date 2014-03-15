function Messages(name, messages) {
    this.name = name;
    this.hit = messages.hit; // to be printed when it hits the hero
    this.miss = messages.miss; // to be printed when it misses the hero
    this.alert = messages.alert;  // to be printed when it is alerted to the hero
    this.death = messages.death;
}

Messages.prototype = {
    getHitMessage: function() {
        if (!this.hit) {
            return this.name + " swings at you!"
        }
        return this.hit;
    },
    getMissMessage: function() {
        if (!this.miss) {
            return this.name + " misses you!";
        }
        return this.miss;
    },
    getAlertMessage: function() {
        if (!this.alert) {
            return this.name + " is alerted to your presence";
        }
        return this.alert;
    },
    getDeathMessage: function() {

    },
};

module.exports = Messages;