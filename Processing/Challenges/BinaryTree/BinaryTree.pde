import shiffman.box2d.*;
import org.jbox2d.common.*;
import org.jbox2d.dynamics.*;
import org.jbox2d.dynamics.joints.*;
// import org.jbox2d.dynamics.joints.*;
// import org.jbox2d.collision.*;
import org.jbox2d.collision.shapes.*;
// import org.jbox2d.dynamics.contacts.*;

Tree tree;
Box2DProcessing sh2d;

void setup() {
  size(600, 600);
  sh2d = new Box2DProcessing(this);
  sh2d.createWorld();
  background(51);
  tree = new Tree();
  for (int i = 0; i < 100; i++) {
    tree.addValue(floor(random(1, 10)));
  }
  println(tree);
}

void draw() {
 background(51);
 sh2d.step();
 tree.traverse();
}
