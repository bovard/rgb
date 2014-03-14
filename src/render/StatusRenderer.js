
function _renderCreepToCanvas(ctx, creep) {

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

}



module.exports = {
    renderCreepStatiToCanvi: renderCreepStatiToCanvi,
    renderHeroStatusToCanvas: renderHeroStatusToCanvas
};