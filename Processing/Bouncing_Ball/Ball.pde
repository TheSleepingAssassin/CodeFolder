class Ball {

  float x;
  float xspeed;
  float y;
  float yspeed;
  float r;

  Ball() {
    x = random(0 + r + 5, width - r - 5);
    xspeed = 3;
    y = random(0 + r + 5, height - r - 5);
    yspeed = 4;
    r = 15;
  }

  void show() {
    fill(255);
    noStroke();
    ellipse(x, y, r * 2, r *2);
  }

  void update() {
    x = x + xspeed;
    y = y + yspeed;
    if (x >= width - r || x <= 0 + r) {
      xspeed = xspeed * -1;
    }
    if (y >= height - r || y <= 0 + r) {
      yspeed = yspeed * -1;
    }
  }
}
