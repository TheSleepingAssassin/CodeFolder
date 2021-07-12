let follow;

function setup() {
  createCanvas(windowWidth, windowHeight);
  follow = new Follower(200, 200);
}

function draw() {
  background(0);
  follow.show();
  follow.update();
}
