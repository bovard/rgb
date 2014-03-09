function Mixin(base, exendme) {
    var prop;
    for(prop in Object.keys(base)) {
        if(typeof base[prop] === 'function'
            && !exendme[prop]) {
            exendme[prop] = base[prop].bind(base);
        }
    }
}

module.exports = Mixin;