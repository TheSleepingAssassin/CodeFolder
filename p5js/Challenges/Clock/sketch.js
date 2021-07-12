function setup() {
	createCanvas(windowWidth, windowHeight);
	angleMode(DEGREES);
}

function draw() {
	background(51);
	translate(width / 2, height / 2);
	rotate(-90);
	let sc = second();
	let mn = minute();
	let hr = hour();

	strokeWeight(8);
	noFill();

	stroke(255, 0, 255);
	let end = map(sc, 0, 60, 0, 360);
	arc(0, 0, 300, 300, 0, end);

	stroke(255, 150, 0);
	let end1 = map(mn, 0, 60, 0, 360);
	arc(0, 0, 280, 280, 0, end1);

	stroke(0, 255, 150);
	let end2 = map(hr % 12, 0, 12, 0, 360);
	arc(0, 0, 260, 260, 0, end2);

	push();
	rotate(end);
	stroke(255, 0, 255);
	line(0, 0, 150, 0);
	pop();

	push();
	rotate(end1);
	stroke(255, 150, 0);
	line(0, 0, 140, 0);
	pop();

	push();
	rotate(end2);
	stroke(0, 255, 150);
	line(0, 0, 130, 0);
	pop();

	stroke(255);
	point(0, 0);
}