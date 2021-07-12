let firs = [];
let g;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
  g = createVector(0, 0.01);
  background(0);
}

function draw() {
  colorMode(RGB);
  background(0, 25);
  if (floor(random(100)) < 10) {
    firs.push(new Exploded());
  }
  for (let f of firs) {
    f.show();
    f.update();
  }
  for (let i = firs.length - 1; i >= 0; i--) {
    if (firs[i].done()) {
      firs.splice(i, 1);
    }
  }
  console.log(firs.length);
}
