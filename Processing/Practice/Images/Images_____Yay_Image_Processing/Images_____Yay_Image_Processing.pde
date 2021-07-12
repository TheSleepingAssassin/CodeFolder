PImage fl;

void setup() {
  size(284, 177);

  fl = loadImage("hd flower.jpg");
}

void draw() {
  background(0);

  //image(fl, 0, 0);
  loadPixels();
  fl.loadPixels();
  for (int x = 0; x < width; x++) {
    for (int y = 0; y < height; y++) {
      int loc = x+y*width;
      float b = brightness(fl.pixels[loc]);
      if (b < mouseX) {
        pixels[loc] = color(255);
      } else {
        pixels[loc] = color(0);
      }

      //float r = red(fl.pixels[loc]);
      //float g = green(fl.pixels[loc]);
      //float b = blue(fl.pixels[loc]);
      //float d = dist(mouseX, mouseY, x, y);
      //float factor = map(d, 0, 75, 2, 0);
      //pixels[loc] = color(r * factor, g * factor, b * factor);
    }
  }
  updatePixels();
}
