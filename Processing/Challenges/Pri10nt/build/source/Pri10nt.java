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

public class Pri10nt extends PApplet {

float x, y, spce;

public void setup() {
  
  x = 0;
  y = 0;
  spce = 30;
  stroke(255);
  background(0);
}

public void draw() {
  if (floor(random(2)) == 1) {
    line(x, y, x + spce, y + spce);
  } else {
    line(x + spce, y, x, y + spce);
  }
  x += spce;
  if (x >= width) {
    x = 0;
    y += spce;
  }
}
  public void settings() {  size(600, 600); }
  static public void main(String[] passedArgs) {
    String[] appletArgs = new String[] { "Pri10nt" };
    if (passedArgs != null) {
      PApplet.main(concat(appletArgs, passedArgs));
    } else {
      PApplet.main(appletArgs);
    }
  }
}
