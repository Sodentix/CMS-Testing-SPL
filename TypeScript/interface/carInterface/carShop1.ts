import { carShopInterface } from "./carShopInterface";

export class carShop1 implements carShopInterface {
    getAllCars(): void {
        console.log("Alle Autos")
    }

    findCars(): void {
        console.log("Hier ist das Ergebnis deiner Suche")
    }
}