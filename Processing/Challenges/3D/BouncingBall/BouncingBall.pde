import peasy.*;

PeasyCam cam;

void setup()
{
  size(600, 600, P3D);
  noStroke();

  cam = new PeasyCam(this, 500);
}

void draw()
{
  background(51);

  sphere(200);
}
