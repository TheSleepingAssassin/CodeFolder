class Vehicle {
  constructor(x, y) {
    this.pos = createVector(random(width), random(height));
    this.targ = createVector(x, y);
    this.vel = p5.Vector.random2D();
    this.acc = createVector();
    this.r = 2;
    this.maxSpeed = 8;
    this.maxForce = 1;
  }

  applyForce(f) {
    this.acc.add(f);
  }

  arrive(targ) {
    let desired = p5.Vector.sub(targ, this.pos);
    let d = desired.mag();
    let speed = this.maxSpeed;
    if (d < 100) {
      speed = map(d, 0, 100, 0, this.maxSpeed);
    }
    desired.setMag(speed);
    let steer = p5.Vector.sub(desired, this.vel);
    steer.limit(this.maxForce);
    return steer;
  }

  flee(targ) {
    let desired = p5.Vector.sub(targ, this.pos);
    let d = desired.mag();
    if (d < 50) {
      desired.setMag(this.maxSpeed);
      desired.mult(-1);
      let steer = p5.Vector.sub(desired, this.vel);
      steer.limit(this.maxForce);
      return steer;
    } else {
      return createVector(0, 0);
    }
  }

  // edges() {
  //   if (this.pos.x > width + this.r) {
  //     this.pos.x = -this.r;
  //   } else if (this.pos.x < -this.r) {
  //     this.pos.x = width + this.r;
  //   } else if (this.pos.y > height + this.r) {
  //     this.pos.y = -this.r;
  //   } else if (this.pos.y < -this.r) {
  //     this.pos.y = height + this.r;
  //   }
  // }

  behaviour(num) {
    let arrive = this.arrive(this.targ);
    let mouse = createVector(mouseX, mouseY);
    let flee = this.flee(mouse);

    arrive.mult(1);
    flee.mult(8);

    this.applyForce(arrive);
    this.applyForce(flee);
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  show() {
    strokeWeight(this.r * 2);
    stroke(255);
    point(this.pos.x, this.pos.y);
  }
}