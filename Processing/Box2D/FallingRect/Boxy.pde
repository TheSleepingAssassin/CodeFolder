class Boxy {
  float x, y, w, h;
  BodyDef bd;
  Body body;
  PolygonShape ps;
  FixtureDef fd;
  Boxy(float x, float y, float w, float h) {
    this.w = w;
    this.h = h;

    bd = new BodyDef();
    bd.type = BodyType.DYNAMIC;
    bd.position.set(box2d.coordPixelsToWorld(x, y));

    body = box2d.createBody(bd);

    ps = new PolygonShape();
    float box2dw = box2d.scalarPixelsToWorld(w / 2);
    float box2dh = box2d.scalarPixelsToWorld(h / 2);
    ps.setAsBox(box2dw, box2dh);

    fd = new FixtureDef();
    fd.shape = ps;
    fd.density = 1;
    fd.friction = 0.3;
    fd.restitution = 0.5;

    body.createFixture(fd);
  }
  
  boolean offScreen() {
    return (x > width + w || x < -w || y > height + h || y < -h);
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
    fill(255);
    rect(0, 0, w, h);
    popMatrix();
  }
}
