let points;
let current;

function setup() {
	createCanvas(600, 600);
	reset();
}

function reset() {
	points = [];
	background(51);
	for (let i = 0; i < 3; i++) {
		let v = createVector(random(width), random(height));
		points.push(v);
	}
	current = createVector(random(width), random(height));

	stroke(255);
	strokeWeight(2);
	for (let p of points) {
		point(p.x, p.y);
	}
}

function draw() {

	if (frameCount % 100 == 0) {
		reset();
	}

	for (let i = 0; i < 100; i++) {
		strokeWeight(2);
		stroke(255, 0, 255);
		let next = random(points);
		current.x = lerp(current.x, next.x, 0.5);
		current.y = lerp(current.y, next.y, 0.5);
		point(current.x, current.y);
	}
}