"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = void 0;
var Car = /** @class */ (function () {
    function Car(brand, model, price, year) {
        this.brand = brand;
        this.model = model;
        this.price = price;
        this.year = year;
    }
    Car.prototype.setPrice = function (price) {
        // Hier könnte ich den Preis überprüfen
        this.price = price;
    };
    Car.prototype.getPrice = function () {
        return this.price;
    };
    Car.prototype.setYear = function (year) {
        // Hier könnte ich überprüfen, ob das Jahr realistisch ist
        this.year = year;
    };
    Car.prototype.getYear = function () {
        return this.year;
    };
    return Car;
}());
exports.Car = Car;
