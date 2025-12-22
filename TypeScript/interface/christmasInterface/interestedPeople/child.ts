import { Notify } from "../notify";

export class Child implements Notify {
    name = ''
    constructor(name: string) {
        this.name = name
    }

    notify():void {
        console.log(`Child ${this.name} was notified`);
    }
}