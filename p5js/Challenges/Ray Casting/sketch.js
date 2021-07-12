let walls = [];
let ray;
let p;
let inc = 0.007;
let xoff = 0;
let yoff = 10000000;

function setup() {
  createCanvas(windowWidth, windowHeight)
  for (let i = 0; i < 10; i++) {
    let x1 = random(width);
    let x2 = random(width);
    let y1 = random(height);
    let y2 = random(height);
    walls[i] = new Bound(x1, y1, x2, y2);
  }
  p = new Particle();
  walls.push(new Bound(0, 0, width, 0));
  walls.push(new Bound(width, 0, width, height));
  walls.push(new Bound(width, height, 0, height));
  walls.push(new Bound(0, height, 0, 0));
}

function draw() {
  background(0);
  for (let wall of walls) {
    wall.show();
  }
  let x = noise(xoff) * width;
  let y = noise(yoff) * height;
  p.update(x, y);
  p.show();
  p.look(walls);
  xoff += inc;
  yoff += inc;
}
