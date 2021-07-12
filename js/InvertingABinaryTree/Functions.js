function textInput() {
  let s = field.value().split();

  let root = new Node(1);
  root.left = new Node(2);
  root.left.left = new Node(3);
  root.right = new Node(4);
  root.right.left = new Node(5);
  root.right.right = new Node(6);
  createP("Inorder traversal before insertion: ");
  inorder(root);

  let key = 12;
  insert(root, key);

  createP(" ");
  createP("Inorder traversal after insertion: ");
  inorder(root);
}

function printText(text) {
  createP(text);
}

function inorder(temp) {
  if (!temp) {
    return;
  }

  inorder(temp.left);
  console.log(temp.key + " ");
  inorder(temp.right);
}


function insert(temp, key) {
  if (!temp) {
    let root = new Node(key);
    return;
  }

  let q = [];
  q.push(temp);

  while (q.length != 0) {
    let tempp = q[0];
    q.pop(0);

    if (!tempp.left) {
      tempp.left = new Node(key);
      break;
    } else {
      q.push(tempp.left);
    }

    if (!tempp.right) {
      tempp.right = new Node(key);
      break;
    } else {
      q.push(tempp.right);
    }
  }
}