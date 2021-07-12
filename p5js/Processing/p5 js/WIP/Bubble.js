class Bubble {
 
  constructor() {
   
    this.x = 300;
    this.y = 380;
    this.r = random(10, 50);
  }
  
  update() {
   
    this.x += random(1, -1);
    this.y += random(-5, -1);
  }
  
  show() {
   
    strokeWeight(3);
    stroke(255);
    noFill();
    ellipse(this.x, this.y, this.r * 2);
  }
  
}
