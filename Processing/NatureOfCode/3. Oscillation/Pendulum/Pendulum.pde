Body b;
PVector origin;
float restLen;

void setup() {
  size(600, 600);
  restLen = 200;
  origin = new PVector(width / 2, height / 2);
  b = new Body(width / 2, height / 2 + restLen);
}

void draw() {
  background(0);
  stroke(255);
  line(origin.x, origin.y, b.pos.x, b.pos.y);
  b.render();
  b.update();

  PVector spring = PVector.sub(b.pos, origin);
  float curLen = spring.mag();
  spring.normalize();
  float k = 1;
  float stretch = curLen - restLen;
  spring.mult(-k * stretch);
  b.applyForce(spring);

  if (mousePressed) {
    PVector w = new PVector(0.1, 0);
    b.applyForce(w);
  }
  PVector g = new PVector(0, 0.5);
  b.applyForce(g);
}
