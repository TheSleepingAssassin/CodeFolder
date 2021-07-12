import processing.video.*;

Capture video;
Body[] bodies = new Body[2000];

void setup() {
  size(640, 480);
  background(51);
  video = new Capture(this, Capture.list()[1]);
  video.start();
  for (int i = 0; i < bodies.length; i++) {
    bodies[i] = new Body();
  }
  println(displayWidth);
  println(displayHeight);
}

void captureEvent(Capture video) {
  video.read();
}

void draw() {
  for (Body b : bodies) {
    b.render();
    b.update();
    b.bounce();
  }
}
