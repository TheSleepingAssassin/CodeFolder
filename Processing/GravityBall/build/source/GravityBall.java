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

public class GravityBall extends PApplet {

Body ball;

public void setup() {
  
  ball = new Body(new PVector(width / 2, 50), 16, 2);
}

public void draw() {
  background(51);
  ball.render();
  ball.update();
  ball.applyG();
  ball.bounce();

  if (mousePressed) {
    if (mouseX < ball.pos.x) {
      PVector w = new PVector(0.4f, 0);
      ball.applyForce(w);
    } else if (mouseX > ball.pos.x) {
      PVector w = new PVector(-0.4f, 0);
      ball.applyForce(w);
    } if (mouseY < ball.pos.y) {
      PVector w = new PVector(0, 0.4f);
      ball.applyForce(w);
    } else if (mouseY > ball.pos.y) {
      PVector w = new PVector(0, -0.6f);
      ball.applyForce(w);
    }
  }
}
class Body {
  PVector pos, vel, acc;
  float r, mass;
  Body(PVector pos, float r, float mass) {
    this.pos = pos;
    this.vel = PVector.random2D();
    this.acc = new PVector();
    this.mass = mass;
    this.r = r;
  }

  public void bounce() {
    float turn = -0.85f;
    if (this.pos.x > width - this.r) {
      this.pos.x = width - this.r;
      this.vel.x *= turn;
    }
    if (this.pos.x < this.r) {
      this.pos.x = this.r;
      this.vel.x *= turn;
    }
    if (this.pos.y > height - this.r) {
      this.pos.y = height - this.r;
      this.vel.y *= turn;
    }
    if (this.pos.y < this.r) {
      this.pos.y = this.r;
      this.vel.y *= turn;
    }
  }

  public void applyG() {
    PVector g = new PVector(0, 0.6f);
    this.acc.add(g);
  }

  public void applyForce(PVector force) {
    PVector f = PVector.div(force, this.mass);
    this.acc.add(f);
  }

  public void update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.pos.x = constrain(this.pos.x, 0, width);
    this.pos.y = constrain(this.pos.y, 0, height);
    acc.mult(0);
  }

  public void render() {
    noStroke();
    fill(255);
    ellipse(this.pos.x, this.pos.y, this.r * 2, this.r * 2);
  }
}
  public void settings() {  size(800, 600); }
  static public void main(String[] passedArgs) {
    String[] appletArgs = new String[] { "GravityBall" };
    if (passedArgs != null) {
      PApplet.main(concat(appletArgs, passedArgs));
    } else {
      PApplet.main(appletArgs);
    }
  }
}
