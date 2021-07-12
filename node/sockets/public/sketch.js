let socket;

function setup() {
  createCanvas(windowWidth, windowHeight);
  socket = io.connect('https://localhost:3000');
}

function draw() {
  background(0);
  fill(255);
  ellipse(mouseX, mouseY, 20, 20);
}