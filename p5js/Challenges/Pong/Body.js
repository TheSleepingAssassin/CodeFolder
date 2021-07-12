class Body {
    constructor() {
        this.rest();
        this.r = 16;
    }

    checkLX() {
        return this.pos.x <= this.r;
        this.rest();
    }

    checkRX() {
        return this.pos.x >= width - this.r;
        this.rest();
    }

    bounceY() {
        if (this.pos.y >= height - this.r || this.pos.y <= this.r) {
            this.vy = -this.vy;
        }
    }

    rest() {
        this.pos = createVector(width / 2, height / 2);
        this.vx = random(3, 5);
        this.vy = random(3, 5);
    }

    update() {
        this.pos.x += this.vx;
        this.pos.y += this.vy;
    }

    render() {
        ellipse(this.pos.x, this.pos.y, this.r * 2);
    }
}