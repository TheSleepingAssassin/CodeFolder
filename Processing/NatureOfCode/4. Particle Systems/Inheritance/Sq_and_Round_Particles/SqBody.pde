class SqBody extends Body {
  SqBody(PVector _pos) {
    super(_pos);
  }
  
  void render() {
    fill(127, life);
    noStroke();
    rect(pos.x, pos.y, r * 2, r * 2);
  }
}
