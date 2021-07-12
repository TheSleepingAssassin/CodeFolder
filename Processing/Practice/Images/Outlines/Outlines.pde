PImage flower;

void setup() {
  size(284, 177);
  flower = loadImage("hd flower.jpg");
}

void draw() {
  background(0);
  image(flower, 0, 0);

  loadPixels();
  for (int x = 0; x < width-1; x++) {
    for (int y = 0; y < height; y++) {
      int loc1 = x + y * width;
      int loc2 = (x + 1) + y * width;

      float b1 = brightness(flower.pixels[loc1]);
      float b2 = brightness(flower.pixels[loc2]);

      float diff = abs(b1 - b2);

      pixels[loc1] = color(diff);
    }
  }
  updatePixels();
}
