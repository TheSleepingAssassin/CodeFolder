// Render
Attractor.prototype.render = function() {
  push();
  noStroke();
  fill(255, 0, 0);
  ellipse(this.pos.x, this.pos.y, this.r * 2);
  pop();
}
// Render End


// Attract
Attractor.prototype.attract = function(b) {
  let f = p5.Vector.sub(this.pos, b.pos);
  let dSq = constrain(f.magSq(), 100, 750);
  let strength = this.g * (this.mass, b.mass) / dSq;
  f.setMag(strength);
  b.applyForce(f);
}
// Attract End