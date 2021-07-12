Puck p;
Paddle left, right;

void setup() {
	size(600, 600);
	rectMode(CENTER);
	noStroke();
	noFill();
	strokeWeight(1);

	p = new Puck();
	float w = 10;
	float h = 100;
	float offset = 10;
	left = new Paddle(new PVector(offset + w, height / 2), w, h);
	right = new Paddle(new PVector((height - offset) - w, height / 2), w, h);
}

void checkIntersection() {
	if (p.intersects(right) || p.intersects(left)) {
		p.reverse();
	}
}

void keyReleased() {
	if (key == 'w') {
		left.subV(false);
	}
	if (key == 's') {
		left.addV(false);
	}
	if (key == 'i') {
		right.subV(false);
	}
	if (key == 'k') {
		left.addV(false);
	}
}

void keyPressed() {
	if (key == 'w') {
		left.subV(true);
	} else if (key == 's') {
		left.addV(true);
	}

	if (key == 'i') {
		right.subV(true);
	} else if (key == 'k') {
		right.addV(true);
	}
}

void draw() {
	background(51);

	p.render();
	p.edges();
	p.update();

	left.render();
	right.render();

	checkIntersection();
}
