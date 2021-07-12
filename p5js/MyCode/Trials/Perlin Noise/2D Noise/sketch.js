let inc = 0.01;

function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    background(0);

    loadPixels();
    let yoff = 0;
    for (let y = 0; y < height; y++) {
        let xoff = 0;
        for (let x = 0; x < width; x++) {
            let ind = (x + y * width) * 4;
            let r = map(noise(xoff, yoff), 0, 1, 0, 255);
            pixels[ind + 0] = r;
            pixels[ind + 1] = r;
            pixels[ind + 2] = r;
            pixels[ind + 3] = 255;
            xoff += inc;
        }
        yoff += inc;
    }
    updatePixels();
}
