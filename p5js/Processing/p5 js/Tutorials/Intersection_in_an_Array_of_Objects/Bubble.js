class Bubble {
 
  constructor(x, y, r) {
   
    this.x = x;
    this.y = y;
    this.r = r;
    this.brightness = 0;
  }
  
  changeColor(bright) {
   
    this.brightness = bright;
  }
  
  move() {
   
    this.x += random(1, -1);
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
    fill(this.brightness, 125);
    ellipse(this.x, this.y, this.r * 2);
  }
  
}
