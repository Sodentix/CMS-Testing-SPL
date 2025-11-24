import { Controllable } from "./controllable.ts";
import { Blind } from "./devices/blind.ts";

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

const controller: Controller = new Controller([]);
controller.addDevice(b1);

controller.startDevice(0);
