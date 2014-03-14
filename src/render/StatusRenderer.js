
function _clearCanvas(ctx) {
    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}


function _renderCreepToCanvas(ctx, creep) {
    _clearCanvas(ctx);
    ctx.fillStyle = creep.getRGB().toString();
    ctx.fillText(creep.getName() + " " + Math.round(creep.getHealth()) + "HP", 0, 30);
    //TODO: this
    // name, health
}


function renderCreepStatiToCanvi(ctxList, creepList) {
    if (!ctxList || !creepList) {
        console.warn("no ctx or creep!");
        return;
    }
    for (var i = 0; i < creepList.length; i++) {
        _renderCreepToCanvas(ctxList[i], creepList[i]);
    }

}




function renderHeroStatusToCanvas(ctx, hero) {
    if (!ctx || !hero) {
        console.warn("no ctx or creep!");
        return;
    }
    _clearCanvas(ctx);
    ctx.fillStyle = "#FFFFFF";
    ctx.fillText("HERO", 0, 30);
    // TODO: this
    // character, health, shield, xp

}



module.exports = {
    renderCreepStatiToCanvi: renderCreepStatiToCanvi,
    renderHeroStatusToCanvas: renderHeroStatusToCanvas
};