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

public class Ball_Bouncing extends PApplet {

ArrayList<Ball> balls;

public void setup() {
	
	balls = new ArrayList<Ball>();
	balls.add(new Ball(new PVector(width / 2, height / 2), 16));
}

public void mousePressed() {
	balls.add(new Ball(new PVector(mouseX, mouseY), 16));
}

public void draw() {
	background(51);
	for (Ball b : balls) {
		b.render();
		b.update();
		b.bounce();
	}
}
class Ball {
  PVector pos, vel;
  float r;
  Ball(PVector pos_, float r) {
    this.pos = pos_;
    this.vel = PVector.random2D();
    this.vel.mult(random(3, 7));
    this.r = r;
  }

  public void bounce() {
    if (this.pos.x > width - this.r) {
      this.pos.x = width - this.r;
      this.vel.x *= -1;
    } else if (this.pos.x < this.r) {
      this.pos.x = this.r;
      this.vel.x *= -1;
    }

    if (this.pos.y > height - this.r) {
      this.pos.y = height - this.r;
      this.vel.y *= -1;
    } else if (this.pos.y < this.r) {
      this.pos.y = this.r;
      this.vel.y *= -1;
    }
  }

  public void update() {
    this.pos.add(this.vel);
  }

  public void render() {
    fill(255);
    noStroke();
    ellipse(this.pos.x, this.pos.y, this.r * 2, this.r * 2);
  }
}
  public void settings() { 	size(700, 600); }
  static public void main(String[] passedArgs) {
    String[] appletArgs = new String[] { "Ball_Bouncing" };
    if (passedArgs != null) {
      PApplet.main(concat(appletArgs, passedArgs));
    } else {
      PApplet.main(appletArgs);
    }
  }
}
