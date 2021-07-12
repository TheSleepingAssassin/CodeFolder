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

public class ImageProcessing extends PApplet {

PImage img;

public void setup() {
  
  img = loadImage("Miyu Drawing.PNG");
  background(51);
}

public void draw() {
  for (int i = 0; i < 100; i++) {
    float x = random(width);
    float y = random(height);
    int c = img.get(PApplet.parseInt(x), PApplet.parseInt(y));
    fill(c);
    noStroke();
    ellipse(x, y, 16, 16);
  }
}
  public void settings() {  size(683, 522); }
  static public void main(String[] passedArgs) {
    String[] appletArgs = new String[] { "ImageProcessing" };
    if (passedArgs != null) {
      PApplet.main(concat(appletArgs, passedArgs));
    } else {
      PApplet.main(appletArgs);
    }
  }
}
