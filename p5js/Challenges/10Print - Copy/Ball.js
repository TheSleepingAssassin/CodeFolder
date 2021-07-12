class Ball {
	constuctor() {
		this.pos = createVector(width / 2, height / 2);
		this.vel = createVector();
		this.acc = createVector();
	}

	run() {
		this.update();
		this.bounce();
		this.render();
	}

	bounce() {
		if (this.pos.x > width - this.r || this.pos.x < -this.r) {
			this.vel.x *= -1
		}

		if (this.pos.y > height - this.r || this.pos.y < -this.r) {
			this.vel.y *= -1;
		}
	}

	update() {
		this.vel.add(this.acc);
		this.pos.add(this.vel);
		this.acc.mult(0);
	}

	render() {
		push();
		translate(this.pos.x, this.pos.y);
		fill(255);
		ellipse(0, 0, this.r * 2);
		pop();
	}
}