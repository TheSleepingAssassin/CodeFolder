import processing.core.*; 
import processing.data.*; 
import processing.event.*; 
import processing.opengl.*; 

import shiffman.box2d.*; 
import org.jbox2d.common.*; 
import org.jbox2d.collision.shapes.*; 
import org.jbox2d.dynamics.*; 

import java.util.HashMap; 
import java.util.ArrayList; 
import java.io.File; 
import java.io.BufferedReader; 
import java.io.PrintWriter; 
import java.io.InputStream; 
import java.io.OutputStream; 
import java.io.IOException; 

public class Car extends PApplet {






Box2DProcessing sh2d;
ArrayList<Box> bounds;

public void setup() {
  
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

public void draw() {
  background(51);
  sh2d.step();

  for (Box b : bounds) {
    b.render();
  }
}
class Box {
  Body b;
  float w, h;
  boolean stat;
  Box(float x, float y, float w, float h, boolean stat) {
    this.w = w;
    this.h = h;
    this.stat = stat;

    makeBody(new Vec2(x, y), w, h, stat);
  }

  public void render() {
    Vec2 pos = sh2d.getBodyPixelCoord(b);
    float a = b.getAngle();

    pushMatrix();
    translate(pos.x, pos.y);
    rotate(-a);
    fill(255);
    if (stat) {
      noFill();
      stroke(255);
    } else {
      stroke(0);
    }
    rect(0, 0, w, h);
    popMatrix();
  }

  public void makeBody(Vec2 pos, float w, float h, boolean stat) {
    BodyDef bd = new BodyDef();
    if (stat) {
      bd.type = BodyType.STATIC;
    } else {
      bd.type = BodyType.DYNAMIC;
    }
    bd.position.set(sh2d.coordPixelsToWorld(pos.x, pos.y));

    b = sh2d.createBody(bd);

    PolygonShape ps = new PolygonShape();
    float box2dw = sh2d.scalarPixelsToWorld(w / 2);
    float box2dh = sh2d.scalarPixelsToWorld(h / 2);
    ps.setAsBox(box2dw, box2dh);

    b.createFixture(ps, 1);
  }
}
  public void settings() {  size(1200, 600); }
  static public void main(String[] passedArgs) {
    String[] appletArgs = new String[] { "Car" };
    if (passedArgs != null) {
      PApplet.main(concat(appletArgs, passedArgs));
    } else {
      PApplet.main(appletArgs);
    }
  }
}
