let v;

function setup() {
  createCanvas(400, 400);
  background(0);
}

function draw() {
  translate(width / 2, height / 2);
  let pos = createVector(200, 200);
  let mouse = createVector(mouseX, mouseY);
  let v = p5.Vector.sub(mouse, pos);

  if (mouseX < width && mouseX > 0 && mouseY < height && mouseY > 0) {
    stroke(255, 100);
    strokeWeight(3);
    line(0, 0, v.x, v.y);
  }
}
