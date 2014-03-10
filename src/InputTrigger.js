/* The idea behind this class is to cleanly tie event codes to game logic. The event codes
   will go into a hash in Game.js and the values will be of type InputTrigger.*/
function InputTrigger(callback, scope) {
	this.callback = callback;
	this.scope = scope;
	this.args = arguments;
}

InputTrigger.prototype = {
	fire: function() {
		this.callback.apply(this.scope, this.args);
	}
}

module.exports = InputTrigger;