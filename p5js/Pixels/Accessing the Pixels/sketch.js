function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(0);
  loadPixels();
  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      let p = (x + y * width) * 4;
      pixels[p + 0] = x;
      pixels[p + 1] = y;
      pixels[p + 2] = 164;
      pixels[p + 3] = 144;
    }
  }
  updatePixels();
}
