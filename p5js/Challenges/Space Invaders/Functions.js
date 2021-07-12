function keyReleased() {
  if (key != ' ') {
    s.setDir(0);
  }
}

function keyPressed() {
  if (keyCode === RIGHT_ARROW) {
    s.setDir(2);
  } else if (keyCode === LEFT_ARROW) {
    s.setDir(-2);
  }
  if (key === ' ') {
    bulls.push(new Bullet(s.x, height - s.h));
  }
}
