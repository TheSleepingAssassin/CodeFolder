Fluid fluid;
float t = 0;

void settings() {
  size(N * SCALE, N * SCALE);
}

void setup() {
  fluid = new Fluid(0.1, 0, 0);
  print(128 * 2);
}

//void mouseDragged() {
//}

void draw() {
  background(0);
  int cx = int(0.5 * width/SCALE);
  int cy = int(0.5 * height/SCALE);
  for (int i = -1; i <= 1; i++) {
    for (int j = -1; j <= 1; j++) {
      fluid.addDensity(cx + i, cy + j, random(100, 500));
    }
  }

  float angle = noise(t) * TWO_PI;
  PVector v = PVector.fromAngle(angle);
  v.mult(5);
  t += 0.01;
  fluid.addVelocity(cx, cy, v.x, v.y);

  fluid.step();
  fluid.renderD();
  fluid.fadeD();
  // fluid.renderV();
}
