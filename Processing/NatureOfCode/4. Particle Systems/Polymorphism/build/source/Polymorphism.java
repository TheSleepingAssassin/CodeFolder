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

public class Polymorphism extends PApplet {

ArrayList<Particle> particles;

public void setup() {
  
  particles = new ArrayList<Particle>();
}

public void draw() {
  background(51);
  particles.add(new Particle());
  for (int i = particles.size() - 1; i >= 0; i--) {
    Particle p = particles.get(i);
    p.render();
    p.update();
    if (p.isDead()) {
      particles.remove(i);
    }
  }
}
class Particle {
  PVector pos, vel;
  float r, lifespan;
  Particle() {
    this.pos = new PVector(width / 2, height / 2);
    this.vel = PVector.random2D();
    this.vel.mult(random(3, 7));
    this.r = 8;
    this.lifespan = 255;
  }

  public boolean isDead() {
    return this.lifespan < 0 && (this.pos.x > width + this.r || this.pos.x < -this.r || this.pos.y > height + this.r || this.pos.y < -this.r);
  }

  public void update() {
    this.pos.add(this.vel);
    this.lifespan -= 4.5f;
  }

  public void render() {
    fill(200, this.lifespan);
    noStroke();
    ellipse(this.pos.x, this.pos.y, this.r * 2, this.r * 2);
  }
}
  public void settings() {  size(650, 650); }
  static public void main(String[] passedArgs) {
    String[] appletArgs = new String[] { "Polymorphism" };
    if (passedArgs != null) {
      PApplet.main(concat(appletArgs, passedArgs));
    } else {
      PApplet.main(appletArgs);
    }
  }
}
