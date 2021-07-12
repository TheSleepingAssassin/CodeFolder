Snake s;
int rez = 20;
PVector food;
float w, h;

void setup() {
  size(600, 600);
  reset();
}

void reset() {
  w = floor(width / rez);
  h = floor(height / rez);
  frameRate(17);
  s = new Snake();
  foodLocation();
}

void foodLocation() {
  float x = floor(random(w));
  float y = floor(random(h));
  food = new PVector(x, y);
}

void mousePressed() {
  loop();
  reset();
}

void keyPressed() {
  if (keyCode == LEFT) {
    s.setDir(-1, 0);
  }
  if (keyCode == RIGHT) {
    s.setDir(1, 0);
  }
  if (keyCode == UP) {
    s.setDir(0, -1);
  }
  if (keyCode == DOWN) {
    s.setDir(0, 1);
  }
}

void draw() {
  scale(rez);
  background(0);
  if (s.eat(food)) {
    foodLocation();
  }
  s.render();
  s.update();
  if (s.endGame()) {
    print("ENGDAME");
    background(255, 0, 0);
    noLoop();
  }
  noStroke();
  fill(255, 0, 0);
  rect(food.x, food.y, 1, 1);
}
