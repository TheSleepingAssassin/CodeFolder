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

public class Pong extends PApplet {

Puck p;
Paddle left, right;

public void setup() {
	
	rectMode(CENTER);
	noStroke();
	noFill();
	strokeWeight(1);

	p = new Puck();
	float w = 10;
	float h = 100;
	float offset = 10;
	left = new Paddle(new PVector(offset + w, height / 2), w, h);
	right = new Paddle(new PVector((height - offset) - w, height / 2), w, h);
}

public void checkIntersection() {
	if (p.intersects(right) || p.intersects(left)) {
		p.reverse();
	}
}

public void keyReleased() {
	if (key == 'w') {
		left.subV(false);
	}
	if (key == 's') {
		left.addV(false);
	}
	if (key == 'i') {
		right.subV(false);
	}
	if (key == 'k') {
		left.addV(false);
	}
}

public void keyPressed() {
	if (key == 'w') {
		left.subV(true);
	} else if (key == 's') {
		left.addV(true);
	}

	if (key == 'i') {
		right.subV(true);
	} else if (key == 'k') {
		right.addV(true);
	}
}

public void draw() {
	background(51);

	p.render();
	p.edges();
	p.update();

	left.render();
	right.render();

	checkIntersection();
}
class Paddle {
  PVector pos;
  float w, h;
  boolean substracting, adding;
  Paddle(PVector pos, float w, float h) {
    this.pos = new PVector(pos.x, pos.y);
    this.w = w;
    this.h = h;
    this.adding = false;
    this.subtractiing = false;
  }

  public void addV(boolean b) {
    adding = b;
  }

  public void subV(boolean b) {
    subtracting = b;
  }

  public void update() {
    if (adding) {
      pos.add(new PVector(0, 5));
    } else if (subtracting) {
      pos.sub(new PVector(0, -5));
    }
  }

  public void render() {
    pushMatrix();
    translate(pos.x, pos.y);
    fill(255);
    rect(0, 0, w, h);
    popMatrix();
  }
}
class Puck {
  PVector pos, vel;
  float r, d;
  Puck() {
    pos = new PVector(width / 2, height / 2);
    vel = PVector.random2D();
    vel.mult(5);
    r = 16;
    d = r * 2;
  }

  public void reverse() {
    vel.x *= -1;
  }

  public boolean intersects(Paddle p) {
    if (this.which(p)/* == true */) {
      if (pos.y - r > p.pos.y + p.h / 2) {
        float d = dist(pos.x, pos.y, p.pos.x, p.pos.y);
        if (d < r + p.w / 2) {
          return true;
        }
      }
    } else if (pos.y - r > p.pos.y + (p.h / 2) || pos.y + r < p.pos.y - (p.h / 2)) {
      float d = dist(pos.x, pos.y, p.pos.x, p.pos.y);
      if (d < r + p.w / 2) {
        return true;
      }
    }
    return false;
  }

  public boolean which(Paddle p) {
    if (p.pos.x > width / 2) {
      return true;
    } else {
      return false;
    }
  }

  public void edges() {
    if (pos.y > height - r) {
      vel.y *= -1;
    } else if (pos.y < r) {
      vel.y *= -1;
    }
  }

  public void update() {
    pos.add(vel);
  }

  public void render() {
    pushMatrix();
    translate(pos.x, pos.y);
    fill(255);
    ellipse(0, 0, d, d);
    popMatrix();
  }
}
  public void settings() { 	size(600, 600); }
  static public void main(String[] passedArgs) {
    String[] appletArgs = new String[] { "Pong" };
    if (passedArgs != null) {
      PApplet.main(concat(appletArgs, passedArgs));
    } else {
      PApplet.main(appletArgs);
    }
  }
}
