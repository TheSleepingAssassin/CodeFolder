Snake snake;
PVector food;
int rez = 30;
float W, H;

void setup() {
  size(600, 600);
  reset();
}

void reset() {
  frameRate(17);
  W = floor(width / rez);
  H = floor(height / rez);
  snake = new Snake();
  foodLocation();
}

void foodLocation() {
  int x = floor(random(W));
  int y = floor(random(H));
  food = new PVector(x, y);
}

void keyPressed() {
  if (keyCode == RIGHT) {
    snake.setDir(1, 0);
  } else if (keyCode == LEFT) {
    snake.setDir(-1, 0);
  } else if (keyCode == UP) {
    snake.setDir(0, -1);
  } else if (keyCode == DOWN) {
    snake.setDir(0, 1);
  }
}

void mousePressed() {
  loop();
  reset();
}

void draw() {
  scale(rez);
  background(51);
  snake.render();
  snake.tick();

  if (snake.eat(food)) {
    foodLocation();
  }

  if (snake.endGame()) {
    background(255, 0, 0);
    noLoop();
  }

  noStroke();
  fill(255, 0, 0);
  rect(food.x, food.y, 1, 1);
}
