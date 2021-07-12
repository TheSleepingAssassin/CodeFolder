import processing.core.*; 
import processing.data.*; 
import processing.event.*; 
import processing.opengl.*; 

import shiffman.box2d.*; 
import org.jbox2d.collision.shapes.*; 
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

public class FallingRect extends PApplet {






ArrayList<Boxy> boxys;
ArrayList<Bound> bounds;
Box2DProcessing box2d;

public void setup() {
  
  rectMode(CENTER);
  box2d = new Box2DProcessing(this);
  box2d.createWorld();

  boxys = new ArrayList<Boxy>();
  bounds = new ArrayList<Bound>();

  bounds.add(new Bound(width / 2 - 100, 100, 400, 10));
  bounds.add(new Bound(width / 2 + 100, 300, 400, 10));
}

public void draw() {
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
class Bound {
  float x, y, w, h;
  BodyDef bd;
  Body b;
  PolygonShape ps;
  FixtureDef fd;
  Bound(float x, float y, float w, float h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;

    bd = new BodyDef();
    bd.position.set(box2d.coordPixelsToWorld(this.x, this.y));
    bd.type = BodyType.STATIC;

    b = box2d.createBody(bd);
    
    ps = new PolygonShape();
    float box2dw = box2d.scalarPixelsToWorld(this.w / 2);
    float box2dh = box2d.scalarPixelsToWorld(this.h / 2);
    ps.setAsBox(box2dw, box2dh);
    
    b.createFixture(ps, 1);
  }
  
  public void render() {
    Vec2 pos = box2d.getBodyPixelCoord(b);
    pushMatrix();
    translate(pos.x, pos.y);
    fill(0);
    noStroke();
    rect(0, 0, this.w, this.h);
    popMatrix();
  }
}
class Boxy {
  float x, y, w, h;
  BodyDef bd;
  Body body;
  PolygonShape ps;
  FixtureDef fd;
  Boxy(float x, float y, float w, float h) {
    this.w = w;
    this.h = h;

    bd = new BodyDef();
    bd.type = BodyType.DYNAMIC;
    bd.position.set(box2d.coordPixelsToWorld(x, y));

    body = box2d.createBody(bd);

    ps = new PolygonShape();
    float box2dw = box2d.scalarPixelsToWorld(w / 2);
    float box2dh = box2d.scalarPixelsToWorld(h / 2);
    ps.setAsBox(box2dw, box2dh);

    fd = new FixtureDef();
    fd.shape = ps;
    fd.density = 1;
    fd.friction = 0.3f;
    fd.restitution = 0.5f;

    body.createFixture(fd);
  }
  
  public boolean offScreen() {
    return (x > width + w || x < -w || y > height + h || y < -h);
  }
  
  public void killBody() {
    box2d.destroyBody(body);
  }

  public void render() {

    Vec2 pos = box2d.getBodyPixelCoord(body);
    float a = body.getAngle();

    pushMatrix();
    translate(pos.x, pos.y);
    rotate(-a);
    fill(255);
    rect(0, 0, w, h);
    popMatrix();
  }
}
  public void settings() {  size(600, 600); }
  static public void main(String[] passedArgs) {
    String[] appletArgs = new String[] { "FallingRect" };
    if (passedArgs != null) {
      PApplet.main(concat(appletArgs, passedArgs));
    } else {
      PApplet.main(appletArgs);
    }
  }
}
