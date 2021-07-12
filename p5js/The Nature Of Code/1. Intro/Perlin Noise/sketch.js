var inc = 0.02;
var start = 0;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  beginShape();
  var xoff = start;
  for (let x = 0; x < width; x++) {
    stroke(255);
    noFill();
    //var y = random(height);
    var y = noise(xoff) * height;
    vertex(x, y);

    xoff += inc;
  }
  //noLoop();
  endShape();
  start += inc;
}
