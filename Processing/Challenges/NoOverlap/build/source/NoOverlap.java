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

public class NoOverlap extends PApplet {

ArrayList<Body> bodies;

public void setup() {
  
  bodies = new ArrayList<Body>();
  for (int i = 0; i < 50; i++) {
    bodies.add(new Body());
  }
}

public void draw() {
  for (int i = 0; i < bodies.size(); i++) {
    ArrayList<Body> other = bodies[i];
    if (bodies[i].intersects(other[i])) {
      bodies.splice(i, 1);
      bodies.add(new Body());
    }
  }
  background(0);
}
class Body {
  PVector pos;
  float r;
  Body() {
    pos = new PVector(random(width), random(height));
    r = 16;
  }

  public void render() {
    stroke(255);
    strokeWeight(2);
    fill(127);
    ellipse(pos.x, pos.y, r * 2, r * 2);
  }
}
  public void settings() {  size(600, 600); }
  static public void main(String[] passedArgs) {
    String[] appletArgs = new String[] { "NoOverlap" };
    if (passedArgs != null) {
      PApplet.main(concat(appletArgs, passedArgs));
    } else {
      PApplet.main(appletArgs);
    }
  }
}
