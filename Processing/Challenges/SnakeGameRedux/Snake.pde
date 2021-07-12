class Snake {
  ArrayList<PVector> body;
  float xdir, ydir, len;
  Snake() {
    this.body = new ArrayList<PVector>();
    this.body.add(new PVector(floor(W / 2), floor(H / 2)));
    xdir = ydir = len = 0;
  }

  boolean endGame() {
    float x = body.get(body.size() - 1).x;
    float y = body.get(body.size() - 1).y;
    if (x > W - 1 || x < 0 || y > H - 1 || y < 0) {
      return true;
    }
    return false;
  }

  void grow() {
    PVector head = body.get(body.size() - 1).copy();
    len++;
    body.add(head);
  }

  boolean eat(PVector pos) {
    float x = body.get(body.size() - 1).x;
    float y = body.get(body.size() - 1).y;
    if (x == pos.x && y == pos.y) {
      grow();
      return true;
    }
    return false;
  }

  void setDir(float x, float y) {
    xdir = x;
    ydir = y;
  }

  void tick() {
    PVector head = body.get(body.size() - 1).copy();
    body.remove(0);
    head.x += xdir;
    head.y += ydir;
    body.add(head);
  }

  void render() {
    push();
    fill(0, 255, 0);
    noStroke();
    for (PVector b : body) {
      rect(b.x, b.y, 1, 1);
    }
    pop();
  }
}
