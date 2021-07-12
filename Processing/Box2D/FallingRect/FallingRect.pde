import shiffman.box2d.*;
import org.jbox2d.collision.shapes.*;
import org.jbox2d.common.*;
import org.jbox2d.dynamics.*;

ArrayList<Boxy> boxys;
ArrayList<Bound> bounds;
Box2DProcessing box2d;

void setup() {
  size(600, 600);
  rectMode(CENTER);
  box2d = new Box2DProcessing(this);
  box2d.createWorld();
  box2d.setGravity(0, -40);

  boxys = new ArrayList<Boxy>();
  bounds = new ArrayList<Bound>();

  bounds.add(new Bound(width / 2 - 100, 100, 400, 10));
  bounds.add(new Bound(width / 2 + 100, 300, 400, 10));
}

void draw() {
  background(51);

  box2d.step();

  if (mousePressed) {
    boxys.add(new Boxy(mouseX, mouseY, 20, 20));
  }

  for (int i = boxys.size() - 1; i >= 0; i--) {
    Boxy b = boxys.get(i);
    b.render();
    if (b.offScreen()) {
      b.killBody();
      boxys.remove(i);
    }
  }

  for (Bound b: bounds) {
    b.render();
  }
}
