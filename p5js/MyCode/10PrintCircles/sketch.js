let x = 0;
let y = 0;
let spce = 30;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);
}

function draw() {
	stroke(255);
	if (random(1) < 0.5) {
		fill(255);
		ellipse(x + spce / 2, y + spce / 2, spce);
	} else {
		noFill();
		ellipse(x + spce / 2, y + spce / 2, spce);
	}
	x += spce;
	if (x > width) {
		x = 0;
		y += spce;
	}
}