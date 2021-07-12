let flakes = [];
let g;
let snow;

function preload() {
    snow = loadImage('data/Snowflake.png');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    g = createVector(0, 0.1);
}

function draw() {
    background(0);
    flakes.push(new Snow(random(width), random(-10, -100)));
    for (let flake of flakes) {
        flake.render();
        flake.update();
        flake.applyForce(g);
    }
    for (let i = flakes.length - 1; i >= 0; i--) {
        let flake = flakes[i];
        if (flake.pos.y > height + flake.r) {
            flakes.splice(i, 1);
        }
    }
}
