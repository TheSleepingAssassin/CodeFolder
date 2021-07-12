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

public class FlappyBird extends PApplet {

Bird b;

public void setup() {
  
  b = new Bird(2);
}

public void draw() {
  background(51);
  b.run();
  if (keyPressed) {
    if (keyCode == UP) {
      b.jump();
    }
  }
}
class Bird {
  PVector pos, vel, acc;
  float r, mass;
  Bird(float m) {
    pos = new PVector(width / 4, height / 2);
    vel = new PVector();
    acc = new PVector();
    mass = m;
    r = sqrt(mass) * 10;
  }

  public void run() {
    render();
    update();
    applyG();
  }

  public void applyG() {
    PVector g = new PVector(0, 0.7f);
    acc.add(g);
  }

  public void jump() {
    PVector j = new PVector(0, -10);
    applyForce(j);
  }

  public void applyForce(PVector force) {
    PVector f = PVector.div(force, mass);
    acc.add(f);
  }

  public void update() {
    vel.add(acc);
    pos.add(vel);
    pos.y = constrain(pos.y, this.r, height - this.r);
    acc.mult(0);
  }

  public void render() {
    pushMatrix();
    noStroke();
    fill(100, 100, 0);
    ellipse(pos.x, pos.y, r * 2, r * 2);
    popMatrix();
  }
}
  public void settings() {  size(600, 600); }
  static public void main(String[] passedArgs) {
    String[] appletArgs = new String[] { "FlappyBird" };
    if (passedArgs != null) {
      PApplet.main(concat(appletArgs, passedArgs));
    } else {
      PApplet.main(appletArgs);
    }
  }
}
