let noiseMax = 2;
let slider;
let phase = 0;

function setup() {
	createCanvas(600, 600);
	slider = createSlider(0, 10, 0, 0.1);
}

function draw() {
	background(0);
	translate(width / 2, height / 2);
	noFill();
	stroke(255);
	beginShape();
	noiseMax = slider.value();
	for (let a = 0; a < TWO_PI; a += 0.2) {
		let xoff = map(cos(a + phase), -1, 1, 0, noiseMax);
		let yoff = map(sin(a + phase), -1, 1, 0, noiseMax);
		let r = map(noise(xoff, yoff), 0, 1, 100, 200);
		let x = r * cos(a);
		let y = r * sin(a);
		vertex(x, y);
	}
	endShape(CLOSE);
	phase += 0.01;
}