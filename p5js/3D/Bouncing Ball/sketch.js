let angle = 0;
let camX = 0;
let camY = 0;
let bx = 0;
let by = 0;
let bxspeed = 5;
let byspeed = 4;
let c = 1;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  angleMode(DEGREES);
}

function keyPressed() {
  if (key === 'c') {
    c = 2;
  }
  if (key === 'r') {
    c = 1;
  }
  if (key === ' ') {
    switch (move) {
      case 0:
      
    }
  }
}

function draw() {
  ambientLight(255);
  background(255);
  noStroke();
  camera(camX, camY, 1000, 0, -100, 0, 0, 1, 0);
  ambientMaterial(0);
  // Sphere
  push();
  noStroke();
  translate(bx, by, 0);
  ambientMaterial(255, 0, 0);
  sphere(50);
  pop();

  // Floor
  push();
  translate(0, 100);
  rotateX(90);
  switch (c) {
    case 1:
      ambientMaterial(0);
      break;
    case 2:
      ambientMaterial(100, 200, 0);
      break;
  }
  plane(500, 500);
  pop();
  // Back Wall
  push();
  translate(0, -150, -250);
  switch (c) {
    case 1:
    ambientMaterial(0);
    break;
    case 2:
    ambientMaterial(100, 0, 200);
    break;
  }
  // plane(500, 500);
  pop();
  // Right Wall
  push()
  rotateY(90);
  translate(0, -150, 250);
  switch (c) {
    case 1:
    ambientMaterial(0);
    break;
    case 2:
    ambientMaterial(10, 21, 255);
    break;
  }
  // plane(500, 500);
  pop();
  // Left Wall
  push();
  rotateY(-90);
  translate(0, -150, 250);
  switch (c) {
    case 1:
    ambientMaterial(0);
    break;
    case 2:
    ambientMaterial(156, 202, 50);
    break;
  }
  // plane(500, 500);
  pop();
  // Ceiling
  push();
  rotateX(90);
  translate(0, 0, 400);
  switch (c) {
    case 1:
    ambientMaterial(0);
    break;
    case 2:
    ambientMaterial(193, 70, 200);
    break;
  }
  // plane(500, 500);
  pop();
  angle += 0.7;
  bx += bxspeed;
  by += byspeed;

  if ((bx + 50) >= 250 || (bx - 50) <= -250) {
    bxspeed *= -1;
  }
  if ((by + 50) >= 100 || (by - 50) <= -400) {
    byspeed *= -1;
  }
}
