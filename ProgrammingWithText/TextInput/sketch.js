let textField, output, submit;

function setup() {
  noCanvas();
  textField = select('#field');
  // textField = createInput();
  // textField.changed(textInput);
  textField.input(typing);
  output = select('#output');
  submit = select('#submit');
  submit.mousePressed(textInput);
}

function typing() {
  output.html(textField.value());
}

function textInput() {
  createP(textField.value());
}