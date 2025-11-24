"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Blind = void 0;
var Blind = /** @class */ (function () {
    function Blind() {
    }
    Blind.prototype.start = function () {
        console.log("Blind turned on.");
    };
    Blind.prototype.stop = function () {
        console.log("Blind turned off.");
    };
    return Blind;
}());
exports.Blind = Blind;
