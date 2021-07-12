import processing.core.*; 
import processing.data.*; 
import processing.event.*; 
import processing.opengl.*; 

import shiffman.box2d.*; 
import org.jbox2d.common.*; 
import org.jbox2d.dynamics.joints.*; 
import org.jbox2d.collision.shapes.*; 
import org.jbox2d.collision.shapes.Shape; 
import org.jbox2d.common.*; 
import org.jbox2d.dynamics.*; 
import controlP5.*; 

import java.util.HashMap; 
import java.util.ArrayList; 
import java.io.File; 
import java.io.BufferedReader; 
import java.io.PrintWriter; 
import java.io.InputStream; 
import java.io.OutputStream; 
import java.io.IOException; 

public class MessinAround extends PApplet {










Box2DProcessing box2d;
ArrayList<Box> boxes;
ArrayList<Box> bounds;
Spring s;
float r = 20;

ControlP5 resetB;

public void setup()
{
  
  
  rectMode(CENTER);
  box2d = new Box2DProcessing(this);
  box2d.createWorld();
  box2d.setGravity(0, -50);

  resetWorld();
  resetB = new ControlP5(this);

  resetB.addButton("reset").setPosition(0, height - 10).setSize(100, 10);
}

public void mouseReleased()
{
  s.destroy();
}

public void mousePressed()
{
  for (Box b : boxes)
  {
    if (b.contains(mouseX, mouseY))
    {
      s.bind(mouseX, mouseY, b);
    }
  }
}

public void draw()
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

public void resetWorld()
{
  bounds = new ArrayList<Box>();
  boxes = new ArrayList<Box>();

  s = new Spring();
  bounds.add(new Box(width / 2, height, width, r, true));
  bounds.add(new Box(width, height / 2, r, height, true));
  bounds.add(new Box(width / 2, 0, width, r, true));
  bounds.add(new Box(0, height / 2, r, width, true));
}

public void reset()
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
class Box
{
  Body b;
  float w, h;
  boolean stats;
  Box(float x, float y, float w, float h, boolean stats)
  {
    this.w = w;
    this.h = h;
    this.stats = stats;

    makeBody(new Vec2(x, y), w, h);
  }

  public void killBody()
  {
    box2d.destroyBody(b);
  }

  public boolean contains(float x, float y)
  {
    Vec2 wP = box2d.coordPixelsToWorld(x, y);
    Fixture f = b.getFixtureList();
    boolean inside = f.testPoint(wP);
    return inside;
  }

  public void render()
  {
    Vec2 pos = box2d.getBodyPixelCoord(b);
    float a = b.getAngle();

    pushMatrix();
    translate(pos.x, pos.y);
    rotate(-a);
    fill(255);
    stroke(0);
    if (stats)
    {
      stroke(255);
      noFill();
    }

    rect(0, 0, w, h);
    popMatrix();
  }

  public void makeBody(Vec2 pos, float w, float h)
  {
    BodyDef bd = new BodyDef();
    if (stats)
    {
      bd.type = BodyType.STATIC;
    }

    else
    {
      bd.type = BodyType.DYNAMIC;
    }
    bd.position.set(box2d.coordPixelsToWorld(pos.x, pos.y));

    b = box2d.createBody(bd);

    PolygonShape ps = new PolygonShape();
    float box2dw = box2d.scalarPixelsToWorld(w / 2);
    float box2dh = box2d.scalarPixelsToWorld(h / 2);
    ps.setAsBox(box2dw, box2dh);

    b.createFixture(ps, 1);
  }
}
class Spring
{
  MouseJoint mj;
  Spring()
  {
    mj = null;
  }

  public void update(float x, float y)
  {
    if (mj != null)
    {
      Vec2 mW = box2d.coordPixelsToWorld(x, y);
      mj.setTarget(mW);
    }
  }

  public void bind(float x, float y, Box b)
  {
    MouseJointDef md = new MouseJointDef();
    md.bodyA = box2d.getGroundBody();
    md.bodyB = b.b;
    Vec2 mp = box2d.coordPixelsToWorld(x, y);
    md.target.set(mp);
    md.maxForce = 1000.0f * b.b.m_mass;
    md.frequencyHz = 5.0f;
    md.dampingRatio = 0.9f;

    mj = (MouseJoint) box2d.world.createJoint(md);
  }

  public void destroy()
  {
    if (mj != null)
    {
      box2d.world.destroyJoint(mj);
      mj = null;
    }
  }
}
  public void settings() {  size(600, 600);  smooth(); }
  static public void main(String[] passedArgs) {
    String[] appletArgs = new String[] { "MessinAround" };
    if (passedArgs != null) {
      PApplet.main(concat(appletArgs, passedArgs));
    } else {
      PApplet.main(appletArgs);
    }
  }
}
