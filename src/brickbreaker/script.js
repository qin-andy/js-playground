const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

let x = canvas.width / 2;
let y = canvas.height - 30;
const dx = 2;
const dy = -2;

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  ctx.beginPath();
  ctx.rect(x, y, 10, 10);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();

  x += dx;
  y += dy;
}

setInterval(draw, 20);