class Bubble {
 
  constructor(x, y) {
   
    this.x = x;
    this.y = y;
    this.r = random(10, 50);
  }
  
  intersects(other) {
   
    let d = dist(this.x, this.y, other.x, other.y);
    if(d < this.r + other.r) {
     return true; 
    } else {
     return false; 
    }
  }
  
  show() {
   
    strokeWeight(3);
    stroke(255);
    noFill();
    ellipse(this.x, this.y, this.r * 2);
  }
  
}
