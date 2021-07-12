import java.util.*;

Vehicle v;
ArrayList<PVector> food = new ArrayList<PVector>();
ArrayList<PVector> poison = new ArrayList<PVector>();

void setup() {
  size(800, 600);
  v = new Vehicle();
  for (int i = 0; i < 40; i++) {
    float x = random(width);
    float y = random(height);
    food.add(new PVector(x, y));
  }

  for (int i = 0; i < 20; i++) {
    float x = random(width);
    float y = random(height);
    poison.add(new PVector(x, y));
  }
}

void draw() {
  background(51);
  for (int i = 0; i < food.size(); i++) {
    fill(0, 255, 0);
    noStroke();
    ellipse(food.get(i).x, food.get(i).y, 4, 4);
  }

  for (int i = 0; i < poison.size(); i++) {
    fill(255, 0, 0);
    noStroke();
    ellipse(poison.get(i).x, poison.get(i).y, 4, 4);
  }

  v.render();
  v.update();
  v.behaviours(food, poison);
  // for (int i = 0; i < food.size(); i++) {
  //   v.eat(food);
  // }
}
