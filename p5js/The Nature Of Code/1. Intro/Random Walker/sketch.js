let x;
let y;

function setup() {
  createCanvas(600, 400);
  x = width / 2;
  y = height / 2;
  background(0);
}

function draw() {
  noStroke();
  fill(255);
  ellipse(x, y, 5, 5);

  let d = floor(random(4));

  switch (d) {
    case 0:
      x += 1;
      break;
    case 1:
      x -= 1;
      break;
    case 2:
      y += 1;
      break;
    case 3:
      y -= 1;
      break;
  }

  if(x < 0 || x > height) {
    x *= -1;
  } else if(y < 0 || y > height) {
    y *= -1;
  }
}
