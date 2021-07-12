PImage flower;

void setup() {
  size(284, 177);
  flower = loadImage("hd flower.jpg");
  background(0);
}

void draw() {
 //image(flower, 0, 0);
 for(int i = 0; i < 1000; i++) {
  float x = random(width);
  float y = random(height);
  color c = flower.get(int(x), int(y));
  noStroke();
  fill(c);
  ellipse(x, y, 1, 1);
 }
}
