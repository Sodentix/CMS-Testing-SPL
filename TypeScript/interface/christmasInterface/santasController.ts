import { Notify} from './notify'
import { Chancellor } from './interestedPeople/chancellor'
import { Child } from './interestedPeople/child'
import { God } from './interestedPeople/god'

class santasController {
    constructor(private interestedPeople: Notify[]) {}

    addToList(person: Notify): void {
        this.interestedPeople.push(person)
    }
    notify(): void {
        this.interestedPeople.forEach((person) => {
            person.notify()
        })
    }
}


const chancellor1 = new Chancellor("Sebastian Kurz")
const child1 = new Child("Chrissi")
const god1 = new God("Zeus")

const santasController1 = new santasController([chancellor1, child1, god1])
santasController1.notify()