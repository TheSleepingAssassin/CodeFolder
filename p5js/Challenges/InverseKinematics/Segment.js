class Segment {
	constructor(point, len, ang) {
		this.len = len;
		this.ang = ang;
		this.child;
		this.b = createVector();
		if (point.hasOwnProperty("ang")) {
			this.par = point;
			this.a = this.par.b.copy();
		} else {
			this.par = false;
			this.a = point.copy();
		}
	}

	followw()
	{
		let target = createVector(this.child.a.x, this.child.a.y);
		this.follow(target);
	}

	follow(t) {
		let target = t;
		let dir = p5.Vector.sub(target, this.a);
		this.ang = dir.heading();

		dir.setMag(this.len);
		dir.mult(-1);

		this.a = p5.Vector.add(target, dir);
	}

	calcB() {
		let dx = this.len * cos(this.ang);
		let dy = this.len * sin(this.ang);
		this.b.set(this.a.x + dx, this.a.y + dy);
	}

	update() {
		this.calcB();
	}

	render() {
		stroke(255);
		strokeWeight(7);
		line(this.a.x, this.a.y, this.b.x, this.b.y);
	}
}