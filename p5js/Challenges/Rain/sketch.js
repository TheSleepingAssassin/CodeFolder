let drops = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  drops.push(new Drop());
  for (let d of drops) {
    d.show();
    d.update();
    d.applyG();
  }
  for (let i = drops.length - 1; i >= 0; i--) {
    if (drops[i].finished()) {
      drops[i].splice(i, 1);
    }
  }
}
