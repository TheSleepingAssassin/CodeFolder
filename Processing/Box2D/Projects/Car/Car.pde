import shiffman.box2d.*;
import org.jbox2d.common.*;
import org.jbox2d.collision.shapes.*;
import org.jbox2d.dynamics.*;

Box2DProcessing sh2d;
ArrayList<Box> bounds;

void setup() {
  size(1200, 600);
  rectMode(CENTER);
  sh2d = new Box2DProcessing(this);
  sh2d.createWorld();
  sh2d.setGravity(0, -50);

  bounds = new ArrayList<Box>();

  float r = 20;
  bounds.add(new Box(width / 2, height, width, r, true));
  bounds.add(new Box(width, height / 2, r, height, true));
  bounds.add(new Box(width / 2, 0, width, r, true));
  bounds.add(new Box(0, height / 2, r, height, true));
}

void draw() {
  background(51);
  sh2d.step();

  for (Box b : bounds) {
    b.render();
  }
}
