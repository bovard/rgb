/* Draws the game hud. */
var RGB = require('./../RGB');
var Location = require('./../map/Location');

function renderHudText(txt, color) {
	// Set font
	this.context.font = HudRenderer.HUD_FONT;
	this.context.fillStyle = color;
	var txtWidth = this.context.measureText(txt).width;
	var txtHeight = HudRenderer.HUD_FONT_HEIGHT;
	this.context.fillText(txt,
		this.currDrawLoc.x - txtWidth/2, 
		this.currDrawLoc.y + txtHeight/2);
	this.currDrawLoc.y += txtHeight;
}

function renderCreep(creep, color, isHero) {
    var creepHeader = creep.getRepr() + ": " + creep.getName() + " - lvl " + creep.getLevel();
	renderHudText.call(this, creepHeader, color);
    //var creepHp = Math.ceil(creep.getHealth()) + " hp ";
	//renderHudText.call(this, creepHp, color);
	//drawStatSymbolBar.call(this, creep.health, HudRenderer.HUD_HEALTH_SYM,
	//		HudRenderer.HUD_HEALTH_SYM_COUNT, color);
	drawHudBar.call(this, creep.getHealth(), creep.getMaxHealth(), 
		HudRenderer.HUD_HP_BAR_COLOR, HudRenderer.HUD_HP_BAR_COLOR_BKG);
	if (isHero) {
		drawHudBar.call(this, 
			creep.getStats().getXP() - creep.getStats().getXPForLevel(creep.getStats().level), 
			creep.getStats().getXPForNextLevel() - creep.getStats().getXPForLevel(creep.getStats().level), 
			HudRenderer.HUD_XP_BAR_COLOR, HudRenderer.HUD_XP_BAR_COLOR_BKG);
			
		// TODO: draw powerup bar when hooks are in place
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
    renderCreep.call(this, hero, HudRenderer.FONT_COLOR_HERO_STAT, true);
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
	this.zoomFactor = 1.3;
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

HudRenderer.HUD_OUTLINE_COLOR = RGB.White.toString();
HudRenderer.HUD_OUTLINE_WIDTH = 5;
HudRenderer.HUD_FONT = "12px Comic Sans MS";
HudRenderer.HUD_FONT_HEIGHT = parseInt(HudRenderer.HUD_FONT) * 1.5; // approx height
HudRenderer.HUD_BAR_FONT_COLOR = RGB.White.toString();
HudRenderer.HUD_SYM_BAR_FONT = "24px Arial";
HudRenderer.HUD_SYM_BAR_FONT_HEIGHT = parseInt(HudRenderer.HUD_SYM_BAR_FONT) * 1.0; // approx height

/**** HUD bar stuff ****/
// Font
HudRenderer.HUD_BAR_FONT = "8px Comic Sans MS";
HudRenderer.HUD_BAR_FONT_HEIGHT = parseInt(HudRenderer.HUD_BAR_FONT) * 0.80; // approx height

// Dimensions
HudRenderer.HUD_BAR_HEIGHT = 10;
HudRenderer.HUD_BAR_LENGTH = 100;

// Colors
HudRenderer.HUD_HP_BAR_COLOR = RGB.Red.toString();
HudRenderer.HUD_HP_BAR_COLOR_BKG = RGB.DarkRed.toString();
HudRenderer.HUD_XP_BAR_COLOR = RGB.Gold.toString();
HudRenderer.HUD_XP_BAR_COLOR_BKG = RGB.DarkGold.toString();
/**** End HUD bar stuff ****/

HudRenderer.HUD_COLOR = RGB.DarkGrey.toString();
HudRenderer.FONT_COLOR_HERO_STAT = RGB.LightGreen.toString();
HudRenderer.FONT_COLOR_HERO_PERCENT_TO_LVL = RGB.Gold.toString();
// Vertical space between hero/creep statuses
HudRenderer.STAT_BUFFER_HEIGHT = 10;
HudRenderer.HUD_HEALTH_SYM = "=";
// Each HUD_HEALTH_SYM represents HUD_HEALTH_SYM_COUNT health
HudRenderer.HUD_HEALTH_SYM_COUNT = 5;

module.exports = HudRenderer;