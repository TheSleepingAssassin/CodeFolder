let particles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  for (let i = 0; i < 2; i++) {
    particles.push(new Particle());
  }
  for (let p of particles) {
    p.render();
    p.update();
  }
  for (let i = particles.length - 1; i >= 0; i--) {
    let p = particles[i];
    if (p.al <= 0) {
      particles.splice(i, 1);
    }
  }
}