import Ball from "./model/Ball.js";;
import Block from "./model/Block.js";
import Sprite from "./model/Sprite.js";
import Paddle from "./model/Paddle.js";

const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

const blueSprite = new Sprite(
  canvas.width / 2,
  canvas.height - 30,
  10,
  10,
  "#0095DD"
);

const dx = 2;
const dy = -2;

const redBlock = new Block(300, 40, 50, 50, "#FF0000");
const ball = new Ball(40, 50, 50, 50, "#FF0000")

ball.updateSpeed(5, -2);

const paddle = new Paddle(
  (canvas.width - 10) / 2,
  canvas.height - 200,
  75,
  10,
  "#0095DD"
);


function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ball.draw(ctx);
  ball.updateSpeed(ball.dx, ball.dy -= 5/(ball.height));
  ball.move(canvas.width, canvas.height);
  ball.collides(paddle);

  paddle.draw(ctx);
  paddle.move(canvas.width);


}

setInterval(draw, 10);