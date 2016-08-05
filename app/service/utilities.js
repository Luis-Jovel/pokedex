"use strict";
var Utilities = (function () {
    function Utilities() {
    }
    Utilities.prototype.getPokemonIdFromUrl = function (url) {
        return +url.replace(/^.*?pokemon-species\/(\d+)\/$/, "$1");
    };
    return Utilities;
}());
exports.Utilities = Utilities;
//# sourceMappingURL=utilities.js.map