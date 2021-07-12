class Vehicle {
  PVector pos, vel, acc;
  ArrayList<Float> dna;
  float r, maxForce, maxSpeed;
  Vehicle() {
    pos = new PVector(width / 2, height / 2);
    vel = new PVector();
    acc = new PVector();
    r = 6;
    maxSpeed = 5;
    maxForce = 0.02;
    dna = new ArrayList<Float>();
    dna.add(1.0);
    dna.add(1.0);
    // dna.get(0) = random(-5, 5);
    // dna.get(1) = random(-5, 5);
  }

  void behaviours(ArrayList<PVector> good, ArrayList<PVector> bad) {
    PVector steerG = eat(good);
    PVector steerB = eat(bad);

    steerG.mult(dna.get(0));
    steerB.mult(dna.get(1));

    applyForce(steerG);
    applyForce(steerB);
  }

  void eat(ArrayList<PVector> list) {
    float record = 50000000;
    int closest = -1;
    int i = 0;
    for (PVector p : list) {
      float d = PVector.dist(pos, p);
      if (d < record) {
        record = d;
        closest = i;
      }
      i++;
    }
    if (record < 5) {
      list.remove(closest);
    } else if (closest > -1) {
      return seek(list.get(closest));
    }
    return new PVector();
  }

  void seek(PVector target) {
    PVector desired = PVector.sub(target, pos);
    desired.setMag(maxSpeed);
    PVector steer = PVector.sub(desired, vel);
    steer.limit(maxForce);
    return steer;
  }

  void applyForce(PVector force) {
    acc.add(force);
  }

  void update() {
    vel.add(acc);
    vel.limit(maxSpeed);
    pos.add(vel);
    acc.mult(0);
  }

  void render() {
    float theta = vel.heading() + radians(90);
    fill(255, 100);
    pushMatrix();
    translate(pos.x, pos.y);
    rotate(theta);
    beginShape(TRIANGLES);
    vertex(r, r * 2);
    vertex(-r, r * 2);
    vertex(0, -r * 2);
    popMatrix();
    endShape();
  }
}
