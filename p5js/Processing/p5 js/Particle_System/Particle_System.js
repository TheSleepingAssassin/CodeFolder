let particles = [];

function setup() {
  createCanvas(600, 400);

}

function draw() {
  background(0);
    
  let p = new Particle();
  particles.push(p);
  
  for(let i = 0; i < particles.length; i++) {
   
    particles[i].update();
    particles[i].show();
    
    if(particles[i].finished()) {
       
       particles.splice(i, 1);
    }
  }

}
