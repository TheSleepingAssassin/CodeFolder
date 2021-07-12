let field, submit;

function setup() {
  noCanvas();

  field = select("#input");
  submit = select('#submit');
  submit.mousePressed(textInput);
}

function textInput() {
  let s = field.value();
  let r = /(\d{3})[-.](\d{4})/g;

  let ns = s.replace(r, (match, gr1, gr2) => {
		console.log(match);
		console.log(gr1);
		console.log(gr2);
		return match;
  });
  createP(ns);
}

function replacer(match, gr1, gr2) {
  console.log(match);
  console.log(gr1);
  console.log(gr2);
  return match;
}
