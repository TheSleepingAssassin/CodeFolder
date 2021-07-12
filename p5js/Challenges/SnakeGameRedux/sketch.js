let snake;
let rez = 20;
let food, w, h;

function setup() {
	createCanvas(windowWidth, windowHeight);
	frameRate(17);
	w = floor(width / rez);
	h = floor(height / rez);
	snake = new Snake();
	foodLocation();
}

function foodLocation() {
	let x = floor(random(w));
	let y = floor(random(h));
	food = createVector(x, y);
}

function keyPressed() {
	if (keyCode === RIGHT_ARROW) {
		snake.setDir(1, 0);
	}
	if (keyCode === LEFT_ARROW) {
		snake.setDir(-1, 0);
	}
	if (keyCode === DOWN_ARROW) {
		snake.setDir(0, 1);
	}
	if (keyCode === UP_ARROW) {
		snake.setDir(0, -1);
	}
}

function draw() {
	background(0);
	scale(rez);
	snake.render();
	snake.update();
	if (snake.eat(food)) {
		foodLocation();
	}

	if (snake.endGame(width, height)) {
		noLoop();
		background(255, 0, 0);
	}

	noStroke();
	fill(255, 0, 0);
	rect(food.x, food.y, 1, 1);
}