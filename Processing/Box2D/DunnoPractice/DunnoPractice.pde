import shiffman.box2d.*;
import org.jbox2d.collision.shapes.*;
import org.jbox2d.common.*;
import org.jbox2d.dynamics.*;

Box2DProcessing box2d;
ArrayList<Rect> rects = new ArrayList<Rect>();
ArrayList<Bound> bounds = new ArrayList<Bound>();
float size = 20;

void setup() {
  //size(600, 600);
  fullScreen();
  rectMode(CENTER);
  noStroke();
  box2d = new Box2DProcessing(this);
  box2d.createWorld();
  box2d.setGravity(0, -30);

  float d = 20;
// DOWN
  bounds.add(new Bound(width / 2, height + d / 2, width, d));
// RIGHT
  bounds.add(new Bound(width + d / 2, height / 2, d, height));
// UP
  bounds.add(new Bound(width / 2, -(d / 2), width, d));
// LEFT
  bounds.add(new Bound(-(d / 2), height / 2, d, height));
}

void mousePressed() {
  rects.add(new Rect(mouseX, mouseY, size, size));
}

void mouseDragged() {
  rects.add(new Rect(mouseX, mouseY, size, size));
}

void draw() {
  background(51);
  box2d.step();
  
  //if (mousePressed) {
  //  rects.add(new Rect(mouseX, mouseY, size, size));
  //}

  // rects.add(new Rect(width / 2, 50, random(10, 50), random(10, 50)));

  for (Bound b : bounds) {
    b.render();
  }

  for (int i = rects.size() - 1; i >= 0; i--) {
    Rect r = rects.get(i);
    r.render();
    if (r.out()) {
      r.killBody();
      rects.remove(i);
    }
  }
}
