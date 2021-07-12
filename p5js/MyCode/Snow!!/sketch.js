let letitsnow = [];
let g;

function setup() {
  createCanvas(windowWidth, windowHeight);
  g = createVector(0, 0.01);
}

function draw() {
  background(0);
  letitsnow.push(new Snow());
  for (snow of letitsnow) {
    snow.update();
    snow.applyForce(g);
    snow.render();
  }
  for (let i = letitsnow.length - 1; i >= 0; i--) {
    if (letitsnow[i].pos.y > height - letitsnow[i].r) {
      letitsnow.splice(i, 1);
    }
  }
}
