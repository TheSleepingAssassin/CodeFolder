let v;

function setup() {
  createCanvas(400, 400);
  background(0);
}

function draw() {
  translate(width / 2, height / 2);

  //v = createVector(floor(random(300, -300)), floor(random(300, -300)));
  v = p5.Vector.random2D();
  v.mult(300);

  stroke(255, 50);
  strokeWeight(3);
  line(0, 0, v.x, v.y);
}
