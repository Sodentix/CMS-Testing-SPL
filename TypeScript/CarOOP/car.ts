export class Car {
    public brand: string;
    public model: string;
    private price: number;
    private year: number;
    public engine: Engine;
    public wheels: Wheels;
    public transmission: Transmission;
    public towHitch?: TowHitch;

    constructor(brand: string, model: string, price: number, year: number, engine: Engine, wheels: Wheels, transmission: Transmission, towHitch?: TowHitch) {
        this.brand = brand
        this.model = model
        this.price = price
        this.year = year
        this.engine = engine
        this.wheels = wheels
        this.transmission = transmission
        this.towHitch = towHitch
    }
    
    public setPrice(price: number) {
        // Hier könnte ich den Preis überprüfen
        this.price = price;
    }

    public getPrice() {
        return this.price;
    }


    public setYear(year: number) {
        // Hier könnte ich überprüfen, ob das Jahr realistisch ist
        this.year = year;
    }

    public getYear() {
        return this.year;
    }

}
