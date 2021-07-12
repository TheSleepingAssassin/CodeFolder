import shiffman.box2d.*;
import org.jbox2d.common.*;
import org.jbox2d.dynamics.joints.*;
import org.jbox2d.collision.shapes.*;
import org.jbox2d.collision.shapes.Shape;
import org.jbox2d.common.*;
import org.jbox2d.dynamics.*;
import controlP5.*;

Box2DProcessing box2d;
ArrayList<Box> boxes;
ArrayList<Box> bounds;
Spring s;
float r = 20;

ControlP5 resetB;

void setup()
{
  size(600, 600);
  smooth();
  rectMode(CENTER);
  box2d = new Box2DProcessing(this);
  box2d.createWorld();
  box2d.setGravity(0, -50);

  resetWorld();
  resetB = new ControlP5(this);

  resetB.addButton("reset").setPosition(0, height - 10).setSize(100, 10);
}

void mouseReleased()
{
  s.destroy();
}

void mousePressed()
{
  for (Box b : boxes)
  {
    if (b.contains(mouseX, mouseY))
    {
      s.bind(mouseX, mouseY, b);
    }
  }
}

void draw()
{
  background(51);
  box2d.step();

  if (mousePressed && mouseButton == RIGHT)
  {
    boxes.add(new Box(mouseX, mouseY, r, r, false));
  }

  s.update(mouseX, mouseY);

  for (Box b : boxes)
  {
    b.render();
  }

  for (Box b : bounds)
  {
    b.render();
  }
}

void resetWorld()
{
  bounds = new ArrayList<Box>();
  boxes = new ArrayList<Box>();

  s = new Spring();
  bounds.add(new Box(width / 2, height, width, r, true));
  bounds.add(new Box(width, height / 2, r, height, true));
  bounds.add(new Box(width / 2, 0, width, r, true));
  bounds.add(new Box(0, height / 2, r, width, true));
}

void reset()
{
  if (boxes.size() > 0)
  {
    for (Box b : boxes)
    {
      b.killBody();
    }
  }

  if (bounds.size() > 0)
  {
    for (Box b : bounds)
    {
      b.killBody();
    }
  }

    bounds.clear();
    boxes.clear();
    resetWorld();
}
