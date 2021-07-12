class Smoke {
    constructor() {
        this.pos = createVector(random(width), random(height));
        this.al = random(5, 20);
        this.r = random(30, 150);
    }

    update() {
        this.pos.x += random(-5, 5);
        this.pos.y += random(-11, -1);
        if (this.pos.y <= -this.r) {
            this.pos.y = height + this.r;
        }
    }

    render() {
        noStroke();
        fill(255, this.al);
        ellipse(this.pos.x, this.pos.y, this.r);
    }
}
