

var outputFunctions = [];

function setOutputFunction(fun) {
    outputFunctions.push(fun);
}

function _write(message, color) {
    for (var i = 0; i < outputFunctions.length; i++) {
        outputFunctions[i](message, color);
    }
}


function crit(message) {
    _write(message, "#FF0000")

}

function warn(message) {
    _write(message, "FFA500")

}

function log(message) {
    _write(message, "FFA500")
}

module.exports = {
    crit: crit,
    warn: warn,
    log: log,
    setOutputFunction: setOutputFunction
};