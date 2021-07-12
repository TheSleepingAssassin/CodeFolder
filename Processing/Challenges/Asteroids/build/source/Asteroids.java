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

public class Asteroids extends PApplet {

Ship s;
ArrayList<Asteroid> asts;
ArrayList<Laser> lasers;

public void setup() {
  
  reset();
}

public void reset() {
  s = new Ship();
  asts = new ArrayList<Asteroid>();
  lasers = new ArrayList<Laser>();
  for (int i = 0; i < 10; i++) {
    asts.add(new Asteroid());
  }
}

public void keyReleased() {
  if (keyCode == RIGHT || keyCode == LEFT) {
    s.setRot(0);
  }

  if (keyCode == UP) {
    s.boosting(false);
  }
}

public void keyPressed() {
  if (key == ' ') {
    lasers.add(new Laser(s.pos, s.head));
  } else if (keyCode == RIGHT) {
    s.setRot(0.1f);
  } else if (keyCode == LEFT) {
    s.setRot(-0.1f);
  } else if (keyCode == UP) {
    s.boosting(true);
  }
}

public void draw() {
  background(51);
  for (int i = lasers.size() - 1; i >= 0; i--) {
    Laser l = lasers.get(i);
    l.render();
    l.update();
    noStroke();
    strokeWeight(1);
    noFill();
    if (l.out()) {
      lasers.remove(i);
    } else {
      for (int j = asts.size() - 1; j >= 0; j--) {
        Asteroid a = asts.get(j);
        if (l.hits(a)) {
          if (a.r > 30) {
            ArrayList newAst = a.genAst();
            asts.addAll(newAst);
          }
          asts.remove(j);
          lasers.remove(i);
          break;
        }
      }
    }
  }

  s.render();
  s.update();
  s.turn();
  s.edges();

  for (Asteroid a : asts) {
    a.render();
    a.update();
    a.edges();
    if (s.hits(a)) {
      background(255, 0, 0);
      textSize(50);
      textAlign(CENTER);
      fill(255);
      stroke(255);
      text("Wasted", width / 2, height / 2);
      noLoop();
    }
  }

  if (asts.size() <= 0) {
    background(0, 255, 0);
    textSize(50);
    textAlign(CENTER);
    fill(255);
    stroke(255);
    text("WIN!", width / 2, height / 2);
  }
}
class Asteroid {
  PVector pos, vel;
  float[] offset;
  int total;
  float r;
  Asteroid(PVector pos, float r) {
    this.pos = pos.copy();
    this.r = r * 0.5f;

    this.vel = PVector.random2D();
    this.total = floor(random(5, 15));
    this.offset = new float[this.total];
    for (int i = 0; i < this.total; i++) {
      this.offset[i] = random(-5, 5);
    }
  }

  Asteroid() {
    if (floor(random(1)) < 0.5f) {
      this.pos = new PVector(random(0, width / 2 - 100), random(0, height / 2 - 100));
    } else {
      this.pos = new PVector(random(width / 2 + 100, width), random(height / 2 + 100, height));
    }
    this.r = random(16, 70);
    this.vel = PVector.random2D();
    this.total = floor(random(5, 15));
    this.offset = new float[this.total];
    for (int i = 0; i < this.total; i++) {
      this.offset[i] = random(-5, 5);
    }
  }

  public ArrayList genAst() {
    ArrayList<Asteroid> asts = new ArrayList<Asteroid>();
    asts.add(new Asteroid(this.pos, this.r));
    asts.add(new Asteroid(this.pos, this.r));
    return asts;
  }

  public void edges() {
    if (this.pos.x > width + this.r) {
      this.pos.x = -this.r;
    } else if (this.pos.x < -this.r) {
      this.pos.x = width + this.r;
    }

    if (this.pos.y > height + this.r) {
      this.pos.y = -this.r;
    } else if (this.pos.y < -this.r) {
      this.pos.y = height + this.r;
    }
  }

  public void update() {
    this.pos.add(this.vel);
  }

  public void render() {
    pushMatrix();
    translate(pos.x, pos.y);
    stroke(255);
    noFill();
    beginShape();
    for (int i = 0; i < total; i++) {
      float a = map(i, 0, total, 0, TWO_PI);
      float r = this.r + offset[i];
      float x = r * cos(a);
      float y = r * sin(a);
      vertex(x, y);
    }
    endShape(CLOSE);
    popMatrix();
  }
}
class Laser {
  PVector pos, vel;
  float r;
  Laser(PVector spos, float angle) {
    this.pos = new PVector(spos.x, spos.y);
    this.vel = PVector.fromAngle(angle);
    this.vel.mult(10);
    this.r = 4;
  }

  public boolean hits(Asteroid a) {
    float d = dist(this.pos.x, this.pos.y, a.pos.x, a.pos.y);
    return (d < a.r);
  }

  public boolean out() {
    return (this.pos.x > width + this.r || this.pos.x < -this.r || this.pos.y > height + this.r || this.pos.y < -this.r);
  }

  public void update() {
    this.pos.add(this.vel);
  }

  public void render() {
    pushMatrix();
    stroke(255);
    strokeWeight(this.r);
    point(this.pos.x, this.pos.y);
    popMatrix();
  }
}
class Ship {
  PVector pos, vel;
  float r, head, rotation;
  boolean isBoosting;
  Ship() {
    pos = new PVector(width / 2, height / 2);
    vel = new PVector();
    r = 16;
    head = 0;
    isBoosting = false;
  }

  public boolean hits(Asteroid a) {
    float d = dist(pos.x, pos.y, a.pos.x, a.pos.y);
    return (d < r + a.r);
  }

  public void edges() {
    if (pos.x > width + r) {
      pos.x = -r;
    } else if (pos.x < -r) {
      pos.x = width + r;
    }

    if (pos.y > height + r) {
      pos.y = -r;
    } else if (pos.y < -r) {
      pos.y = height + r;
    }
  }

  public void boosting(boolean b) {
    isBoosting = b;
  }

  public void boost() {
    PVector force = PVector.fromAngle(head);
    force.mult(0.4f);
    vel.add(force);
  }

  public void update() {
    if (isBoosting) {
      boost();
    }

    pos.add(vel);
    vel.mult(0.99f);
  }

  public void render() {
    pushMatrix();
    translate(pos.x, pos.y);
    rotate(head + PI / 2);
    stroke(255);
    fill(51);
    triangle(-r, r, r, r, 0, -r - 10);
    popMatrix();
  }

  public void setRot(float a) {
    rotation = a;
  }

  public void turn() {
    head += rotation;
  }
}
  public void settings() {  size(1200, 600); }
  static public void main(String[] passedArgs) {
    String[] appletArgs = new String[] { "Asteroids" };
    if (passedArgs != null) {
      PApplet.main(concat(appletArgs, passedArgs));
    } else {
      PApplet.main(appletArgs);
    }
  }
}
