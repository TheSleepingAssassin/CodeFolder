let s;
let invs = [];
let bulls = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  s = new Ship(width / 2);
  for (let i = 0; i < 20; i++) {
    invs[i] = new Invader(i * 30 + 400, 50);
  }
}

function draw() {
  background(0);
  s.move();
  s.show();
  for (let inv of invs) {
    inv.show();
    inv.move();
    inv.hitEdge();
  }
  for (let b of bulls) {
    b.show();
    b.update();
  }
  for (let i = bulls.length - 1; i >= 0; i--) {
    for (let j = invs.length - 1; j >= 0; j--) {
      if (bulls[i].contains(invs[j])) {
        invs.splice(j, 1);
      }
    }
  }

  for (let i = bulls.length - 1; i >= 0; i--) {
    if (bulls[i].y <= -bulls[i].r) {
      bulls.splice(i, 1);
    }
  }
}
