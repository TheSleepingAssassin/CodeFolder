let angle = 0;

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
    directionalLight(255, 0, 1, 0);
    background(51);
    rotateX(angle);
    rotateY(angle);
    rotateZ(angle);
    noStroke();
    ambientMaterial(255);
    box(200);

    angle += 0.01;
}