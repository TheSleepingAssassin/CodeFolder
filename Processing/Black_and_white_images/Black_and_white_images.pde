PImage flower;

void setup() {
  size(275, 183);
  flower = loadImage("Flower.jpg");
}

void draw() {
  background(0);
  //image(flower, 0, 0);
  loadPixels();
  for (int x = 0; x < width; x++) {
    for (int y = 0; y < height; y++) {
      int loc = x+y*width;
      float b = brightness(flower.pixels[loc]);
      if (b > mouseX) {
        pixels[loc] = color(255);
      } else {
        pixels[loc] = color(0);
      }
    }
  }
  updatePixels();
}
