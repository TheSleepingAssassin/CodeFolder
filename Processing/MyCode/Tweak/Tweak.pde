float x, y, r;

void setup()
{
  size(600, 600);
  
  x = 0;
  y = height / 2;
  r = 20;
}

void draw()
{
  background(51);
  ellipse(x, y, r, r);
  
  if (x > width + r)
  {
    x = -r;
  }
  
  x += 1;
}
