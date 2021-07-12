class Particle {
 
  constructor() {
   
    this.x = width/2;
    this.y = 380;
    this.vx = random(1, -1);
    this.vy = random(-5, -1);
    this.al = 255;
  }
  
  show() {
   
    stroke(255);
    fill(255, this.al);
    ellipse(this.x, this.y, 15);
  }
  
  update() {
   
    this.x += this.vx;
    this.y += this.vy;
    this.al -= 2;
  }
  
  finished() {
   
    return this.al < 0;
  }
  
}
