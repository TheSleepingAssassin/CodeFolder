let angle = 0;
let rSun = 100;
let ex = 160;
let ey = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  translate(width / 2, height / 2);
  noFill();
  stroke(255);
  ellipse(0, 0, 160);
  ellipse(0, 0, 240);
  ellipse(0, 0, 320);
  ellipse(0, 0, 400);
  ellipse(0, 0, 480);
  ellipse(0, 0, 560);
  ellipse(0, 0, 640);
  ellipse(0, 0, 720);
  // Sun
  noStroke();
  fill(255, 150, 0);
  ellipse(0, 0, rSun);
  // Mercury
  push();
  noStroke();
  rotate(angle * 0.008);
  fill(50);
  ellipse(160 / 2, 0, rSun / 10);
  pop();
  // Venus
  push();
  noStroke();
  rotate(angle * 0.007);
  fill(80)
  ellipse(-240 / 2, 0, rSun / 9);
  pop();
  // Earth
  push();
  noStroke();
  rotate(angle * 0.006);
  fill(0, 180, 0);
  ellipse(ex, ey, rSun / 8);
  pop();
  // Mars
  push();
  noStroke();
  rotate(angle * 0.005);
  fill(255, 0, 0);
  ellipse(-400 / 2, 0, rSun / 9);
  pop();
  // Jupiter
  push();
  noStroke();
  rotate(angle * 0.004);
  fill(140, 75, 0);
  ellipse(-480 / 2, 0, rSun / 3);
  pop();
  // Saturn
  push();
  noStroke();
  rotate(angle * 0.003);
  fill(165, 42, 42);
  ellipse(560 / 2, 0, rSun / 5);
  pop();
  // Uranus
  push();
  noStroke();
  rotate(angle * 0.002);
  fill(0, 100, 255);
  ellipse(640 / 2, 0, rSun / 6);
  pop();
  // Neptune
  push();
  noStroke();
  rotate(angle * 0.001);
  fill(0, 150, 255);
  ellipse(-720 / 2, 0, rSun / 5);
  pop();
  angle++;
}
