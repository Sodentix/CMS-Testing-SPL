import { Game, GameFramework } from "./GameFramework.js";
import { Rectangle } from "./actors/Rectangle.js";
import { Circle } from "./actors/Circle.js";
class MyGame extends Game {
    constructor() {
        super();
        this.actors = [];
    }
    addActor(actor) {
        this.actors.push(actor);
    }
    init() {
        console.log("Game started!");
        const r1 = new Rectangle(10, 10, 10, 10);
        const c1 = new Circle(20, 20, 20);
        this.addActor(r1);
        this.addActor(c1);
    }
    update(deltaTime) {
        console.log("Inside update", deltaTime);
        for (const actor of this.actors) {
            actor.update(deltaTime);
        }
    }
    render(ctx) {
        console.log("in rendeers");
        for (const actor of this.actors) {
            actor.render(ctx);
        }
    }
}
const game = new MyGame();
game.init();
const framework = new GameFramework(game, 800, 600);
framework.start();
