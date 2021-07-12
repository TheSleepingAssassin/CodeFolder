import processing.core.*; 
import processing.data.*; 
import processing.event.*; 
import processing.opengl.*; 

import java.util.HashMap; 
import java.util.ArrayList; 
import java.io.File; 
import java.io.BufferedReader; 
import java.io.PrintWriter; 
import java.io.InputStream; 
import java.io.OutputStream; 
import java.io.IOException; 

public class Raycasting2D extends PApplet {

Boundary[] walls;
Ray ray;
Particle p;
float xoff = 0;
float yoff = 10000;

public void setup() {
  
  walls = new Boundary[5 + 4];
  for (int i = 0; i < walls.length; i++) {
    float x1 = random(width);
    float y1 = random(height);
    float x2 = random(width);
    float y2 = random(height);
    walls[i] = new Boundary(x1, y1, x2, y2);
  }
  walls[walls.length - 4] = (new Boundary(0, 0, width, 0));
  walls[walls.length - 3] = new Boundary(width, 0, width, height);
  walls[walls.length - 2] = new Boundary(width, height, 0, height);
  walls[walls.length - 1] = new Boundary(0, height, 0, 0);
  p = new Particle();
}

public void draw() {
  background(0);
  strokeWeight(2);
  for (Boundary wall : walls) {
    wall.render();
  }
  p.update(noise(xoff) * width, noise(yoff) * height);
  p.render();
  p.look(walls);
  xoff += 0.005f;
  yoff += 0.005f;
}
class Boundary {
  PVector a, b;
  Boundary(float x1, float y1, float x2, float y2) {
    a = new PVector(x1, y1);
    b = new PVector(x2, y2);
  }

  public void render() {
    stroke(255);
    line(a.x, a.y, b.x, b.y);
  }
}
class Particle {
  PVector pos;
  ArrayList<Ray> rays;
  Particle() {
    rays = new ArrayList<Ray>();
    pos = new PVector(width / 2, height / 2);
    for (int a = 0; a < 360; a += 1) {
      rays.add(new Ray(pos, radians(a)));
    }
  }

  public void update(float x, float y) {
    pos.x = x;
    pos.y = y;
  }

  public void look(Boundary[] walls) {
    stroke(255);
    for (Ray ray : rays) {
      PVector closest = null;
      float record = 50000000;
      for (Boundary wall : walls) {
        PVector pt = ray.cast(wall);
        if (pt != null) {
          float d = PVector.dist(pos, pt);
          if (d < record) {
            record = d;
            closest = pt;
          }
        }
      }
      if (closest != null) {
        stroke(255, 100);
        line(pos.x, pos.y, closest.x, closest.y);
      }
    }
  }

  public void render() {
    fill(255);
    ellipse(pos.x, pos.y, 2, 2);
    for (Ray ray : rays) {
      ray.render();
    }
  }
}
class Ray {
  PVector pos, dir;
  Ray(PVector pos, float angle) {
    this.pos = pos;
    this.dir = PVector.fromAngle(angle);
  }

  public void lookAt(float x, float y) {
    dir.x = x - pos.x;
    dir.y = y - pos.y;
    dir.normalize();
  }

  public PVector cast(Boundary wall) {
    float x1 = wall.a.x;
    float y1 = wall.a.y;
    float x2 = wall.b.x;
    float y2 = wall.b.y;

    float x3 = pos.x;
    float y3 = pos.y;
    float x4 = pos.x + dir.x;
    float y4 = pos.y + dir.y;

    float den = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);
    if (den == 0) {
      return null;
    }

    float t = ((x1 - x3) * (y3 - y4) - (y1 - y3) * (x3 - x4)) / den;
    float u = -((x1 - x2) * (y1 - y3) - (y1 - y2) * (x1 - x3)) / den;

    if (t > 0 && t < 1 && u > 0) {
      PVector pt = new PVector();
      pt.x = x1 + t * (x2 - x1);
      pt.y = y1 + t * (y2 - y1);
      return pt;
    } else {
      return null;
    }
  }

  public void render() {
    stroke(255);
    pushMatrix();
    translate(pos.x, pos.y);
    line(0, 0, dir.x * 10, dir.y * 10);
    popMatrix();
  }
}
  public void settings() {  fullScreen(); }
  static public void main(String[] passedArgs) {
    String[] appletArgs = new String[] { "Raycasting2D" };
    if (passedArgs != null) {
      PApplet.main(concat(appletArgs, passedArgs));
    } else {
      PApplet.main(appletArgs);
    }
  }
}
