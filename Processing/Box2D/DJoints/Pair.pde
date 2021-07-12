class Pair {
  Circle c1;
  Circle c2;
  float len;
  Pair(float x, float y, float len) {
    len = 32;
    c1 = new Circle(x,y);
    c2 = new Circle(x+random(-1,1),y+random(-1,1));

    DistanceJointDef djd = new DistanceJointDef();
    djd.bodyA = c1.body;
    djd.bodyB = c2.body;
    djd.length = box2d.scalarPixelsToWorld(len);
    
    djd.frequencyHz = 3;
    djd.dampingRatio = 0.1;

    DistanceJoint dj = (DistanceJoint) box2d.world.createJoint(djd);
  }
  
  void render() {
    Vec2 pos1 = box2d.getBodyPixelCoord(c1.body);
    Vec2 pos2 = box2d.getBodyPixelCoord(c2.body);
    stroke(0);
    strokeWeight(2);
    line(pos1.x,pos1.y,pos2.x,pos2.y);

    c1.render();
    c2.render();
  }
}
