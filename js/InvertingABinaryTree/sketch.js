let field, submit;

function setup() {
  noCanvas();

  field = select('#input');
  submit = select('#submit');
  submit.mousePressed(textInput);
}