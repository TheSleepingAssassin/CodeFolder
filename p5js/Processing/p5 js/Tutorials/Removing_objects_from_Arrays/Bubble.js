class Bubble {
 
  constructor(x, y, r) {
   
    this.x = random(width);
    this.y = random(height);
    this.r = random(10, 50);
    this.brightness = 0;
  }
  
  changeColor(bright) {
   
    this.brightness = bright;
  }
  
  containing(px, py) {
   
    let d = dist(px, py, this.x, this.y);
    if (d < this.r) {
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
  
  move() {
   
    this.x += random(1, -1);
  }
  
}
