"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var blind_ts_1 = require("./devices/blind.ts");
var Controller = /** @class */ (function () {
    function Controller(devices) {
        this.devices = devices;
    }
    Controller.prototype.addDevice = function (controllable) {
        this.devices.push(controllable);
    };
    Controller.prototype.startDevice = function (index) {
        this.devices[index].start();
    };
    return Controller;
}());
var b1 = new blind_ts_1.Blind();
var controller = new Controller([]);
controller.addDevice(b1);
controller.startDevice(0); // startet Blind
