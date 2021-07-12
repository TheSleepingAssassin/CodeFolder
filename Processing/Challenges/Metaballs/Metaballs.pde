Blob[] blobs;

void setup() {
  size(600, 600);
  colorMode(HSB);
  blobs = new Blob[5];
  for (int i = 0; i < blobs.length; i++) {
    blobs[i] = new Blob(random(width), random(height), random(10, 40));
  }
}

void draw() {
  background(51);

  loadPixels();
  for (int x = 0; x < width; x++) {
    for (int y = 0; y < height; y++) {
      int ind = x + y* width;
      float sum = 0;
      for (Blob b : blobs) {
        float d = dist(x, y, b.pos.x, b.pos.y);
        sum += 300 * b.r / d;
      }
      pixels[ind] = color(sum, 255, 255);
    }
  }
  updatePixels();

  for (Blob b : blobs) {
    // b.render();
    b.tick();
  }
}
