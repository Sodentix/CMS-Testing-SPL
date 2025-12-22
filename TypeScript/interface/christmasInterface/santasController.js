"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chancellor_1 = require("./interestedPeople/chancellor");
var santasController = /** @class */ (function () {
    function santasController(interestedPeople) {
        this.interestedPeople = interestedPeople;
    }
    santasController.prototype.addToList = function (person) {
        this.interestedPeople.push(person);
    };
    santasController.prototype.notify = function () {
        this.interestedPeople.forEach(function (person) {
            person.notify();
        });
    };
    return santasController;
}());
var chancellor1 = new chancellor_1.Chancellor("Sebastian Kurz");
var santasController1 = new santasController([chancellor1]);
