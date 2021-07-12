Ball [] balls = new Ball[6];

void setup() {
  size(600, 400);
  for (int i = 0; i < balls.length; i++) {
    balls[i] = new Ball();
  }
}

void draw() {
  background(0);
  for (int i = 0; i < balls.length; i++) {
    balls[i].show();
    balls[i].update();
  }
}
