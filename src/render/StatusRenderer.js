var RGB = require('../RGB');

function _clearDiv(div) {
    div.empty();
}

function _addToDiv(div, text, color) {
    $('<div style="color:' + color + '">' + text + '</>').appendTo(div);
}

function _renderCreepToDiv(div, creep) {
    _addToDiv(div, creep.getRepr() + ": " + creep.getName() + " - lvl " + creep.getLevel(), "#FFFFFF");
    _addToDiv(div, Math.round(creep.getHealth()) + " hp ", "#FFFFFF");
}

function renderCreepStatiToDivs(divList, creepList, hero) {
    // clear canvas
    for (var i = 0; i < divList.length; i++) {
        _clearDiv(divList[i]);
    }
    // render to canvas
    for (i = 0; i < creepList.length; i++) {
        if (!hero.getDimension().getRGB().mask(creepList[i].getRGB()).isBlack()) {
            _renderCreepToDiv(divList[i], creepList[i]);
        }
    }

}

function renderHeroStatusToDiv(div, hero) {
    if (!div || !hero) {
        console.warn("no div or creep!");
        return;
    }
    _clearDiv(div);
    _renderCreepToDiv(div, hero);
    _addToDiv(div,  hero.getStats().getPercentageProgressToNextLevel() + "% to level " + (hero.getLevel() + 1), RGB.Gold.toString())

}

module.exports = {
    renderCreepStatiToDivs: renderCreepStatiToDivs,
    renderHeroStatusToDiv: renderHeroStatusToDiv
};