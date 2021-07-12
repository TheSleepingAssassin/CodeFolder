let b1;
let b2;

function setup() {
  createCanvas(600, 400);

  b1 = new Bubble(200, 200);
  b2 = new Bubble(400, 200);
}


function draw() {
  background(0);

  if (b1.intersects(b2)) {
    background(200, 0, 100);
  }

  b1.show();
  b2.show();
  b2.x = mouseX;
  b2.y = mouseY;
}
