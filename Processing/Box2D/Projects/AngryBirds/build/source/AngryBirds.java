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

import java.util.HashMap; 
import java.util.ArrayList; 
import java.io.File; 
import java.io.BufferedReader; 
import java.io.PrintWriter; 
import java.io.InputStream; 
import java.io.OutputStream; 
import java.io.IOException; 

public class AngryBirds extends PApplet {









Box2DProcessing box2d;
Spring spring;
ArrayList<Box> bounds;
ArrayList<Box> boxes;
Box b;

public void setup() {
  
  rectMode(CENTER);
  noStroke();
  noFill();
  box2d = new Box2DProcessing(this);
  box2d.createWorld();
  box2d.setGravity(0, -50);

  bounds = new ArrayList<Box>();
  boxes = new ArrayList<Box>();
  b = new Box(width / 2, height / 2, 20, 20, false, true);

  float r = 20;
  bounds.add(new Box(width / 2, height, width, r, true, false));
  bounds.add(new Box(width, height / 2, r, height, true, false));
  bounds.add(new Box(width / 2, 0, width, r, true, false));
  bounds.add(new Box(0, height / 2, r, height, true, false));

  for (int i = 0; i < 20; i++) {
    float rb = 20;
    boxes.add(new Box(width / 4 * 3, (height - rb) - i * rb, rb, rb, false, false));
  }
  spring = new Spring();
}

public void mouseReleased() {
  spring.destroy();
}

public void mousePressed() {
  if (b.contains(mouseX, mouseY)) {
    spring.bind(mouseX,mouseY,b);
  }
}

public void draw() {
  background(51);
  box2d.step();

  spring.update(mouseX,mouseY);

  for (Box b : bounds) {
    b.render();
  }
  b.render();

  for (Box b : boxes) {
    b.render();
  }
}
class Box {
  Body b;
  float w, h;
  boolean sord, yes;
  Box(float x, float y, float w, float h, boolean staticc, boolean yes) {
    this.w = w;
    this.h = h;
    this.sord = staticc;
    this.yes = yes;

    makeBody(new Vec2(x, y), w, h);
  }

  public boolean contains(float x, float y) {
    Vec2 worldPoint = box2d.coordPixelsToWorld(x, y);
    Fixture f = b.getFixtureList();
    boolean inside = f.testPoint(worldPoint);
    return inside;
  }

  public void killBody() {
    box2d.destroyBody(b);
  }

  public void render() {
    Vec2 pos = box2d.getBodyPixelCoord(b);
    float a = b.getAngle();

    pushMatrix();
    translate(pos.x, pos.y);
    rotate(-a);
    if (sord) {
      noFill();
      stroke(255);
    } else {
      fill(255);
      stroke(0);
    }

    if (yes) {
      fill(255, 0, 0);
    }
    rect(0, 0, w, h);
    popMatrix();
  }

  public void makeBody(Vec2 pos, float w, float h) {
    BodyDef bd = new BodyDef();
    if (sord) {
      bd.type = BodyType.STATIC;
    } else {
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
class Spring {

  MouseJoint mouseJoint;

  Spring() {
    mouseJoint = null;
  }

  public void update(float x, float y) {
    if (mouseJoint != null) {
      Vec2 mouseWorld = box2d.coordPixelsToWorld(x,y);
      mouseJoint.setTarget(mouseWorld);
    }
  }

  public void render() {
    if (mouseJoint != null) {
      Vec2 v1 = new Vec2(0,0);
      mouseJoint.getAnchorA(v1);
      Vec2 v2 = new Vec2(0,0);
      mouseJoint.getAnchorB(v2);
      v1 = box2d.coordWorldToPixels(v1);
      v2 = box2d.coordWorldToPixels(v2);
      stroke(0);
      strokeWeight(1);
      line(v1.x,v1.y,v2.x,v2.y);
    }
  }

  public void bind(float x, float y, Box box) {
    MouseJointDef md = new MouseJointDef();
    md.bodyA = box2d.getGroundBody();
    md.bodyB = box.b;
    Vec2 mp = box2d.coordPixelsToWorld(x,y);
    md.target.set(mp);
    md.maxForce = 1000.0f * box.b.m_mass;
    md.frequencyHz = 5.0f;
    md.dampingRatio = 0.9f;

    mouseJoint = (MouseJoint) box2d.world.createJoint(md);
  }

  public void destroy() {
    if (mouseJoint != null) {
      box2d.world.destroyJoint(mouseJoint);
      mouseJoint = null;
    }
  }
}
  public void settings() {  size(600, 600); }
  static public void main(String[] passedArgs) {
    String[] appletArgs = new String[] { "AngryBirds" };
    if (passedArgs != null) {
      PApplet.main(concat(appletArgs, passedArgs));
    } else {
      PApplet.main(appletArgs);
    }
  }
}
