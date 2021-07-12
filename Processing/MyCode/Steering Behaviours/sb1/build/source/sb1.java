import processing.core.*; 
import processing.data.*; 
import processing.event.*; 
import processing.opengl.*; 

import java.util.*; 

import java.util.HashMap; 
import java.util.ArrayList; 
import java.io.File; 
import java.io.BufferedReader; 
import java.io.PrintWriter; 
import java.io.InputStream; 
import java.io.OutputStream; 
import java.io.IOException; 

public class sb1 extends PApplet {



Vehicle v;
ArrayList<PVector> food = new ArrayList<PVector>();
ArrayList<PVector> poison = new ArrayList<PVector>();

public void setup() {
  
  v = new Vehicle();
  for (int i = 0; i < 40; i++) {
    float x = random(width);
    float y = random(height);
    food.add(new PVector(x, y));
  }

  for (int i = 0; i < 20; i++) {
    float x = random(width);
    float y = random(height);
    poison.add(new PVector(x, y));
  }
}

public void draw() {
  background(51);
  for (int i = 0; i < food.size(); i++) {
    fill(0, 255, 0);
    noStroke();
    ellipse(food.get(i).x, food.get(i).y, 4, 4);
  }

  for (int i = 0; i < poison.size(); i++) {
    fill(255, 0, 0);
    noStroke();
    ellipse(poison.get(i).x, poison.get(i).y, 4, 4);
  }

  v.render();
  v.update();
  v.behaviours(food, poison);
  // for (int i = 0; i < food.size(); i++) {
  //   v.eat(food);
  // }
}
class Vehicle {
  PVector pos, vel, acc;
  ArrayList<Float> dna;
  float r, maxForce, maxSpeed;
  Vehicle() {
    pos = new PVector(width / 2, height / 2);
    vel = new PVector();
    acc = new PVector();
    r = 6;
    maxSpeed = 5;
    maxForce = 0.02f;
    dna = new ArrayList<Float>();
    dna.add(1.0f);
    dna.add(1.0f);
    // dna.get(0) = random(-5, 5);
    // dna.get(1) = random(-5, 5);
  }

  public void behaviours(ArrayList<PVector> good, ArrayList<PVector> bad) {
    void steerG = eat(good);
    PVector steerB = eat(bad);

    steerG.mult(dna.get(0));
    steerB.mult(dna.get(1));

    applyForce(steerG);
    applyForce(steerB);
  }

  public void eat(ArrayList<PVector> list) {
    float record = 50000000;
    int closest = -1;
    int i = 0;
    for (PVector p : list) {
      float d = PVector.dist(pos, p);
      if (d < record) {
        record = d;
        closest = i;
      }
      i++;
    }
    if (record < 5) {
      list.remove(closest);
    } else if (closest > -1) {
      return seek(list.get(closest));
    }
    return new PVector();
  }

  public void seek(PVector target) {
    PVector desired = PVector.sub(target, pos);
    desired.setMag(maxSpeed);
    PVector steer = PVector.sub(desired, vel);
    steer.limit(maxForce);
    return steer;
  }

  public void applyForce(PVector force) {
    acc.add(force);
  }

  public void update() {
    vel.add(acc);
    vel.limit(maxSpeed);
    pos.add(vel);
    acc.mult(0);
  }

  public void render() {
    float theta = vel.heading() + radians(90);
    fill(255, 100);
    pushMatrix();
    translate(pos.x, pos.y);
    rotate(theta);
    beginShape(TRIANGLES);
    vertex(r, r * 2);
    vertex(-r, r * 2);
    vertex(0, -r * 2);
    popMatrix();
    endShape();
  }
}
  public void settings() {  size(800, 600); }
  static public void main(String[] passedArgs) {
    String[] appletArgs = new String[] { "sb1" };
    if (passedArgs != null) {
      PApplet.main(concat(appletArgs, passedArgs));
    } else {
      PApplet.main(appletArgs);
    }
  }
}
