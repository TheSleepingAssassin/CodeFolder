class Bubble {
 
  constructor() {
   
    this.r = random(10, 50);
    this.x = random(width);
    this.y = height - this.r;
    this.yspeed = random(1, 5);
  }
  
  show() {
    
    strokeWeight(3);
    stroke(255);
    noFill();
    ellipse(this.x, this.y, this.r * 2);
  }
  
  shake() {
   
    this.x += random(-1, 1);
  }
  
  ascend() {
   
    this.y = this.y - this.yspeed;
  }
  
  top() {
   
    if(this.y <= 0 - this.r) {
      this.y = height + this.r;
    }
  }
  
}
