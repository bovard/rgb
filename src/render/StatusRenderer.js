var RGB = require('../RGB');

function _clearDiv(div) {
    div.empty();
}

function _addToDiv(div, text, color) {
    $('<div style="color:' + color + '">' + text + '</>').appendTo(div);
}

function _renderCreepToDiv(div, creep, rgb) {
    if (!rgb) {
        rgb = '#FFFFFF';
    }
    _addToDiv(div, creep.getRepr() + ": " + creep.getName() + " - lvl " + creep.getLevel(), "#FFFFFF");
    _addToDiv(div, Math.ceil(creep.getHealth()) + " hp ", "#FFFFFF");
}

function _getDifficulty(creepLevel, heroLevel) {
    var difference = heroLevel - creepLevel;
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

}

function renderCreepStatiToDivs(divList, creepList, hero) {
    // clear canvas
    for (var i = 0; i < divList.length; i++) {
        _clearDiv(divList[i]);
    }
    // render to canvas
    for (i = 0; i < creepList.length; i++) {
        if (!hero.getDimension().getRGB().mask(creepList[i].getRGB()).isBlack()) {
            var rgb = _getDifficulty(creepList[i].getLevel(), hero.getLevel());
            _renderCreepToDiv(divList[i], creepList[i], rgb);
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