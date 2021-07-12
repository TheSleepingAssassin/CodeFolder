Bubble [] bubbles = new Bubble[75];

void setup() {
  size(600, 400);
  
  for(int i = 0; i < bubbles.length; i++) {
    bubbles[i] = new Bubble();
  }
}

void draw() {
 background(0, 125, 255);
  
  for(int i = 0; i < bubbles.length; i++) {
    bubbles[i].show();
    bubbles[i].ascend();
    bubbles[i].top();
  }
}
