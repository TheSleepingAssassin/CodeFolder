let particles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {

  background(255);

  for (let i = 0; i < 1; i++) {

    particles.push(new Particle(width / 2, height / 2, 10));

    for (let p of particles) {

      p.run();
      setTimeout(p.applyG, 2000);

    }

  }

  for (let i = particles.length - 1; i >= 0; i--) {

    if (particles[i].dead()) {

      particles.splice(i, 1);

    }

  }

}