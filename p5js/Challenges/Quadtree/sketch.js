let qt, bound;

function setup() {
  createCanvas(windowWidth, windowHeight);
  bound = new Rectangle(200, 200, 200, 200);
  qt = new Quadtree();
  console.log(qt);

  for (let i = 0; i < 1; i++) {
    let pt = new Point(random(width), random(height));
    qt.insert(pt);
  }
}