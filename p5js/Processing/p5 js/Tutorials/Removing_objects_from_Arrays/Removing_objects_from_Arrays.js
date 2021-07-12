let bubbles = [];

function setup() {
createCanvas(600, 400);
  
  for(let i = 0; i < 10; i++) {
   
    let b = new Bubble();
    bubbles.push(b);
  }
}

function mousePressed() {
 
  for(let i = bubbles.length - 1; i >= 0; i--) {
   
    if(bubbles[i].containing(mouseX, mouseY)) {
      bubbles.splice(i, 1);
    }
  }
}


function draw() {
background(0);
  
  for(let i = 0; i < bubbles.length; i++) {
    
    if(bubbles[i].containing(mouseX, mouseY)) {
     
      bubbles[i].changeColor(255);
    } else {
     
      bubbles[i].changeColor(0);
    }
    bubbles[i].move();
    bubbles[i].show();
  }
}
