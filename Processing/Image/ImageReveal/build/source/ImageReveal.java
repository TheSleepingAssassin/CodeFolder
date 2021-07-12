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

public class ImageReveal extends PApplet {

Body[] bodies = new Body[200];
PImage img;

public void setup() {
  
  img = loadImage("Miyu Drawing.PNG");
  background(51);
  for (int i = 0; i < bodies.length; i++) {
    bodies[i] = new Body();
  }
}

public void draw() {
  for (Body b : bodies) {
    b.render();
    b.update();
    b.bounce();
  }
}
class Body {
  PVector pos, vel;
  float r;
  Body() {
    pos = new PVector(width / 2, height / 2);
    vel = PVector.random2D();
    vel.mult(5);
    r = 2;
  }

  public void bounce() {
    if (pos.x > width - r) {
      pos.x = width - r;
      vel.x *= -1;
    } else if (pos.x < r) {
      pos.x = r;
      vel.x *= -1;
    } else if (pos.y > height - r) {
      pos.y = r;
      vel.y *= -1;
    } else if (pos.y < r) {
      pos.y = r;
      vel.y *= -1;
    }
  }

  public void update() {
    pos.add(vel);
  }

  public void render() {
    int c = img.get(PApplet.parseInt(pos.x), PApplet.parseInt(pos.y));
    fill(c);
    noStroke();
    ellipse(pos.x, pos.y, r * 2, r * 2);
  }
}
  public void settings() {  size(683, 522); }
  static public void main(String[] passedArgs) {
    String[] appletArgs = new String[] { "ImageReveal" };
    if (passedArgs != null) {
      PApplet.main(concat(appletArgs, passedArgs));
    } else {
      PApplet.main(appletArgs);
    }
  }
}
