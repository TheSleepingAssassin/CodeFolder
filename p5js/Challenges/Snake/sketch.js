let s;
let rez = 20;
let w, h;
let food;

function setup() {
	createCanvas(windowWidth, windowHeight);
	frameRate(17);
	noStroke();
	w = floor(width / rez);
	h = floor(height / rez);
	s = new Snake();
	foodLocation();
}

function foodLocation() {
	let x = floor(random(w));
	let y = floor(random(h));
	food = createVector(x, y);
}

function keyPressed() {
	if (keyCode === RIGHT_ARROW) {
		s.setDir(1, 0);
	}
	if (keyCode === UP_ARROW) {
		s.setDir(0, -1);
	}
	if (keyCode === DOWN_ARROW) {
		s.setDir(0, 1);
	}
	if (keyCode === LEFT_ARROW) {
		s.setDir(-1, 0);
	}
}

function draw() {
	background(0);
	scale(rez);
	s.render();
	s.update();
	if (s.eat(food)) {
		foodLocation();
	}

	if (s.endGame()) {
		noLoop();
		background(255, 0, 0);
	}

	noStroke();
	fill(255, 0, 0);
	rect(food.x, food.y, 1, 1);
}