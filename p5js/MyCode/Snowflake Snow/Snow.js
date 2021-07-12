class Snow {
    constructor(x, y) {
        this.pos = createVector(x, y);
        this.r = random(5, 80);
        this.mass = this.r;
        this.vel = createVector();
        this.acc = createVector();
        this.g = createVector(0, 0.001);
    }

    applyG() {
        let f = this.g.copy();
        f.mult(this.mass);
        this.acc.add(f);
    }

    update() {
        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.acc.mult(0);
    }

    render() {
        strokeWeight(this.r * 2);
        stroke(255);
        image(flake, this.pos.x, this.pos.y, this.r, this.r);
    }
}