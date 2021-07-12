let tentacle;

function setup() {
	createCanvas(windowWidth, windowHeight);
	let len = 100;

	let current = new Segment(createVector(width / 2, height / 2), len, 0);
	// for (let i = 0; i < 1; i++) {
	// 	let next = new Segment(current, len, 0);
	// 	current.child = next;
	// 	current = next;
	// }
	// tentacle = current;
	tentacle = current;
}

function draw() {
	background(51);
	let mouse = createVector(mouseX, mouseY);

	tentacle.follow(mouse);
	tentacle.update();
	tentacle.render();
	// let next = tentacle.par;
	// while (next) {
	// 	next.followw();
	// 	next.update();
	// 	next.render();
	// 	next = next.par;
	// }
}