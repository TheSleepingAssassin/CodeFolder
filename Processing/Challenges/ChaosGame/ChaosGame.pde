ArrayList<PVector> points = new ArrayList<PVector>();

float x, y;
PVector current;

void setup() {
  size(600, 600);
  reset();
}

void reset() {
  for (int i = 0; i < 3; i++) {
    PVector v = new PVector(random(width), random(height));
    points.add(v);
  }
  current = new PVector(random(width), random(height));

  background(51);
  stroke(255);
  strokeWeight(4);
  for (PVector p : points) {
    point(p.x, p.y);
  }
}

void draw() {
  if (frameCount % 100 == 0) {
    reset();
  }

  for (int i = 0; i < 500; i++) {
    strokeWeight(2);
    stroke(255, 0, 255);
    float rand = random(points.size());
    PVector next = points.get(int(rand));
    current.x = lerp(current.x, next.x, 0.5);
    current.y = lerp(current.y, next.y, 0.5);
    point(current.x, current.y);
  }
}
