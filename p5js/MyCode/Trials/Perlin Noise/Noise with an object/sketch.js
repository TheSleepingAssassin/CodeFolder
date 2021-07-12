let xoff = 0;

function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    background(0);
    let x = map(noise(xoff), 0, 1, 0, width);
    xoff += 0.01;

    ellipse(x, height / 2, 20);
}
