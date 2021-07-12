let particles = [];

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(0);
  let p = new Particle();
  particles.push(p);

  for (let p of particles) {
    p.show();
    p.update();
    p.shrink();
  }
  for (let i = particles.length - 1; i >= 0; i--) {
    if (particles[i].finished()) {
      particles.splice(i, 1);
    }
  }
}
