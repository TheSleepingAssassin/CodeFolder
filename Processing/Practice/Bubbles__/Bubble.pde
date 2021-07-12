class Bubble {
 
  float x;
  float xspeed;
  float y;
  float yspeed;
  float r;
  
  Bubble() {
    x = random(width);
    y = height - r;
    yspeed = random(1, 5);
    r = random(10, 50);
  }
  
  void show() {
   
    strokeWeight(3);
    stroke(255);
    noFill();
    ellipse(x, y, r * 2, r * 2);
  }
  
  void ascend() {
    
    y -= yspeed;
  }
  
  void top() {
   
    if (y <= -r) {
      y = height + r;
    }
  }
  
}
