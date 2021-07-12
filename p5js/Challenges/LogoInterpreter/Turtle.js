class Turtle {
    constructor(x, y, ang) {
        // this.x = x;
        // this.y = y;
        // this.dir = ang;
        translate(x, x);
        rotate(ang);
        this.pen = true;
    }

    forb(amt) {
        if (this.pen) {
            line(0, 0, amt, 0);
        }
        translate(amt, 0);
    }

    rorl(ang) {
        rotate(ang);
    }
}