void setup()
{
  size(600, 600);
  stroke(255);
  noFill();
}

void draw()
{
  background(51);
  drawCircle(width / 2, height / 2, 200);
}

void drawCircle(float x, float y, float d)
{
  ellipse(x, y, d, d);
  if (d > 2)
  {
    drawCircle(x + d * 0.5, y, d * 0.5);
    drawCircle(x - d * 0.5, y, d * 0.5);
  }
}
