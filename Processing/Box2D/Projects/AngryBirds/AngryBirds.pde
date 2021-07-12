import shiffman.box2d.*;
import org.jbox2d.common.*;
import org.jbox2d.dynamics.joints.*;
import org.jbox2d.collision.shapes.*;
import org.jbox2d.collision.shapes.Shape;
import org.jbox2d.common.*;
import org.jbox2d.dynamics.*;

Box2DProcessing box2d;
Spring spring;
ArrayList<Box> bounds;
ArrayList<Box> boxes;
Box b;

void setup() {
  size(600, 600);
  rectMode(CENTER);
  noStroke();
  noFill();
  box2d = new Box2DProcessing(this);
  box2d.createWorld();
  box2d.setGravity(0, -50);

  bounds = new ArrayList<Box>();
  boxes = new ArrayList<Box>();
  b = new Box(width / 2, height / 2, 20, 20, false, true);

  float r = 20;
  bounds.add(new Box(width / 2, height, width, r, true, false));
  bounds.add(new Box(width, height / 2, r, height, true, false));
  bounds.add(new Box(width / 2, 0, width, r, true, false));
  bounds.add(new Box(0, height / 2, r, height, true, false));

  for (int i = 0; i < 20; i++) {
    float rb = 20;
    boxes.add(new Box(width / 4 * 3, (height - rb) - i * rb, rb, rb, false, false));
  }
  spring = new Spring();
}

void mouseReleased() {
  spring.destroy();
}

void mousePressed() {
  if (b.contains(mouseX, mouseY)) {
    spring.bind(mouseX,mouseY,b);
  }
}

void draw() {
  background(51);
  box2d.step();

  spring.update(mouseX,mouseY);

  for (Box b : bounds) {
    b.render();
  }
  b.render();

  for (Box b : boxes) {
    b.render();
  }
}
