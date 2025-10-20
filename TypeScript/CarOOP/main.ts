import { Car } from "./car";
import { Engine } from "./engine";
import { Wheels } from "./wheels";
import { TowHitch } from "./towHitch";
import { Transmission } from "./transmission";


const engine1 = new Engine(600, "Benzin") // Motor PFLICHT: horsepower und fuel
const wheels1 = new Wheels(12, "Sommerreifen") // Bereifung PFLICHT: size und tireType
const transmission1 = new Transmission("Manual", 6) // Getriebe PFLICHT: transmissionType und gearCount
const towHitch1 = new TowHitch(500) // Anhaengerkupplung OPTIONAL: loadCapacity 

const car1 = new Car("Toyota","Rav 4",5000,2007, engine1, wheels1, transmission1, towHitch1);
console.log(car1)
