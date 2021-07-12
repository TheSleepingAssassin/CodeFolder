import processing.video.*;

Capture video;

void setup() {
  size(640, 480);
  video = new Capture(this, Capture.list()[1]);
  video.start();
}

void captureEvent(Capture video) {
  video.read();
}

void draw() {
  background(51);
  image(video, 0, 0);
}
