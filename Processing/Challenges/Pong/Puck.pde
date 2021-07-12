class Puck {
  PVector pos, vel;
  float r, d;
  Puck() {
    pos = new PVector(width / 2, height / 2);
    vel = PVector.random2D();
    vel.mult(5);
    r = 16;
    d = r * 2;
  }

  void reverse() {
    vel.x *= -1;
  }

  boolean intersects(Paddle p) {
    if (this.which(p)/* == true */) {
      if (pos.y - r > p.pos.y + p.h / 2) {
        float d = dist(pos.x, pos.y, p.pos.x, p.pos.y);
        if (d < r + p.w / 2) {
          return true;
        }
      }
    } else if (pos.y - r > p.pos.y + (p.h / 2) || pos.y + r < p.pos.y - (p.h / 2)) {
      float d = dist(pos.x, pos.y, p.pos.x, p.pos.y);
      if (d < r + p.w / 2) {
        return true;
      }
    }
    return false;
  }

  boolean which(Paddle p) {
    if (p.pos.x > width / 2) {
      return true;
    } else {
      return false;
    }
  }

  void edges() {
    if (pos.y > height - r) {
      vel.y *= -1;
    } else if (pos.y < r) {
      vel.y *= -1;
    }
  }

  void update() {
    pos.add(vel);
  }

  void render() {
    pushMatrix();
    translate(pos.x, pos.y);
    fill(255);
    ellipse(0, 0, d, d);
    popMatrix();
  }
}
