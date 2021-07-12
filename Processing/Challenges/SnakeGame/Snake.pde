class Snake {
  ArrayList<PVector> body;
  float xdir, ydir, len;
  Snake() {
    this.body = new ArrayList<PVector>();
    this.body.add(new PVector(floor(w / 2), floor(h / 2)));
    this.xdir = 0;
    this.ydir = 0;
    this.len = 0;
  }

  boolean endGame() {
    float x = body.get(body.size() - 1).x;
    float y = body.get(body.size() - 1).y;
    if (x > w - 1 || x < 0 || y > h - 1 || y < 0) {
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

  void update() {
    PVector head = body.get(body.size() - 1).copy();
    body.remove(0);
    head.x += xdir;
    head.y += ydir;
    body.add(head);
  }

  void render() {
    for (int i = 0; i < body.size(); i++) {
      fill(0, 255, 0);
      noStroke();
      rect(body.get(i).x, body.get(i).y, 1, 1);
    }
  }
}
