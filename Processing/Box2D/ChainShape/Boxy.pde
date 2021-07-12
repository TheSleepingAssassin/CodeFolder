class Boxy {
  float w, h;
  BodyDef bd;
  Body body;
  PolygonShape ps;
  Boxy(float x, float y, float w, float h) {
    this.w = w;
    this.h = h;

    BodyDef bd = new BodyDef();
    bd.type = BodyType.DYNAMIC;
    bd.position.set(box2d.coordPixelsToWorld(x, y));
    body = box2d.createBody(bd);

    PolygonShape ps = new PolygonShape();
    float box2dW = box2d.scalarPixelsToWorld(w/2);
    float box2dH = box2d.scalarPixelsToWorld(h/2);
    ps.setAsBox(box2dW, box2dH);

    FixtureDef fd = new FixtureDef();
    fd.shape = ps;
    fd.density = 1;
    fd.friction = 0.3;
    fd.restitution = 0.5;

    body.createFixture(fd);
 }

 boolean out() {
   Vec2 pos = box2d.getBodyPixelCoord(body);
   return (pos.x > width + w || pos.x < -w || pos.y > height + h || pos.y < -h);
 }

 void killBody() {
  box2d.destroyBody(body);
 }

  void render() {
    Vec2 pos = box2d.getBodyPixelCoord(body);
    float a = body.getAngle();

    pushMatrix();
    translate(pos.x, pos.y);
    rotate(-a);
    stroke(0);
    fill(255);
    rect(0, 0, this.w, this.h);
    popMatrix();
  }
}
