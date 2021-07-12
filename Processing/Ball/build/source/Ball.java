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

public class Ball extends PApplet {

ArrayList<Body> balls;

public void setup() {
  
  balls = new ArrayList<Body>();
  balls.add(new Body(new PVector(width / 2, height / 2), 16));
}

public void mousePressed() {
  balls.add(new Body(new PVector(mouseX, mouseY), random(10, 20)));
}

public void draw() {
  background(0);
  for (Body b : balls) {
    b.render();
    b.update();
    b.bounce();
  }
}
class Body {
  PVector pos, vel;
  float r, d;
  Body(PVector pos_, float r_) {
    pos = pos_;
    vel = PVector.random2D();
    vel.mult(random(3, 7));
    r = r_;
    d = r * 2;
  }

  public void bounce() {
    if (pos.x > width - r) {
      pos.x = width - r;
      vel.x *= -1;
    }
    if (pos.x < r) {
      pos.x = r;
      vel.x *= -1;
    }
    if (pos.y > height - r) {
      pos.y = height - r;
      vel.y *= -1;
    }
    if (pos.y < r) {
      pos.y = r;
      vel.y *= -1;
    }
  }

  public void update() {
    pos.add(vel);
  }

  public void render() {
    noStroke();
    fill(255);
    ellipse(pos.x, pos.y, d, d);
  }
}
  public void settings() {  size(600, 600); }
  static public void main(String[] passedArgs) {
    String[] appletArgs = new String[] { "Ball" };
    if (passedArgs != null) {
      PApplet.main(concat(appletArgs, passedArgs));
    } else {
      PApplet.main(appletArgs);
    }
  }
}
