let bs = [];

function setup() {
    createCanvas(windowWidth, windowHeight, P2D);
    for (let i = 0; i < 10; i++) {
        let b = bs[i];
        bs.push(new Body());
    }
}

function draw() {
    background(0);
    for (let b of bs) {
        b.render();
        b.update();
        b.bounce();
    }
}