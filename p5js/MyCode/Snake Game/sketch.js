let snake;
let rez = 30;
let w;
let h;
let food;

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(10);
  snake = new Snake();
  w = floor(width / rez);
  h = floor(height / rez);
  foodLocation();
}

function foodLocation() {
  let x = floor(random(w));
  let y = floor(random(h));
  food = createVector(x, y);
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    snake.setDir(0, -1);
  } else if (keyCode === RIGHT_ARROW) {
    snake.setDir(1, 0);
  } else if (keyCode === DOWN_ARROW) {
    snake.setDir(0, 1);
  } else if (keyCode === LEFT_ARROW) {
    snake.setDir(-1, 0);
  } else if (key === ' ') {
    snake.grow();
  }
}

function draw() {
  background(0);
  scale(rez);
  if (snake.eat(food)) {
    foodLocation();
  }
  snake.show();
  snake.update();
  if (snake.endGame(w, h)) {
    console.log("YOU'RE IN THE ENDGAME NOW");
    background(255, 0, 0);
    noLoop();
  }

  noStroke();
  fill(255, 0, 0);
  rect(food.x, food.y, 1, 1);
}
