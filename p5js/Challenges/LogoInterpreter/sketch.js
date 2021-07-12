let editor;
let tur;

function setup() {
	createCanvas(400, 400);
	tur = new Turtle(width / 2, height / 2, 0);
	editor = select('#code');
	let code = editor.value();
	let tokens = code.split(' ');

	for (token of tokens) {

	}
	console.table(tokens);
}

function draw() {
	background(0);
}