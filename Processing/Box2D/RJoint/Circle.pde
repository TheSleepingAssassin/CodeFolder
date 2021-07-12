class Circle {
  Body b;
  float r;
  Circle(float x, float y, float r) {
    this.r = r;
    
    BodyDef bd = new BodyDef();
    bd.type = BodyType.DYNAMIC;
    bd.position.set(sh2d.coordPixelsToWorld(x, y));
    
    b = sh2d.createBody(bd);
    
    CircleShape cs = new CircleShape();
    cs.m_radius = sh2d.scalarPixelsToWorld(r);

    FixtureDef fd = new FixtureDef();
    fd.shape = cs;
    fd.density = 1;
    fd.friction = 0.01;
    fd.restitution = 0.3;
    
    b.createFixture(fd);
    b.setLinearVelocity(new Vec2(random(-5, 5), random(2, 5)));
  }
  
  boolean out() {
    Vec2 pos = sh2d.getBodyPixelCoord(b);
    return (pos.x > width + r || pos.x < -r || pos.y > height + r || pos.y < -r);
  }
  
  void killBody() {
    sh2d.destroyBody(b);
  }
  
  void render() {
    Vec2 pos = sh2d.getBodyPixelCoord(b);
    float a = b.getAngle();
    
    pushMatrix();
    translate(pos.x, pos.y);
    rotate(-a);
    fill(127);
    ellipse(0, 0, r * 2, r * 2);
    stroke(255);
    line(0, 0, r, 0);
    popMatrix();
  }
}
