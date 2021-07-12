class Attractor {

	PVector pos;
	float r;
	float g, mass;

	Attractor(int x, int y, int m) {
		pos = new PVector(x, y);
		mass = m;
		r = sqrt(mass) * 10;
		g = 25;
	}

	void attract(Body b) {
		PVector f = PVector.sub(this.pos, b.pos);
		float distSq = constrain(f.magSq(), this.g, 750);
		float strength = this.g * (this.mass * b.mass) / distSq;
		f.setMag(strength);
		b.applyForce(f);
	}

	void render() {
		pushMatrix();
		fill(255, 0, 0, 150);
		noStroke();
		ellipse(pos.x, pos.y, r * 2, r * 2);
		popMatrix();
	}

}
