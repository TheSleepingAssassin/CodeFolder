let field, submit, output;

function setup() {
	noCanvas();
	field = select('#input');
	submit = select("#submit");
	output = select("#output");
	submit.mousePressed(newText);
}

function newText() {
	let s = field.value();
	let words = s.split(/(\W+)/);

	for (let i = 0; i < words.length; i++) {
		let span = createSpan(words[i]);
		span.parent(output);

		span.mouseOver(function () {
			this.html("You've been gnomed");
			let c = color(random(50, 200), random(50, 200), random(50, 200));
			this.style('background-color', c);
		});
	}
}