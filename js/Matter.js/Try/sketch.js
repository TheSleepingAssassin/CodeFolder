var Engine = Matter.Engine,
	Render = Matter.Render,
	World = Matter.World,
	Bodies = Matter.Bodies;

var engine = Engine.create();
var width = 800;
var height = 600;

var render = Render.create({
	element: document.body,
	engine: engine
});

// var boxA = Bodies.rectangle(400, 200, 80, 80);
// var boxB = Bodies.rectangle(450, 50, 80, 80);
let r = 20;
var down = Bodies.rectangle(width / 2, height, width, r, {
	isStatic: true
});
var right = Bodies.rectangle(width, height / 2, r, height, {
	isStatic: true
});
var up = Bodies.rectangle(width / 2, 0, width, r, {
	isStatic: true
});
var left = Bodies.rectangle(0, height / 2, r, height, {
	isStatic: true
});
var circle = Bodies.circle(width / 2, height / 2, r, {
	isStatic: false
});

World.add(engine.world, [down, right, up, left, circle]);

Engine.run(engine);

Render.run(render);
