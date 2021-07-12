let cells = [];

function setup() {
	createCanvas(windowWidth, windowHeight);
	for (let i = 0; i < 10; i++) {
		cells.push(new Cell());
	}
}

function draw() {
	background(0);
	for (let cell of cells) {
		cell.render();
		cell.move();
	}
}

function mousePressed() {
	for (let i = cells.length - 1; i >= 0; i--) {
		if (cells[i].clicked(mouseX, mouseY)) {
			cells.push(cells[i].mitosis());
			cells.push(cells[i].mitosis());
			cells.splice(i, 1);
		}
	}
}