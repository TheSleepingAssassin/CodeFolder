let s;
let asters = [];
let lasers = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  s = new Ship();
  for (let i = 0; i < 10; i++) {
    asters.push(new Asteroid());
  }
}

function keyReleased() {
  if (keyCode === RIGHT_ARROW) {
    s.setRot(0);
  } else if (keyCode === LEFT_ARROW) {
    s.setRot(0);
  } else if (keyCode === UP_ARROW) {
    s.thrusting(false);
  }
}

function keyPressed() {
  if (keyCode === RIGHT_ARROW) {
    s.setRot(0.1);
  } else if (keyCode === LEFT_ARROW) {
    s.setRot(-0.1);
  } else if (keyCode === UP_ARROW) {
    s.thrusting(true);
  } else if (key === ' ') {
    lasers.push(new Laser(s.pos, s.heading));
  }
}

function draw() {
  background(0);

  for (var j = asters.length - 1; j >= 0; j--) {
    for (var i = lasers.length - 1; i >= 0; i--) {
      if (lasers[i].hits(asters[j])) {
        let nA = asters[j].break2();
        asters = asters.concat(nA);
        asters.splice(j, 1);
        lasers.splice(i, 1);
        console.log(nA);
      }
    }
  }

  for (let ast of asters) {
    ast.render();
    ast.update();
    ast.edges();
  }

  for (let l of lasers) {
    l.render();
    l.update();
  }

  for (let i = 0; i < lasers.length; i++) {
    let l = lasers[i];
    if (l.pos.x > width || l.pos.x < 0 || l.pos.y < 0 || l.pos.y > height) {
      lasers.splice(i, 1);
    }
  }

  s.render();
  s.turn();
  s.update();
  s.edges();
}