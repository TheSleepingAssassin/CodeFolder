let bodies = [];
let att;

function setup() {
	createCanvas(windowWidth, windowHeight);
	for (let i = 0; i < 50; i++) {
		bodies.push(new Body(random(width), random(height), 2));
	}
	att = new Attractor(width / 2, height / 2, 4);
}

function draw() {
	background(0);
	att.render();

	for (let body of bodies) {
		att.attract(body);
		body.render();
		body.update();
	}
}