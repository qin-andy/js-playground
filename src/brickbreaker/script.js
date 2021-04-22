import Ball from "./model/Ball.js";
import Block from "./model/Block.js"
import Sprite from "./model/Sprite.js"

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

ball.updateSpeed(40, -50);

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ball.draw(ctx);
  ball.move(canvas.width, canvas.height);
}

setInterval(draw, 20);