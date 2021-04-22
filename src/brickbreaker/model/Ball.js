import Sprite from "./Sprite.js";

class Ball extends Sprite {
  constructor(x, y, width, height, color) {
    super(x, y, width, height, color);
    this.dx = 0;
    this.dy = 0;
  }

  bounce(canvasWidth, canvasHeight) {
    if (this.x < 0 || this.x + this.width > canvasWidth) {
      // bounce off the left/right edges
      this.dx *= -1; // switch direction
    }

    if (this.y < 0 || this.y + this.height > canvasHeight) {
      // bounce off the top/bottom edge
      this.dy *= -1; // switch direction
    }
  }

  updateSpeed(dx, dy) {
    this.dx = dx;
    this.dy = dy;
  }

  move(canvasWidth, canvasHeight) { /* overriding the move method */
    super.move(this.dx, this.dy);
    this.bounce(canvasWidth, canvasHeight);
  }
}

export default Ball;