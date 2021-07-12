let b;

function setup() {
	createCanvas(windowWidth, windowHeight);
	b = new Ball(width / 2, height / 2);
}

function draw() {
	background(0);
	b.show();
	b.update();
	b.bounce();
}