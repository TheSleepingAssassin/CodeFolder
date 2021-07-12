Vehicle v;

void setup() {
  size(600, 600);
  v = new Vehicle(random(width), random(height), 5);
}

void draw() {
  background(51);
  v.run();
}
