let rex;
let obs = [];

function preload() {
  rex = loadImage("data/Transparent-Trex.png");
  ob = loadImage("data/CactusTT.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  rex = new Dino(windowHeight, rex);
}

function keyPressed() {
  if (key === ' ') {
    rex.jump();
  }
}

function draw() {
  background(255);
  if (random(1) < 0.005) {
    obs.push(new Obstacle(windowWidth, windowHeight - ob.height, ob));
  }
  for (let i = 0; i < obs.length; i++) {
    if (obs[i].x < 0 - ob.width) {
      obs.splice(i, 1);
      console.log("GONE");
    }
  }
  // rex open
  rex.show();
  rex.move();
  // rex close
  // ob open
  for (let ob of obs) {
    ob.show();
    ob.move();
  }
  // ob close
}
