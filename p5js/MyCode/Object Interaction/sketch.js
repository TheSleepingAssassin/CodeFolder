let bubbles = [];

function setup() {
  createCanvas(600, 400);
  for (var i = 0; i < 5; i++) {
    let x = random(width);
    let y = random(height);
    let r = random(10, 50);
    bubbles[i] = new Bubble(x, y, r);
  }
}

function draw() {
  background(0);
  for (let b of bubbles) {
    b.show();
    b.move();
    let overlap = false;
    for (let other of bubbles) {
      if (b !== other && b.contains(other)) {
        overlap = true;
      }
    }
    if (overlap) {
      b.changeColor(255);
    } else {
      b.changeColor(0);
    }
  }
}
