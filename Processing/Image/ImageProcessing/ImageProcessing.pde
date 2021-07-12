PImage img;

void setup() {
  size(683, 522);
  img = loadImage("Miyu Drawing.PNG");
  background(51);
}

void draw() {
  for (int i = 0; i < 100; i++) {
    float x = random(width);
    float y = random(height);
    color c = img.get(int(x), int(y));
    fill(c);
    noStroke();
    ellipse(x, y, 16, 16);
  }
}
