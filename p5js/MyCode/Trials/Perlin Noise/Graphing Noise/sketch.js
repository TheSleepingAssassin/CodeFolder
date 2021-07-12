let inc = 0.01;
let start = 0;

function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    background(0);
    beginShape();
    stroke(255);
    noFill();
    let xoff = start;
    for (let x = 0; x < width; x++) {
        let y = noise(xoff) * height;
        vertex(x, y);
        xoff += inc;
    }
    endShape();
    start += inc + 0.05;
}
