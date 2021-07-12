Segment sn;
PVector mouse;

void setup() {
	fullScreen();
  mouse = new PVector(mouseX, mouseY);
	int len = 5;
  Segment curr = new Segment(300, height / 2, len, 0);
  for (int i = 0; i < 500; i++) {
    Segment nex = new Segment(curr, len, 0);
    curr.child = nex;
    curr = nex;
  }
  sn = curr;
}

void draw() {
  background(51);
  sn.follow(mouseX, mouseY);
  sn.run();
  Segment nex = sn.parent;
  while (nex != null) {
    nex.follow();
    nex.run();
    nex = nex.parent;
  }
  //s1.run();
  //s.follow(mouseX, mouseY);
  //s1.follow(s.a.x, s.a.y);
}
