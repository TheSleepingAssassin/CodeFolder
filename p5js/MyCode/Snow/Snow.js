function randomSize() {
    while (true) {
        let r1 = random(1);
        let r2 = random(1);
        if (r2 > r1) {
            return r1 * random(20, 35);
        }
    }
}

class Snow {
    constructor(x, y) {
        this.pos = createVector(x, y);
        this.vel = createVector();
        this.acc = createVector();
        this.r = randomSize();
    }

    applyForce(force) {
        let f = force.copy();
        f.mult(this.r * 0.09);
        this.acc.add(f);
    }

    update() {
        this.vel.limit(this.r);
        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.acc.mult(0);
    }

    render() {
        strokeWeight(this.r);
        stroke(255);
        image(snow, this.pos.x, this.pos.y, this.r, this.r);
    }
}