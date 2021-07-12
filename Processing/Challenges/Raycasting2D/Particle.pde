class Particle {
  PVector pos;
  ArrayList<Ray> rays;
  Particle() {
    rays = new ArrayList<Ray>();
    pos = new PVector(width / 2, height / 2);
    for (int a = 0; a < 360; a += 1) {
      rays.add(new Ray(pos, radians(a)));
    }
  }

  void update(float x, float y) {
    pos.x = x;
    pos.y = y;
  }

  void look(Boundary[] walls) {
    stroke(255);
    for (Ray ray : rays) {
      PVector closest = null;
      float record = 50000000;
      for (Boundary wall : walls) {
        PVector pt = ray.cast(wall);
        if (pt != null) {
          float d = PVector.dist(pos, pt);
          if (d < record) {
            record = d;
            closest = pt;
          }
        }
      }
      if (closest != null) {
        stroke(255, 100);
        line(pos.x, pos.y, closest.x, closest.y);
      }
    }
  }

  void render() {
    fill(255);
    ellipse(pos.x, pos.y, 2, 2);
    for (Ray ray : rays) {
      ray.render();
    }
  }
}
