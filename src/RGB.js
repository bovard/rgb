

function RGB(red, green, blue) {
	this.red = red;
	this.green = green;
	this.blue = blue;
}

RGB.prototype = {
	mask: function(rgb) {
		return new RGB(
			Math.min(this.red, rgb.red),
			Math.min(this.green, rgb.green),
			Math.min(this.blue, rgb.blue)
		);
	},
	toString: function() {
		var str = '#';
		for (var i in [this.red, this.green, this.blue]) {
			if (i < 16) {
				str += "0"
			}
			str += i.toString(16);
		}
	},
	toDecimal: function() {
		return this.red + this.green + this.blue;
	},
	isBlack: function() {
		return this.red === 0 && this.green === 0 && this.blue === 0;
	}
}