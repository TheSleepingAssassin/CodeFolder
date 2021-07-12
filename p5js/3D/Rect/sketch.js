let angle = 0;

function setup() {
  createCanvas(600, 600, WEBGL);
}

function draw() {
  ambientLight(255);
  background(0);
  rotateX(angle);
  rotateY(angle * 0.2);
  noStroke();
  torus(100, 50);

  angle += 0.07;
}
