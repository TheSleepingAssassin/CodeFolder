Player p;

void setup() {
  size(600, 600);
  rectMode(CENTER);
  
  p = new Player(new PVector(width / 2, height / 2), 20);
}

void keyReleased() {
  if (key == 'w') {
    p.vel.mult(0);
  }
  
  if (key == 'a') {
    p.vel.mult(0);
  }
  
  if (key == 's') {
    p.vel.mult(0);
  }
  
  if (key == 'd') {
    p.vel.mult(0);
  }
}

void draw() {
  background(0);
  
  p.run();
  
  if (keyPressed) {
    int speed = 10;
    if (key == 'w') {
      p.applyForce(new PVector(0, -speed));
    }
    
    if (key == 'a') {
      p.applyForce(new PVector(-speed, 0));
    }
    
    if (key == 's') {
      p.applyForce(new PVector(0, speed));
    }
    
    if (key == 'd') {
      p.applyForce(new PVector(speed, 0));
    }
  }
}
