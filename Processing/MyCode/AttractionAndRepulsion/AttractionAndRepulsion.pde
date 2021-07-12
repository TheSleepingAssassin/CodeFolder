Body[] bs = new Body[200];
Attractor a;

void setup() {
	// size(600, 600);
	fullScreen();

	for (int i = 0; i < bs.length; i++) {
		bs[i] = new Body((int) random(width), (int) random(height), 2);
	}

	a = new Attractor(width / 2, height / 2, 4);
}

void draw() {
	background(51);

	for (int i = 0; i < bs.length / 2; i++) {
		bs[i].render();
		bs[i].update();
	}

	a.render();

	for (int i = bs.length / 2; i < bs.length; i++) {
		bs[i].render();
		bs[i].update();
	}

	for (Body b : bs) {
		a.attract(b);
	}
}