let Engine = Matter.Engine,
  World = Matter.World,
  Bodies = Matter.Bodies,
  Constraint = Matter.Constraint,
  MouseC = Matter.MouseConstraint,
  Mouse = Matter.Mouse;

let engine, world;
let mConst;
let particles = [];
let bound;
let r = 8;
let d = r * 2;
let canvas;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  noStroke();

  let prev = null;
  for (let x = 0; x < 50; x += 5) {
    let fixed = false;
    if (!prev) {
      fixed = true;
    }

    let p = new Particle(x + width / 2, height / 2 - 50, r, fixed);
    particles.push(p);
    if (prev) {
      let options = {
        bodyA: p.body,
        bodyB: prev.body,
        length: d,
        stiffness: 0.2
      };

      let constraint = Constraint.create(options);
      World.add(world, constraint);
    }
    prev = p;
  }
  let br = 20;
  bound = new Bound(width / 2, height + br, width, br * 2);

  let canvasM = Mouse.create(canvas.elt);
  let options = {
    mouse: canvasM
  };
  mConst = MouseC.create(engine, options);
  World.add(world, mConst);
}





function draw() {
  background(51);
  Engine.update(engine);

  // stroke(255);
  // line(particles[0].pos.x, particles[0].pos.y, particles[1].pos.x, particles[1].pos.y);

  for (let p of particles) {
    p.render();
  }
  bound.render();

  if (mConst.body) {
    let pos = mConst.body.position;
    fill(255, 0, 0);
    ellipse(pos.x, pos.y, d);
  }
}
