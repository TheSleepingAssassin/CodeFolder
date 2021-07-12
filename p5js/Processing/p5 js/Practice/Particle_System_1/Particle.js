class Particle {
 
  constructor() {
   
    this.x = 300;
    this.y = 380;
    this.r = random(5, 10);
    this.alpha = 255;
    this.vx = random(1, -1);
    this.vy = random(-5, -1);
  }
  
  move() {
   
    this.x += this.vx;
    this.y += this.vy;
    this.alpha -= 3;
  }
  
  show() {
   
    stroke(255);
    fill(255, this.alpha);
    ellipse(this.x, this.y, this.r * 2);
  }
  
  finished() {
   
    return this.alpha < 0;
  }
  
}
