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

public class BubbleSortVisualisation extends PApplet {

float[] values;

int i = 0;
int j = 0;

public void setup() {
  
  values = new float[width];
  for (int m = 0; m < values.length; m++) {
    values[i] = random(height);
  }
  // values = sort(values);
  // for (int i = 0; i < values.length; i++) {
  //   for (int j = 0; j < values.length - i - 1; j++) {
  //   }
  // }
}

public void draw() {
  for (int i = 0; i < 50; i++) {
    background(51);

    float a = values[j];
    float b = values[j + 1];
    if (a > b) {
      swap(values, j, j+1);
    }
    if (i < values.length) {
      j = j + 1;
      if (j >= values.length - i - 1) {
        j = 0;
        i = i + 1;
      }
    } else {
      println("finished");
      noLoop();
    }

    for (int k = 0; k < values.length; k++) {
      stroke(255);
      line(k, height, k, height - values[k]);
    }
  }
}

public void swap(float[] arr, int i, int j) {
  float temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
  public void settings() {  size(100, 100); }
  static public void main(String[] passedArgs) {
    String[] appletArgs = new String[] { "BubbleSortVisualisation" };
    if (passedArgs != null) {
      PApplet.main(concat(appletArgs, passedArgs));
    } else {
      PApplet.main(appletArgs);
    }
  }
}
