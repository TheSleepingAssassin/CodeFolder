class Joint {
  RevoluteJoint rj;
  Box b, b1;
  Joint(float x, float y) {
    float w = 75;
    float h = 10;
    b = new Box(x, y - w / 2, w + 50, h, true);
    b1 = new Box(x, y, h, w, false);

    RevoluteJointDef rjd = new RevoluteJointDef();
    
    rjd.initialize(b.b, b1.b, b.b.getWorldCenter());
    
    rjd.motorSpeed = PI * 2;
    rjd.maxMotorTorque = 1000.0;
    rjd.enableMotor = true;
    
    rj = (RevoluteJoint) sh2d.world.createJoint(rjd);
  }
  
  void toggle() {
    rj.enableMotor(!rj.isMotorEnabled());
  }
  
  boolean motor() {
    return rj.isMotorEnabled();
  }
  
  void render() {
    b.render();
    b1.render();
  }
}
