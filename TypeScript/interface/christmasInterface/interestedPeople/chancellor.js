"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Chancellor = void 0;
var Chancellor = /** @class */ (function () {
    function Chancellor(name) {
        this.name = '';
        this.name = name;
    }
    Chancellor.prototype.notify = function () {
        console.log("Chancellor ".concat(this.name, " was notified"));
    };
    return Chancellor;
}());
exports.Chancellor = Chancellor;
