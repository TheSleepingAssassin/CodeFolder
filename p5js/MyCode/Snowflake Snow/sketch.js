let itsnow = [];
let flake;

function preload() {
    flake = loadImage('data/Snowflake.png');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    imageMode(CENTER);
}

function draw() {
    background(0);
    let i = floor(random(4));
    for (let i = 0; i < 0.5; i++) {
        itsnow.push(new Snow(random(width), random(-500, -1000), random));
    }
    for (let snow of itsnow) {
        snow.render();
        snow.applyG();
        snow.update();
    }
    for (let i = itsnow.length - 1; i >= 0; i--) {
        if (itsnow[i].pos.y > height + itsnow[i].r) {
            itsnow.splice(i, 1);
        }
    }
}
