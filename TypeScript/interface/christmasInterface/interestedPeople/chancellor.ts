import { Notify } from "../notify";

export class Chancellor implements Notify {
    name = ''
    constructor(name: string) {
        this.name = name
    }

    notify():void {
        console.log(`Chancellor ${this.name} was notified`);
    }
}