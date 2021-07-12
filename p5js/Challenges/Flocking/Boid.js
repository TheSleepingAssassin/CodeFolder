class Boid {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = createVector(random(-1, 1), random(-1, 1));
    this.acc = createVector();
    this.r = 5;
    this.maxSpeed = 3;
    this.maxForce = 0.5;
  }

  align(boids) {
    let mBd = 50.0;
    let sum = createVector();
    let count = 0;
    for (let b of boids) {
      sum.add(b.vel);
      count++;
    }
    if (count > 0) {
      sum.div(count);
      sum.normalize();
      sum.mult(this.maxSpeed);
      let steer = p5.Vector.sub(sum, this.vel);
      steer.limit(this.maxForce);
      return steer;
    } else {
      return createVector();
    }
  }

  separate(boids) {
    let mBd = 25.0;
    let steer = createVector();
    let count = 0;
    for (let b of boids) {
      let d = dist(this.pos.x, this.pos.y, b.pos.x, b.pos.y);
      if (d > 0 && d < mBd) {
        let diff = p5.Vector.sub(this.pos, b.pos);
        diff.normalize();
        diff.div(d);
        steer.add(diff);
        count++;
      }
    }
    if (count > 0) {
      steer.div(count);
    }

    if (steer.mag() > 0) {
      steer.normalize();
      steer.mult(this.maxSpeed);
      steer.sub(this.vel);
      steer.limit(this.maxForce);
    }
    return steer;
  }

  cohesion(boids) {
    let mBd = 50;
    let sum = createVector();
    let count = 0;
    for (let b of boids) {
      sum.add(b.pos);
      count++;
    }
    if (count > 0) {
      sum.div(count);
      return this.seek(sum);
    } else {
      return createVector();
    }
  }

  flock(boids) {
    let sep = this.separate(boids);
    let ali = this.align(boids);
    let coh = this.cohesion(boids);

    sep.mult(1.5);
    ali.mult(1.0);
    coh.mult(1.0);

    this.applyForce(sep);
    this.applyForce(ali);
    this.applyForce(coh);
  }

  seek(target) {
    let desired = p5.Vector.sub(target, this.pos);

    desired.normalize();
    desired.mult(this.maxSpeed);

    let steer = p5.Vector.sub(desired, this.vel);
    steer.limit(this.maxForce);
    return steer;
  }

  run(boids) {
    this.flock(boids);
    this.edges();
    this.render();
    this.update();
  }

  edges() {
    if (this.pos.x < -this.r) this.pos.x = width + this.r;
    if (this.pos.x > width + this.r) this.pos.x = -this.r;
    if (this.pos.y < -this.r) this.pos.y = height + this.r;
    if (this.pos.y > height + this.r) this.pos.y = -this.r;
  }

  applyForce(force) {
    this.acc.add(force);
  }

  update() {
    this.vel.add(this.acc);
    this.vel.limit(this.maxSpeed);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  render() {
    push();
    fill(127);
    stroke(255);
    let theta = this.vel.heading() + radians(90);
    translate(this.pos.x, this.pos.y);
    rotate(theta);
    beginShape();
    vertex(0, -this.r * 2);
    vertex(-this.r, this.r * 2);
    vertex(this.r, this.r * 2);
    endShape(CLOSE);
    pop();
  }
}