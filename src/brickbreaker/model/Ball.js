import Sprite from "./Sprite.js";

class Ball extends Sprite {
  constructor(x, y, width, height, color) {
    super(x, y, width, height, color);
    this.dx = 0;
    this.dy = 0;
  }

  bounce(canvasWidth, canvasHeight) {
    if (this.x < 0 || this.x + this.width > canvasWidth) {
      this.dx *= -1;
    }

    if (this.y < 0 || this.y + this.height > canvasHeight) {
      this.dy *= -1;
    }
  }

  updateSpeed(dx, dy) {
    this.dx = dx;
    this.dy = dy;
  }

  move(canvasWidth, canvasHeight) {
    super.move(this.dx, this.dy);
    this.bounce(canvasWidth, canvasHeight);
  }

  collides(paddle) {
    if (this.intersects(paddle)) {
      this.dy *= -1;
    }
  }
}

export default Ball;