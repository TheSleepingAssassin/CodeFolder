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

public class Recursion extends PApplet {

public void setup()
{
  
  stroke(255);
  noFill();
}

public void draw()
{
  background(51);
  drawCircle(width / 2, height / 2, 200);
}

public void drawCircle(float x, float y, float d)
{
  ellipse(x, y, d, d);
  if (d > 2)
  {
    drawCircle(x + d * 0.5f, y, d * 0.5f);
    drawCircle(x - d * 0.5f, y, d * 0.5f);
  }
}
  public void settings() {  size(600, 600); }
  static public void main(String[] passedArgs) {
    String[] appletArgs = new String[] { "Recursion" };
    if (passedArgs != null) {
      PApplet.main(concat(appletArgs, passedArgs));
    } else {
      PApplet.main(appletArgs);
    }
  }
}
