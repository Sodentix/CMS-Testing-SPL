export class Car {
    public brand: string;
    public model: string;
    private price: number;
    private year: number;

    constructor(brand: string, model: string, price: number, year: number) {
        this.brand = brand
        this.model = model
        this.price = price
        this.year = year
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
