const {
	Engine,
	World,
	Bodies,
	MouseConstraint,
	Mouse
} = Matter;

let engine, world, mConst;
let boxes = [];
let bounds = [];

function setup() {
	let canvas = createCanvas(windowWidth, windowHeight);
	rectMode(CENTER);
	noStroke();

	engine = Engine.create();
	world = engine.world;

	for (let r = 20, i = 0; i < 250; i++) {
		boxes.push(new Box(random(r, width - r), random(r, height - r), r, r));
	}

	let r = 20;
	let statics = true;
	bounds.push(new Box(width / 2, height, width, r, statics));
	bounds.push(new Box(width, height / 2, r, height, statics));
	bounds.push(new Box(width / 2, 0, width, r, statics));
	bounds.push(new Box(0, height / 2, r, height, statics));

	const mouse = Mouse.create(canvas.elt);
	const options = {
		mouse: mouse
	}
	mConst = MouseConstraint.create(engine, options);
	World.add(world, mConst)
}

function draw() {
	background(51);
	Engine.update(engine);

	// if (mouseIsPressed) {
	// 	boxes.push(new Box(mouseX, mouseY, 20, 20));
	// }

	for (let b of boxes) {
		b.render();
	}

	for (let b of bounds) {
		b.render();
	}
}