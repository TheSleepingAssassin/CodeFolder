ArrayList<Ball> balls;

void setup() {
	size(700, 600);
	balls = new ArrayList<Ball>();
	balls.add(new Ball(new PVector(width / 2, height / 2), 16));
}

void mousePressed() {
	balls.add(new Ball(new PVector(mouseX, mouseY), 16));
}

void draw() {
	background(51);
	for (Ball b : balls) {
		b.render();
		b.update();
		b.bounce();
	}
}
