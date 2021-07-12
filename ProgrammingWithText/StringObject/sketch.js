let textField, submit, output, ind;

function setup() {
	noCanvas();
	textField = select('#area');
	submit = select("#submit");
	output = select('#output');
	submit.mousePressed(textInput);
	ind = select("#inp");
}

function textInput() {
	createP(textField.value());
	let s = textField.value();
	let inp = ind.value();
	createP(s.length);
	let index = s.indexOf(inp);
	if (index >= 0) {
		createP(index + 1);
	} else {
		createP(index);
	}
}