class Spring
{
  MouseJoint mj;
  Spring()
  {
    mj = null;
  }

  void update(float x, float y)
  {
    if (mj != null)
    {
      Vec2 mW = box2d.coordPixelsToWorld(x, y);
      mj.setTarget(mW);
    }
  }

  void bind(float x, float y, Box b)
  {
    MouseJointDef md = new MouseJointDef();
    md.bodyA = box2d.getGroundBody();
    md.bodyB = b.b;
    Vec2 mp = box2d.coordPixelsToWorld(x, y);
    md.target.set(mp);
    md.maxForce = 1000.0 * b.b.m_mass;
    md.frequencyHz = 5.0;
    md.dampingRatio = 0.9;

    mj = (MouseJoint) box2d.world.createJoint(md);
  }

  void destroy()
  {
    if (mj != null)
    {
      box2d.world.destroyJoint(mj);
      mj = null;
    }
  }
}
