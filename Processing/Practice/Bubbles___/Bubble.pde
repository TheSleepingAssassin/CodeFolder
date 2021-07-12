class Bubble {
 
  float x;
  float y;
  float r;
  float xspeed;
  
  Bubble() {
   
    r = random(10, 50);
    x = random(width);
    y = height - r;
    xspeed = random(1, 5);
  }
  
  void show() {
    
    strokeWeight(3);
    stroke(255);
    noFill();
    ellipse(x, y, r * 2, r * 2);
  }
  
  void ascend() {
   
    y -= xspeed;
    x += random(-2, 2);
  }
  
  void top() {
    
    if(y <= -r) {
      y = height + r;
    }
  }
  
}
