let symmetry = 12;
let angle = 360 / symmetry;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  background(0);
}

function draw() {
  let mx = mouseX - width / 2;
  let my = mouseY - height / 2;
  let pmx = pmouseX - width / 2;
  let pmy = pmouseY - height / 2;
  translate(width / 2, height / 2);
  if (mouseIsPressed) {
    for (let i = 0; i < symmetry; i++) {
      push();
      rotate(i * angle);
      if (i % 2 == 1) {
        scale(-1, 1);
      }
      strokeWeight(6);
      stroke(255);
      line(mx, my, pmx, pmy);
      pop();
    }
  }
}
