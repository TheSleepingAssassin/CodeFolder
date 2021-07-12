let follow;

function setup() {
  createCanvas(400, 400);
  follow = new Follower(200, 200);
}

function draw() {
  background(0);
  follow.show();
  follow.update();
}
