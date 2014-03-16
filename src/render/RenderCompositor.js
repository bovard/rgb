/* Composes the master canvas with the hidden sub-canvases for game, hud, etc. */
var Renderer = require('./Renderer');
var HudRenderer = require('./HudRenderer');

// Renders the hidden sub-canvases in preparation for composition
function render() {
	Renderer.prototype.render.apply(this.renderer, this.renderData['game'].data());
	HudRenderer.prototype.render.apply(this.hudRenderer, this.renderData['hud'].data());
}
/* canvas - the master canvas that will be visibile on the page
   renderData - object that follows the form:
   { 
	   renderer1Name: {
		   canvas: <the hidden canvas for this renderer>
		   data: function() { return [array of run-time computed render parameters]; }
		   },   
	   renderer2Name: {
	       ...
		   }	 
   }   */
function RenderCompositor(canvas, renderData) {
	this.canvas = canvas;
	this.context = canvas.getContext("2d");
	this.renderData = renderData;
	this.renderer = new Renderer(renderData['game'].canvas);
	this.hudRenderer = new HudRenderer(renderData['hud'].canvas);
}

RenderCompositor.prototype = {

	compose: function() {
		// Render sub-canvases that make up master canvas
		render.call(this);
		
		/* Compose!
		   Right 100% - RenderCompositor.HUD_PERCENT of master canvas = game 
		   Left RenderCompositor.HUD_PERCENT of master canvas = hud */
		this.context.drawImage(this.renderData['game'].canvas, 
		    0, 
			0,
			this.renderData['game'].canvas.width,
			this.renderData['game'].canvas.height,
			this.canvas.width * RenderCompositor.HUD_PERCENT, 
			0, 
			this.canvas.width * (1 - RenderCompositor.HUD_PERCENT), 
			this.canvas.height
			);
		this.context.drawImage(this.renderData['hud'].canvas, 
		    0, 
			0,
			this.renderData['hud'].canvas.width,
			this.renderData['hud'].canvas.height,
			0, 
			0, 
			this.canvas.width * RenderCompositor.HUD_PERCENT, 
			this.canvas.height
			);
	}
}

RenderCompositor.HUD_PERCENT = .25;

module.exports = RenderCompositor;