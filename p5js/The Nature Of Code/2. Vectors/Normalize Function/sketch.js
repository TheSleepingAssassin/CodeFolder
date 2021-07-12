function setup() {
  createCanvas(400, 400);
  background(0);
}

function draw() {
  let pos = createVector(200, 200);
  let mouse = createVector(mouseX, mouseY);
  let v = p5.Vector.sub(mouse, pos);

  // let m = v.mag();
  // v.div(m);
  // v.mult(50);

  // v.normalize();
  // v.mult(50);

  // v.normalize().mult(50);

  v.setMag(50);
  
  translate(width / 2, height / 2);
  if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
    stroke(255, 125);
    strokeWeight(3);
    line(0, 0, v.x, v.y);
  }
}
