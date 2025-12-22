import { Controllable } from "./controllable.ts";
import { Blind } from "./devices/blind.ts";
import { Heater } from "./devices/heater.ts"

class Controller {
    constructor(private devices: Controllable[]) {}

    addDevice(controllable: Controllable): void {
        this.devices.push(controllable);
    }

    startDevice(index: number): void {
        this.devices[index].start();
    }
}

const b1: Blind = new Blind();
const h1: Heater = new Heater();

const controller: Controller = new Controller([]);
controller.addDevice(b1);
controller.addDevice(h1);

controller.startDevice(0);
controller.startDevice(1)
