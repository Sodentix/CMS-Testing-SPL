import { Notify } from "../notify";

export class God implements Notify {
    name = ''
    constructor(name: string) {
        this.name = name
    }

    notify():void {
        console.log(`God ${this.name} was notified`);
    }
}