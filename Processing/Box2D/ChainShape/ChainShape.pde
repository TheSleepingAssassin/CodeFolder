import shiffman.box2d.*;
import org.jbox2d.collision.shapes.*;
import org.jbox2d.common.*;
import org.jbox2d.dynamics.*;

Box2DProcessing box2d;
ArrayList<Boxy> boxys = new ArrayList<Boxy>();
// ArrayList<Bound> bounds = new ArrayList<Bound>();

void setup() {
  size(600, 600);
  rectMode(CENTER);
  box2d = new Box2DProcessing(this);
  box2d.createWorld();
  box2d.setGravity(0, -30);

  // float r = 20;
  // bounds.add(new Bound(width / 2, height + r, width, r));
}

void draw() {
  background(51);
  box2d.step();

  // boxys.add(new Rect(width / 2, 50, random(10, 50), random(10, 50)));

  if (mousePressed) {
    boxys.add(new Boxy(mouseX, mouseY, random(10, 50), random(10, 50)));
  }

  // for (Bound b : bounds) {
  //   b.render();
  // }

  for (int i = boxys.size() - 1; i >= 0; i--) {
    Boxy r = boxys.get(i);
    r.render();
    if (r.out()) {
      r.killBody();
      boxys.remove(i);
    }
  }
}
