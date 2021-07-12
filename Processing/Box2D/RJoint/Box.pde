class Box {
  Body b;
  float w, h;
  Box(float x, float y, float w, float h, boolean tf) {
    this.w = w;
    this.h = h;
    
    BodyDef bd = new BodyDef();
    if (tf) {
      bd.type = BodyType.DYNAMIC;
    } else {
      bd.type = BodyType.STATIC;
    }
    bd.position.set(sh2d.coordPixelsToWorld(x, y));
    
    b = sh2d.createBody(bd);
    
    PolygonShape ps = new PolygonShape();
    float box2dw = sh2d.scalarPixelsToWorld(w / 2);
    float box2dh = sh2d.scalarPixelsToWorld(h / 2);
    ps.setAsBox(box2dw, box2dh);
    
    b.createFixture(ps, 1);
  }
  
  void render() {
    Vec2 pos = sh2d.getBodyPixelCoord(b);
    float a = b.getAngle();
    
    pushMatrix();
    translate(pos.x, pos.y);
    rotate(-a);
    fill(255);
    rect(0, 0, w, h);
    popMatrix();
  }
}
