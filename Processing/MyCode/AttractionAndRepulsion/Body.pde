class Body {

	PVector pos, vel, acc;
	float r, mass;

	Body(int x, int y, int m) {
		pos = new PVector(x, y);
		vel = new PVector();
		acc = new PVector();
		mass = m;
		r = sqrt(mass) * 10;
	}

	void applyForce(PVector force) {
		PVector f = PVector.div(force, mass);
		acc.add(f);
	}

	void update() {
		vel.add(acc);
		pos.add(vel);
		acc.mult(0);
	}

	void render() {
		pushMatrix();
		fill(255, 100);
		noStroke();
		ellipse(pos.x, pos.y, r * 2, r * 2);
		popMatrix();
	}

}
