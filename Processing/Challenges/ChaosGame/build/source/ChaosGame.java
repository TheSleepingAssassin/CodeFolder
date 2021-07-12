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

public class ChaosGame extends PApplet {

ArrayList<PVector> points = new ArrayList<PVector>();

float x, y;
PVector current;

public void setup() {
  
  reset();
}

public void reset() {
  for (int i = 0; i < 3; i++) {
    PVector v = new PVector(random(width), random(height));
    points.add(v);
  }
  current = new PVector(random(width), random(height));

  background(51);
  stroke(255);
  strokeWeight(4);
  for (PVector p : points) {
    point(p.x, p.y);
  }
}

public void draw() {
  if (frameCount % 100 == 0) {
    reset();
  }

  for (int i = 0; i < 500; i++) {
    strokeWeight(2);
    stroke(255, 0, 255);
    float rand = random(points.size());
    PVector next = points.get(PApplet.parseInt(rand));
    current.x = lerp(current.x, next.x, 0.5f);
    current.y = lerp(current.y, next.y, 0.5f);
    point(current.x, current.y);
  }
}
  public void settings() {  size(600, 600); }
  static public void main(String[] passedArgs) {
    String[] appletArgs = new String[] { "ChaosGame" };
    if (passedArgs != null) {
      PApplet.main(concat(appletArgs, passedArgs));
    } else {
      PApplet.main(appletArgs);
    }
  }
}
