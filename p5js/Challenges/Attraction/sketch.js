let bs = [];
let att;

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 100; i++) {
    bs.push(new Body(createVector(random(width), random(height)), 2));
  }

  att = new Attractor(createVector(width / 2, height / 2), 4);
}

function draw() {
  background(51);

  for (let i = 0; i < bs.length / 2; i++) {
    bs[i].render();
    bs[i].tick();
  }

  att.render();
  for (let b of bs) {
    att.attract(b);
  }

  for (let i = bs.length / 2; i < bs.length; i++) {
    bs[i].render();
    bs[i].tick();
  }
}