let smoke = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
    for (let i = 0; i < 200; i++) {
        smoke.push(new Smoke());
    }
}

function draw() {
    background(0);
    for (let s of smoke) {
        s.render();
        s.update();
    }
}
