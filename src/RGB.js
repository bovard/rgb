

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
    hasBlue: function() {
        return this.blue > 0;
    },
    hasRed: function() {
        return this.red > 0;
    },
    hasGreen: function() {
        return this.green > 0;
    },
	isBlack: function() {
		return this.red === 0 && this.green === 0 && this.blue === 0;
	},
    isNotBlack: function() {
        return !this.isBlack();
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

RGB.Black = new RGB(0, 0, 0);
RGB.Blue = new RGB(0, 0, 255);
RGB.Gold = new RGB(255, 165, 0);
RGB.Grey = new RGB(192, 192, 192);
RGB.Green = new RGB(0, 128, 0);
RGB.LightGreen = new RGB(0, 240, 0);
RGB.Red = new RGB(255, 0, 0);
RGB.White = new RGB(255, 255, 255);
RGB.Orange = new RGB(255, 165, 0);
RGB.DarkGrey = new RGB(84, 84, 84);

module.exports = RGB;