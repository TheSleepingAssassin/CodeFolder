let f;
let t;
let lifespan = 200;

function setup() {
    createCanvas(windowWidth, windowHeight);
    reset();
}

function reset() {
    f = new Folk(width / 2, height / 4 * 3);
    f1 = new Folk(width / 4, height / 4 * 3);
    f2 = new Folk(width / 4, height / 2);
    f3 = new Folk(width / 4, height / 4);
    f4 = new Folk(width / 2, height / 4);
    f5 = new Folk(width / 4 * 3, height / 4);
    f6 = new Folk(width / 4 * 3, height / 2);
    f7 = new Folk(width / 4 * 3, height / 4 * 3);
    t = new Target();
}

function draw() {
    background(0);
    f.update();
    f1.update();
    f2.update();
    f3.update();
    f4.update();
    f5.update();
    f6.update();
    f7.update();
    t.render();
    if (f.rockets.length === 0 && f1.rockets.length === 0 && f2.rockets.length === 0 && f3.rockets.length === 0 && f4.rockets.length === 0 && f5.rockets.length === 0 && f6.rockets.length === 0 && f7.rockets.length === 0) {
        reset();
    }
}