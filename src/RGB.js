

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
		var rgbArray = [this.red, this.green, this.blue];
		for (var i = 0; i < rgbArray.length; i++) {
			if (rgbArray[i] < 16) {
				str += "0"
			}
			str += rgbArray[i].toString(16);
		}
		return str;
	},
	toDecimal: function() {
		return this.red + this.green + this.blue;
	},
	isBlack: function() {
		return this.red === 0 && this.green === 0 && this.blue === 0;
	},
    merge: function(rgb) {
        return new RGB(
            Math.max(this.red, rgb.red),
            Math.max(this.green, rgb.green),
            Math.max(this.blue, rgb.blue)
        )
    },
    add: function(rgb) {
        return new RGB(
            Math.min(255, this.red + rgb.red),
            Math.min(255, this.green + rgb.green),
            Math.min(255, this.blue + rgb.blue)
        );
    },
    getUnitVector: function() {
        return new RGB(
            Math.min(1, this.red),
            Math.min(1, this.green),
            Math.min(1, this.blue)
        )

    }

};

RGB.Gold = new RGB(255, 165, 0);
RGB.Grey = new RGB(192, 192, 192);

module.exports = RGB;