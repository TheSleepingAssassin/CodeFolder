let as = [];
let rs = [];
let bs = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 10; i++) {
    bs.push(new Body(random(width), random(height), 0.2));
  }
}

function mousePressed() {
  if (mouseButton === LEFT) {
    as.push(new Attractor(mouseX, mouseY, 0.4));
  }
}

function keyPressed() {
  if (key === 'r') {
    rs.push(new Repeller(mouseX, mouseY, 0.4));
  }
}

function draw() {
  background(0);
  //Attractor
  for (b of bs) {
    for (let a of as) {
      a.show();
      a.attract(b);
    }
    for (let r of rs) {
      r.show();
      r.repel(b);
    }
  }
  // Body
  for (let b of bs) {
    b.show();
    b.update();
  }
}
