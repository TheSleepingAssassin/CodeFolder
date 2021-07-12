import shiffman.box2d.*;
import org.jbox2d.collision.shapes.*;
import org.jbox2d.common.*;
import org.jbox2d.dynamics.*;

Box2DProcessing box2d;
ArrayList<Shape> shapes = new ArrayList<Shape>();
ArrayList<Bound> bounds = new ArrayList<Bound>();

void setup() {
  size(600, 600);
  rectMode(CENTER);
  noStroke();
  box2d = new Box2DProcessing(this);
  box2d.createWorld();
  box2d.setGravity(0, -40);

  float r = 20;

  // DOWN
  bounds.add(new Bound(width / 2, height + r, width, r));
  // RIGHT
  bounds.add(new Bound(width + r, height / 2, r, height));
  // UP
  bounds.add(new Bound(width / 2, -r, width, r));
  // LEFT
  bounds.add(new Bound(-r, height / 2, r, height));
}

void draw() {
  background(51);
  box2d.step();

  if (mousePressed) {
    shapes.add(new Shape(mouseX, mouseY));
  }

  for (Bound b : bounds) {
    b.render();
  }

  for (Shape s : shapes) {
    s.render();
  }
}
