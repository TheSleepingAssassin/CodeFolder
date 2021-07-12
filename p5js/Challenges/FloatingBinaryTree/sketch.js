let tree;

function setup() {
  createCanvas(windowWidth, windowHeight);
  tree = new Tree(width / 2, 50);
  for (let i = 0; i < 5; i++) {
    tree.addValue(floor(random(10)));
  }
  console.log(tree);
  tree.travel();
}

function draw() {
  background(51);
}