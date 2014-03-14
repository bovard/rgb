
function _renderCreepToCanvas(ctx, creep) {
    ctx.fillStyle = creep.getRGB().toString();
    ctx.fillText(creep.getName(), 0, 30);
    //TODO: this
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
    ctx.fillStyle = "#FFFFFF";
    ctx.fillText("HERO", 0, 30)

}



module.exports = {
    renderCreepStatiToCanvi: renderCreepStatiToCanvi,
    renderHeroStatusToCanvas: renderHeroStatusToCanvas
};