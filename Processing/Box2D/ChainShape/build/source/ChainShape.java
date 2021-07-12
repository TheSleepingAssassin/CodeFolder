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

public class ChainShape extends PApplet {






Box2DProcessing box2d;
ArrayList<Boxy> boxys = new ArrayList<Boxy>();
// ArrayList<Bound> bounds = new ArrayList<Bound>();

public void setup() {
  
  rectMode(CENTER);
  box2d = new Box2DProcessing(this);
  box2d.createWorld();
  box2d.setGravity(0, -30);

  // float r = 20;
  // bounds.add(new Bound(width / 2, height + r, width, r));
}

public void draw() {
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
class Boxy {
  float w, h;
  BodyDef bd;
  Body body;
  PolygonShape ps;
  Boxy(float x, float y, float w, float h) {
    this.w = w;
    this.h = h;

    BodyDef bd = new BodyDef();
    bd.type = BodyType.DYNAMIC;
    bd.position.set(box2d.coordPixelsToWorld(x, y));
    body = box2d.createBody(bd);

    PolygonShape ps = new PolygonShape();
    float box2dW = box2d.scalarPixelsToWorld(w/2);
    float box2dH = box2d.scalarPixelsToWorld(h/2);
    ps.setAsBox(box2dW, box2dH);

    FixtureDef fd = new FixtureDef();
    fd.shape = ps;
    fd.density = 1;
    fd.friction = 0.3f;
    fd.restitution = 0.5f;

    body.createFixture(fd);
 }

 public boolean out() {
   Vec2 pos = box2d.getBodyPixelCoord(body);
   return (pos.x > width + w || pos.x < -w || pos.y > height + h || pos.y < -h);
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
    stroke(0);
    fill(255);
    rect(0, 0, this.w, this.h);
    popMatrix();
  }
}
  public void settings() {  size(600, 600); }
  static public void main(String[] passedArgs) {
    String[] appletArgs = new String[] { "ChainShape" };
    if (passedArgs != null) {
      PApplet.main(concat(appletArgs, passedArgs));
    } else {
      PApplet.main(appletArgs);
    }
  }
}
