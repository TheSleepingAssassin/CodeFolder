class Attractor {
  PVector pos;
  float mass, r, g;
  Attractor(float _m) {
    pos = new PVector(width / 2, height / 2);
    mass = _m;
    r = sqrt(mass) * 10;
    g = 100;
  }

  void attract(Body b) {
    PVector f = PVector.sub(pos, b.pos);
    float distanceSq = constrain(f.magSq(), 100, 750);
    float strength = (g * mass * b.mass) / distanceSq;
    f.setMag(strength);
    b.applyForce(f);
  }

  void render() {
    fill(255, 0, 0);
    noStroke();
    ellipse(pos.x, pos.y, r * 2, r * 2);
  }
}
