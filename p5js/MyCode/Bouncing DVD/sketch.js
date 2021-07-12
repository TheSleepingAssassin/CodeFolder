let x, y;
let dvd;
let xspeed, yspeed;
let r, g, b;

function preload() {
  dvd = loadImage('data/DVDLogo.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = random(width - dvd.width);
  y = random(height - dvd.height);
  xspeed = 3;
  yspeed = 3;
}

function changeColor() {
  r = random(100, 256);
  g = random(100, 256);
  b = random(100, 256);
  tint(r, g, b);
}

function move() {
  x += xspeed;
  y += yspeed;
}

function bounce() {
  if (x >= width - dvd.width || x <= 0) {
    xspeed = -xspeed;
    changeColor();
  }

  if (y >= height - dvd.height || y <= 0) {
    yspeed = -yspeed;
    changeColor();
  }
}

function draw() {
  background(0);
  image(dvd, x, y);
  move();
  bounce();
}
