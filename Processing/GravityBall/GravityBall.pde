Body ball;

void setup() {
  size(800, 600);
  ball = new Body(new PVector(width / 2, 50), 16, 2);
}

void draw() {
  background(51);
  ball.render();
  ball.update();
  ball.applyG();
  ball.bounce();

  if (mousePressed) {
    if (mouseX < ball.pos.x) {
      PVector w = new PVector(0.4, 0);
      ball.applyForce(w);
    } else if (mouseX > ball.pos.x) {
      PVector w = new PVector(-0.4, 0);
      ball.applyForce(w);
    } if (mouseY < ball.pos.y) {
      PVector w = new PVector(0, 0.4);
      ball.applyForce(w);
    } else if (mouseY > ball.pos.y) {
      PVector w = new PVector(0, -0.6);
      ball.applyForce(w);
    }
  }
}
