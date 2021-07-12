let follow;

function setup() {
  createCanvas(600, 600);
  follow = new Follower(width / 2, height / 2);
}

function draw() {
  background(0);
  let g = createVector(0, 0.25);
  follow.applyForce(g);
  if (mouseIsPressed) {
    let w = createVector(0.15, 0);
    follow.applyForce(w);
  }
  follow.show();
  follow.update();
  follow.edges();
}
