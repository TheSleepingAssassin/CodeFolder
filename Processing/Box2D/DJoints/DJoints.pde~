import shiffman.box2d.*;
import org.jbox2d.collision.shapes.*;
import org.jbox2d.common.*;
import org.jbox2d.dynamics.*;
import org.jbox2d.dynamics.joints.*;

Box2DProcessing box2d;
ArrayList<Pair> pairs = new ArrayList<Pair>();

void setup() {
  size(600, 600);
  noStroke();
  box2d = new Box2DProcessing(this);
  box2d.createWorld();
	box2d.setGravity(0, -30);
}

void mousePressed() {
  pairs.add(new Pair(mouseX, mouseY, 10));
}

void draw() {
  background(51);
  box2d.step();
  
  for (Pair p :pairs) {
    p.render();
  }
}
