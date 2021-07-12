let tree;

function setup() {
  createCanvas(600, 600);
  background(51);
  tree = new Tree();
  for (let i = 0; i < 100; i++) {
    tree.addValue(floor(random(1, 10)));
  }
  console.log(tree);

  tree.traverse();
}

function draw() {}