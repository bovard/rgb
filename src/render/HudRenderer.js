/* Draws the game hud. */
var RGB = require('./../RGB');
var Location = require('./../map/Location');

function renderHudText(txt, color) {
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
    var creepHp = Math.ceil(creep.getHealth()) + " hp ";
	renderHudText.call(this, creepHp, color);
	drawStatSymbolBar.call(this, creep.health, HudRenderer.HUD_HEALTH_SYM,
			HudRenderer.HUD_HEALTH_SYM_COUNT, color);
	if (isHero) {
		var percentToLvlStr = 
			creep.getStats().getPercentageProgressToNextLevel() + 
			"% to level " + (creep.getLevel() + 1);
		renderHudText.call(this, percentToLvlStr, 
			HudRenderer.FONT_COLOR_HERO_PERCENT_TO_LVL);
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
		
		// Center grid at <canvas.width/2, 0>
		this.context.translate(this.canvas.width/2, 0);
		
		// Scale by zoom factor
		this.context.scale(this.zoomFactor,this.zoomFactor);
		
		// Set font
		this.context.font = HudRenderer.HUD_FONT;
		
		// Draw HUD elements
		renderHeroStatus.call(this, hero);
		renderCreepStats.call(this, creepList, hero);
		
		this.context.restore();
	}
}

HudRenderer.HUD_FONT = "12px Arial";
HudRenderer.HUD_FONT_HEIGHT = parseInt(HudRenderer.HUD_FONT) * 1.5; // approx height
HudRenderer.HUD_SYM_BAR_FONT = "24px Arial";
HudRenderer.HUD_SYM_BAR_FONT_HEIGHT = parseInt(HudRenderer.HUD_SYM_BAR_FONT) * 1.0; // approx height
HudRenderer.HUD_COLOR = RGB.Black;
HudRenderer.FONT_COLOR_HERO_STAT = RGB.Green.toString();
HudRenderer.FONT_COLOR_HERO_PERCENT_TO_LVL = RGB.Gold.toString();
// Vertical space between hero/creep statuses
HudRenderer.STAT_BUFFER_HEIGHT = 10;
HudRenderer.HUD_HEALTH_SYM = "=";
// Each HUD_HEALTH_SYM represents HUD_HEALTH_SYM_COUNT health
HudRenderer.HUD_HEALTH_SYM_COUNT = 5;

module.exports = HudRenderer;