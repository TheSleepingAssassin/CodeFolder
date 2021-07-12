Ship s;
ArrayList<Asteroid> asts;
ArrayList<Laser> lasers;

void setup() {
  size(1200, 600);
  reset();
}

void reset() {
  s = new Ship();
  asts = new ArrayList<Asteroid>();
  lasers = new ArrayList<Laser>();
  for (int i = 0; i < 10; i++) {
    asts.add(new Asteroid());
  }
}

void keyReleased() {
  if (keyCode == RIGHT || keyCode == LEFT) {
    s.setRot(0);
  }

  if (keyCode == UP) {
    s.boosting(false);
  }
}

void keyPressed() {
  if (key == ' ') {
    lasers.add(new Laser(s.pos, s.head));
  } else if (keyCode == RIGHT) {
    s.setRot(0.1);
  } else if (keyCode == LEFT) {
    s.setRot(-0.1);
  } else if (keyCode == UP) {
    s.boosting(true);
  }
}

void draw() {
  background(51);
  for (int i = lasers.size() - 1; i >= 0; i--) {
    Laser l = lasers.get(i);
    l.render();
    l.update();
    noStroke();
    strokeWeight(1);
    noFill();
    if (l.out()) {
      lasers.remove(i);
    } else {
      for (int j = asts.size() - 1; j >= 0; j--) {
        Asteroid a = asts.get(j);
        if (l.hits(a)) {
          if (a.r > 30) {
            ArrayList newAst = a.genAst();
            asts.addAll(newAst);
          }
          asts.remove(j);
          lasers.remove(i);
          break;
        }
      }
    }
  }

  s.render();
  s.update();
  s.turn();
  s.edges();

  for (Asteroid a : asts) {
    a.render();
    a.update();
    a.edges();
    if (s.hits(a)) {
      background(255, 0, 0);
      textSize(50);
      textAlign(CENTER);
      fill(255);
      stroke(255);
      text("Wasted", width / 2, height / 2);
      noLoop();
    }
  }

  if (asts.size() <= 0) {
    background(0, 255, 0);
    textSize(50);
    textAlign(CENTER);
    fill(255);
    stroke(255);
    text("WIN!", width / 2, height / 2);
  }
}
