ArrayList<UPP> ups;

public void setup() {
  size(650, 650);
  
  colorMode(HSB);
  
  ups = new ArrayList<UPP>();
  
}

public void draw() {
  background(0);
  
  ups.add(new UPP(new PVector(random(width), random(height + 100, height + 200)), 10));
  
  for (UPP up : ups) {
    up.run();
    up.applyForce(new PVector(0, -0.7));
  }
  
}
