let b;
let pipes;

function preload() {
  bird = loadImage("data/Flappy.png");
  flap = loadImage("data/Flap.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight - 21);
  resetSketch();
  imageMode(CENTER);
  var button = createButton("Reset");
  button.mousePressed(resetSketch);
}

function resetSketch() {
  pipes = [];
  b = new Bird();
  loop();
}

function keyPressed() {
  if (key === ' ') {
    b.flap();
  }
}

function endGame() {
  background(255, 0, 0);
  textAlign(CENTER);
  text('You Lost', width / 2, height / 2);
  noLoop();
}

function draw() {
  background(0);
  if (frameCount % 100 == 0) {
    pipes.push(new Pipe());
  }
  for (let i = 0; i < pipes.length; i++) {
    if (pipes[i].hits(b)) {
      endGame();
    }
  }
  for (let p of pipes) {
    p.show(b);
    p.update();
  }
  for (let i = pipes.length - 1; i >= 0; i--) {
    if (pipes[i].x < -pipes[i].w) {
      pipes.splice(i, 1);
    }
  }
  switch (b.flep) {
    case 0:
      b.fly = bird;
      break;
    case 1:
      b.fly = flap;
      break;
  }
  b.show();
  b.updateF();
  b.applyForce();
}
