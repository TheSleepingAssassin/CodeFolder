let bubbles = [];

function setup() {
  createCanvas(600, 400);
for(let i = 0; i < 75; i++) {
  bubbles[i] = new Bubble();
}
}


function draw() {
  background(0, 100, 255);

for(let b of bubbles) {
  b.show();
  b.shake();
  b.ascend();
  b.top();
}
}
