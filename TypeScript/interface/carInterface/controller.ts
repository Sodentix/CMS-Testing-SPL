import { carShopInterface } from './carShopInterface.ts'
import { carShop1 } from './carShop1.ts';

class Something {
    getAllCars(carShopInterface: carShopInterface): void {
        carShopInterface.getAllCars();
    }
}

// Alle Variablennamen werden noch geändert. Ich habe keinen Plan von guter Benennung
const something: Something = new Something();
