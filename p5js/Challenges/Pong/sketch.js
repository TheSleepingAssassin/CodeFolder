let b;

function setup() {
    createCanvas(windowWidth, windowHeight);
    b = new Body();
}

function draw() {
    background(0);
    b.render();
    b.update();
    b.bounceY();
    stroke(255);
    if (b.checkRX()) {
        console.log("LEFT");
    } else if (b.checkLX()) {
        console.log("RIGHT");
    }
}
