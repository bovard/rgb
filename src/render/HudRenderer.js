/* Draws the game hud. */
var RGB = require('./../RGB');
var Location = require('./../map/Location');

/* orientation: 
   1 - centered
   2 - left-justified
   3 - right-justified 
   addNewLine: if true, incr draw loc.y so that subsequent calls will draw text
               on the next line. */
function renderHudText(txt, color, orientation, addNewLine) {
	// Bump draw loc.y by default
	var incDrawY = addNewLine == undefined ? true : addNewLine; 
	
	// Set font
	this.context.font = HudRenderer.HUD_FONT;
	this.context.fillStyle = color;
	var txtWidth = this.context.measureText(txt).width;
	var txtHeight = HudRenderer.HUD_FONT_HEIGHT;
	var orientedLoc;
	// Center text
	if (orientation === 1) {
		orientedLoc = new Location(this.currDrawLoc.x - txtWidth/2,
								   this.currDrawLoc.y + txtHeight/2);
	}
	// Left-justify text
	else if (orientation === 2) {
		orientedLoc = new Location(
		-this.canvas.width / 2 +
		HudRenderer.HUD_CREEP_HDR_TXT_LEFT_MARGIN,
							       this.currDrawLoc.y + txtHeight/2);
	}
	// Right-justify text
	else if (orientation === 3) {
		orientedLoc = new Location(
			this.canvas.width/2 - txtWidth - HudRenderer.HUD_CREEP_HDR_TXT_RIGHT_MARGIN,
			this.currDrawLoc.y + txtHeight/2);
	} else {
		throw "HudRenderer: renderHudText - unknown orientation parameter.";
	}
	this.context.fillText(txt,
		orientedLoc.x, 
		orientedLoc.y);
	if (incDrawY) {
		this.currDrawLoc.y += txtHeight;
	}
}

function renderCreep(creep, color, isHero) {
    //var creepHeader = creep.getRepr() + ": " + creep.getName() + " - lvl " + creep.getLevel();
	var creepHeader = creep.getRepr() + ": " + creep.getName();
	renderHudText.call(this, creepHeader, color, 2, false);
	var creepLevel = "Level " + creep.getLevel();
	renderHudText.call(this, creepLevel, color, 3);
	/* Add a little bit of vertical buffer for the first bar. Since its following 
	   text it will be a bit smushed otherwise.
	*/
		this.currDrawLoc.y += Math.max(HudRenderer.HUD_BAR_HEIGHT - HudRenderer.HUD_FONT_HEIGHT, 5);
	drawHudBar.call(this, creep.getHealth(), creep.getMaxHealth(), 
		HudRenderer.HUD_HP_BAR_COLOR, HudRenderer.HUD_HP_BAR_COLOR_BKG);
	if (isHero) {
		drawHudBar.call(this, 
			creep.getStats().getXP() - creep.getStats().getXPForLevel(creep.getStats().level), 
			creep.getStats().getXPForNextLevel() - creep.getStats().getXPForLevel(creep.getStats().level), 
			HudRenderer.HUD_XP_BAR_COLOR, HudRenderer.HUD_XP_BAR_COLOR_BKG);
			
		// TODO: draw powerup bar when hooks are in place
		drawHudBar.call(this, 
			creep.getPowerUpCurr(), 
			creep.getPowerUpMax(), 
			HudRenderer.HUD_POWER_BAR_COLOR, HudRenderer.HUD_POWER_BAR_COLOR_BKG);
	}
	this.currDrawLoc.y += HudRenderer.STAT_BUFFER_HEIGHT;
}

function getDifficulty(creepLevel, heroLevel) {
    var difference = creepLevel - heroLevel;
    var rgb;
    if (difference <= -10) {
        rgb = RGB.Grey.toString();
    } else if (difference <= -3) {
        rgb = RGB.Green.toString();
    } else if (difference <= 0) {
        rgb = RGB.White.toString();
    } else if (difference <= 3) {
        rgb = RGB.Orange.toString();
    } else {
        rgb = RGB.Red.toString();
    }
	return rgb;
}

function renderCreepStats(creepList, hero) {
    // render to canvas
    for (i = 0; i < creepList.length; i++) {
        if (!hero.getDimension().getRGB().mask(creepList[i].getRGB()).isBlack()) {
            var rgb = getDifficulty(creepList[i].getLevel(), hero.getLevel());
            renderCreep.call(this, creepList[i], rgb);
        }
    }
}

function renderHeroStatus(hero) {
    renderCreep.call(this, hero, HudRenderer.HUD_HERO_STAT_FONT_COLOR, true);
}

// Draws HUD symbol bars for relevant stats (hp, xp, etc) for an entity
function drawStatSymbolBar(stat, sym, symCount, color) {
	this.context.save();
	
	this.context.font = HudRenderer.HUD_SYM_BAR_FONT;
	this.context.fillStyle = color;
	var txtWidth = this.context.measureText(sym).width;
	var wholeSymbols = parseInt(stat / symCount);
	var percentage = 
		(stat - wholeSymbols * symCount) / symCount;
	var symbolBarWidth = wholeSymbols * txtWidth + txtWidth * percentage; 
	
	var loc = new Location(this.currDrawLoc.x - symbolBarWidth/2, this.currDrawLoc.y);
	for (var i = 0; i < wholeSymbols; i++, loc.x += txtWidth ) {
		drawHudSymbolBar.call(this, sym, loc, 1); 
	}
	
	if (percentage > 0) {
		drawHudSymbolBar.call(this, sym, loc, percentage);
	}
	this.currDrawLoc.y += HudRenderer.HUD_SYM_BAR_FONT_HEIGHT;
	
	this.context.restore();
}

/* Draws a HUD symbol or a left-to-right percentage of a HUD symbol. The percentage 
   allows for the HUD to store more count information in a smaller space. */
function drawHudSymbolBar(symbol, loc, percentage) {
	var txtWidth = this.context.measureText(symbol).width;
	var txtHeight = HudRenderer.HUD_SYM_BAR_FONT_HEIGHT;
	this.context.save();
	this.context.beginPath();
	/* The height of the clipping rects here doesn't matter, just make sure they are
	   tall enough to not clip horizontally. */
	this.context.rect(loc.x - txtWidth/2, loc.y - 5 * txtHeight,
		txtWidth * percentage, 10 * txtHeight);
	this.context.clip();
	this.context.fillText(symbol,
		loc.x - txtWidth/2, 
		loc.y + txtHeight/2);
	this.context.restore();
}

/* Draws a HUD bar for a given dynamic property. */
function drawHudBar(curr, max, color, bkgColor) {
	var percentage = curr/max;
	// Draw bar background (indicative of capacity)
	this.context.fillStyle = bkgColor;
	this.context.fillRect(this.currDrawLoc.x - HudRenderer.HUD_BAR_LENGTH/2, this.currDrawLoc.y - HudRenderer.HUD_BAR_HEIGHT/2, 
		HudRenderer.HUD_BAR_LENGTH, HudRenderer.HUD_BAR_HEIGHT);
	// Draw bar (indicative of current quantity)
	this.context.fillStyle = color;
	this.context.fillRect(this.currDrawLoc.x - HudRenderer.HUD_BAR_LENGTH/2, this.currDrawLoc.y - HudRenderer.HUD_BAR_HEIGHT/2, 
		HudRenderer.HUD_BAR_LENGTH * percentage, HudRenderer.HUD_BAR_HEIGHT);
	// Draw bar number
	this.context.fillStyle = HudRenderer.HUD_BAR_FONT_COLOR;
	this.context.font = HudRenderer.HUD_BAR_FONT;
	var txt = Math.ceil(curr).toString() + "/" + Math.ceil(max).toString();
	var txtWidth = this.context.measureText(txt).width;
	var txtHeight = HudRenderer.HUD_BAR_FONT_HEIGHT;
	this.context.fillText(txt,
		this.currDrawLoc.x - txtWidth/2, 
		this.currDrawLoc.y + txtHeight/2);
	this.currDrawLoc.y += HudRenderer.HUD_BAR_HEIGHT;
}

function HudRenderer(canvas) {
	this.canvas = canvas;
	this.context = canvas.getContext("2d");
	this.zoomFactor = 1.0;
}

HudRenderer.prototype = {
	render: function(hero, creepList) {
		this.context.save();
		
		/* Init draw loc. Draw loc follows a vertical line down the middle of the
		   of the canvas, and logic in renderHudText ensures text is centered based
		   on its unique width. */
		this.currDrawLoc = new Location(0, HudRenderer.STAT_BUFFER_HEIGHT);
		
		// Fill canvas with black background
		this.context.fillStyle = HudRenderer.HUD_COLOR;
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
		
		// Draw HUD Outline
		this.context.strokeStyle = HudRenderer.HUD_OUTLINE_COLOR;
		this.context.lineWidth = HudRenderer.HUD_OUTLINE_WIDTH;
		this.context.strokeRect(0, 0, this.canvas.width, this.canvas.height);
		
		// Center grid at <canvas.width/2, 0>
		this.context.translate(this.canvas.width/2, 0);
		
		// Scale by zoom factor
		this.context.scale(this.zoomFactor,this.zoomFactor);
		
		// Draw HUD elements
		renderHeroStatus.call(this, hero);
		renderCreepStats.call(this, creepList, hero);
		
		this.context.restore();
	}
}

/**** General HUD stuff ****/
HudRenderer.HUD_OUTLINE_COLOR = RGB.White.toString();
HudRenderer.HUD_OUTLINE_WIDTH = 5;
HudRenderer.HUD_COLOR = RGB.Black.toString();
// Vertical space between hero/creep statuses
HudRenderer.STAT_BUFFER_HEIGHT = 10;
/**** End General HUD stuff ****/

/**** HUD text stuff ****/
HudRenderer.HUD_FONT = "14px Comic Sans MS";
HudRenderer.HUD_FONT_HEIGHT = parseInt(HudRenderer.HUD_FONT) * 1.25; // approx height
HudRenderer.HUD_SYM_BAR_FONT = "24px Arial";
HudRenderer.HUD_SYM_BAR_FONT_HEIGHT = parseInt(HudRenderer.HUD_SYM_BAR_FONT) * 1.0; // approx height
HudRenderer.HUD_HERO_STAT_FONT_COLOR = RGB.LightGreen.toString();
HudRenderer.HUD_CREEP_HDR_TXT_LEFT_MARGIN = 20;
HudRenderer.HUD_CREEP_HDR_TXT_RIGHT_MARGIN = HudRenderer.HUD_CREEP_HDR_TXT_LEFT_MARGIN;
/**** End HUD text stuff ****/

/**** HUD bar stuff ****/
// Font
HudRenderer.HUD_BAR_FONT = "12px Comic Sans MS";
HudRenderer.HUD_BAR_FONT_HEIGHT = parseInt(HudRenderer.HUD_BAR_FONT) * 0.80; // approx height
HudRenderer.HUD_BAR_FONT_COLOR = RGB.White.toString();

// Dimensions
HudRenderer.HUD_BAR_HEIGHT = 17;
HudRenderer.HUD_BAR_LENGTH = 150;

// Colors
HudRenderer.HUD_HP_BAR_COLOR = RGB.Red.toString();
HudRenderer.HUD_HP_BAR_COLOR_BKG = RGB.DarkRed.toString();
HudRenderer.HUD_XP_BAR_COLOR = RGB.Gold.toString();
HudRenderer.HUD_XP_BAR_COLOR_BKG = RGB.DarkGold.toString();
HudRenderer.HUD_POWER_BAR_COLOR = RGB.Blue.toString();
HudRenderer.HUD_POWER_BAR_COLOR_BKG = RGB.DarkBlue.toString();
/**** End HUD bar stuff ****/

/**** HUD symbol bar stuff ****/
HudRenderer.HUD_HEALTH_SYM = "=";
// Each HUD_HEALTH_SYM represents HUD_HEALTH_SYM_COUNT health
HudRenderer.HUD_HEALTH_SYM_COUNT = 5;
/**** End HUD symbol bar stuff ****/

module.exports = HudRenderer;