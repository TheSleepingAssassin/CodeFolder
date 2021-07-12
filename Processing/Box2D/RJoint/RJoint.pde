import shiffman.box2d.*;
import org.jbox2d.common.*;
import org.jbox2d.dynamics.joints.*;
import org.jbox2d.collision.shapes.*;
import org.jbox2d.collision.shapes.Shape;
import org.jbox2d.common.*;
import org.jbox2d.dynamics.*;
import org.jbox2d.dynamics.contacts.*;

Box2DProcessing sh2d;
ArrayList<Circle> circles;
Joint j;

void setup() {
  size(600, 600);
  rectMode(CENTER);
  sh2d = new Box2DProcessing(this);
  sh2d.createWorld();
  
  circles = new ArrayList<Circle>();
  j = new Joint(width / 2, height / 2);
}

void mousePressed() {
  j.toggle();
}

void draw() {
  background(51);
  sh2d.step();
  
  if (random(1) < 0.2) {
    float off = random(-20, 20);
    circles.add(new Circle(width / 2 + off, 30 + off, 8));
  }

  for (int i = circles.size() - 1; i >= 0; i--) {
    Circle c = circles.get(i);
    c.render();
    if (c.out()) {
      circles.remove(i);
      c.killBody();
    }
  }
  j.render();
}
