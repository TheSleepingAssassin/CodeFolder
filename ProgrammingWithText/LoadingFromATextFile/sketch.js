let button;

function loadF() {
  loadStrings('text.txt', fLoaded);
}

function fLoaded(data) {
  createP(join(data, "<br/>"));
}

function fileSelected(file) {
  createP(file.name + " " + file.size + " " + file.type);
  if (file.type === "text") {
    createP(file.data);
  } else {
    createP("I need a text file.");
  }
  console.log(file);
}

function setup() {
  noCanvas();

  createFileInput(fileSelected);

  button = select('#loadText');
  button.mousePressed(loadF);
}