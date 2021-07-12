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

public class ComplexShapes extends PApplet {






Box2DProcessing box2d;
ArrayList<Shape> shapes = new ArrayList<Shape>();
ArrayList<Bound> bounds = new ArrayList<Bound>();

public void setup() {
  
  rectMode(CENTER);
  noStroke();
  box2d = new Box2DProcessing(this);
  box2d.createWorld();
  box2d.setGravity(0, -40);

  float r = 20;

  // DOWN
  bounds.add(new Bound(width / 2, height + r, width, r));
  // RIGHT
  bounds.add(new Bound(width + r, height / 2, r, height));
  // UP
  bounds.add(new Bound(width / 2, -r, width, r));
  // LEFT
  bounds.add(new Bound(-r, height / 2, r, height));
}

public void draw() {
  background(51);
  box2d.step();

  if (mousePressed) {
    shapes.add(new Shape(mouseX, mouseY));
  }

  for (Bound b : bounds) {
    b.render();
  }

  for (Shape s : shapes) {
    s.render();
  }
}
class Bound {
  Body b;
  float w, h;
  Bound(float x, float y, float w, float h) {
    this.w = w;
    this.h = h;

    BodyDef bd = new BodyDef();
    bd.type = BodyType.STATIC;
    bd.position.set(box2d.coordPixelsToWorld(x, y));

    b = box2d.createBody(bd);

    PolygonShape ps = new PolygonShape();
    float box2dw = box2d.scalarPixelsToWorld(w);
    float box2dh = box2d.scalarPixelsToWorld(h);
    ps.setAsBox(box2dw, box2dh);

    b.createFixture(ps, 1);
  }

  public void render() {
    Vec2 pos = box2d.getBodyPixelCoord(b);
    float a = b.getAngle();

    pushMatrix();
    translate(pos.x, pos.y);
    rotate(-a);
    fill(255);
    rect(0, 0, w, h);
    popMatrix();
  }
}
class Shape {
  Body b;
  Shape(float x, float y) {
    makeBody(new Vec2(x, y));
  }

  public void render() {
    Vec2 pos = box2d.getBodyPixelCoord(b);
    float a = b.getAngle();

    Fixture f = b.getFixtureList();

    PolygonShape ps = (PolygonShape) f.getShape();

    pushMatrix();
    translate(pos.x, pos.y);
    rotate(-a);
    stroke(0);
    fill(255);
    beginShape();
    for (int i = 0; i < ps.getVertexCount(); i++) {
      Vec2 v = box2d.vectorWorldToPixels(ps.getVertex(i));
      vertex(v.x, v.y);
    }
    endShape(CLOSE);
    popMatrix();
  }

  public void makeBody(Vec2 center) {
    Vec2[] vertices = new Vec2[4];
    vertices[0] = box2d.vectorPixelsToWorld(new Vec2(-15, 25));
    vertices[1] = box2d.vectorPixelsToWorld(new Vec2(15, 0));
    vertices[2] = box2d.vectorPixelsToWorld(new Vec2(20, -15));
    vertices[3] = box2d.vectorPixelsToWorld(new Vec2(-10, -10));

    // Define a polygon (this is what we use for a rectangle)
    PolygonShape ps = new PolygonShape();
    ps.set(vertices, vertices.length);

    // Define the body and make it from the shape
    BodyDef bd = new BodyDef();
    bd.type = BodyType.DYNAMIC;
    bd.position.set(box2d.coordPixelsToWorld(center));
    b = box2d.createBody(bd);

    b.createFixture(ps, 1.0f);


    // Give it some initial random velocity
    b.setLinearVelocity(new Vec2(random(-5, 5), random(2, 5)));
    b.setAngularVelocity(random(-5, 5));
  }
}
  public void settings() {  size(600, 600); }
  static public void main(String[] passedArgs) {
    String[] appletArgs = new String[] { "ComplexShapes" };
    if (passedArgs != null) {
      PApplet.main(concat(appletArgs, passedArgs));
    } else {
      PApplet.main(appletArgs);
    }
  }
}
