let balls = [];

function setup() {
  createCanvas(600, 400);
  for (var i = 0; i < 100; i++) {
    let b = new Ball(width / 2, height / 2);
    balls.push(b);
  }

}

// function mousePressed() {
//   let b = new Ball(mouseX, mouseY);
// }

function draw() {
  background(0);
  for (let b of balls) {
    b.show();
    b.update();
    b.bounce();
  }
}
