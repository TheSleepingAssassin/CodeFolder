let walker;

function setup() {
  createCanvas(600, 400);
  background(0);
  walker = new Walker();
}

function draw() {
  walker.show();
  walker.walk();
}
