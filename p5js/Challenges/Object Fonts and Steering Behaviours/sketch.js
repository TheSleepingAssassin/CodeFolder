let font;
let vehicles = [];

function preload() {
  font = loadFont('data/calibril.ttf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  // textFont(font);
  // textSize(135);
  // fill(255);
  // noStroke();
  // text('JAVASCRIPT', 240, 400);
  textAlign(CENTER, CENTER);
  let points = font.textToPoints('PREM NAIK', 70, 400, 260);
  for (let pt of points) {
    vehicles.push(new Vehicle(pt.x, pt.y));
    // stroke(255);
    // strokeWeight(8);
    // point(pt.x, pt.y);
  }
}

function draw() {
  background(51);
  for (let v of vehicles) {
    v.show();
    v.update();
    // v.edges();
    v.behaviour();
  }
}