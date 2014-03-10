var GameObject = {
	getRepr: function() {
		return this.repr;
	},
	getRGB: function(filter) {
		if (!filter) {
			return this.rgb;
		}
		return this.rgb.mask(filter)
	},
}

module.exports = GameObject;