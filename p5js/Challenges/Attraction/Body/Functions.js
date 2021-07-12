// Render
Body.prototype.render = function() {
  push();
  noStroke();
  fill(255);
  ellipse(this.pos.x, this.pos.y, this.r * 2);
  pop();
}
// Render End


// Tick
Body.prototype.tick = function() {
  this.vel.add(this.acc);
  this.pos.add(this.vel);
  this.acc.mult(0);
}
// Tick End


// Apply Force
Body.prototype.applyForce = function(force) {
  let f = p5.Vector.div(force, this.mass);
  this.acc.add(f);
}
// Apply Force End