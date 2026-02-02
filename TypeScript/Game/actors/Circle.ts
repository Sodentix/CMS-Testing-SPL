import { Actor } from "./Actor.js";

export class Circle implements Actor {
  constructor(
    private x: number,
    private y: number,
    private radius: number,
    
  ) {}

  update(deltaTime: number) {
    this.x += deltaTime * 100;
  }

  render(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = "blue";
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    ctx.stroke();
  }
}