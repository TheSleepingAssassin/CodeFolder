class Shape {
  Body b;
  Shape(float x, float y) {
    makeBody(new Vec2(x, y));
  }

  void render() {
    Vec2 pos = box2d.getBodyPixelCoord(b);
    float a = b.getAngle();

    Fixture f = b.getFixtureList();

    PolygonShape ps = (PolygonShape) f.getShape();

    pushMatrix();
    translate(pos.x, pos.y);
    rotate(-a);
    stroke(0);
    fill(255);
    beginShape();
    for (int i = 0; i < ps.getVertexCount(); i++) {
      Vec2 v = box2d.vectorWorldToPixels(ps.getVertex(i));
      vertex(v.x, v.y);
    }
    endShape(CLOSE);
    popMatrix();
  }

  void makeBody(Vec2 center) {
    Vec2[] vertices = new Vec2[4];
    vertices[0] = box2d.vectorPixelsToWorld(new Vec2(-15, 25));
    vertices[1] = box2d.vectorPixelsToWorld(new Vec2(15, 0));
    vertices[2] = box2d.vectorPixelsToWorld(new Vec2(20, -15));
    vertices[3] = box2d.vectorPixelsToWorld(new Vec2(-10, -10));

    // Define a polygon (this is what we use for a rectangle)
    PolygonShape ps = new PolygonShape();
    ps.set(vertices, vertices.length);

    // Define the body and make it from the shape
    BodyDef bd = new BodyDef();
    bd.type = BodyType.DYNAMIC;
    bd.position.set(box2d.coordPixelsToWorld(center));
    b = box2d.createBody(bd);

    b.createFixture(ps, 1.0);


    // Give it some initial random velocity
    b.setLinearVelocity(new Vec2(random(-5, 5), random(2, 5)));
    b.setAngularVelocity(random(-5, 5));
  }
}
