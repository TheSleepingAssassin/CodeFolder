let state = 0;
let oneTime = false;

// Menu Vars
let playButton;
// Menu Vars End

//Game Vars
let c;
// Game Vars End

function setup()
{
	createCanvas(windowWidth, windowHeight);
	textAlign(CENTER);
	rectMode(CENTER);
}

function draw()
{
  background(51);

  if (state == 0)
	{
		display();
  }

  if (state == 1)
	{
    if (oneTime == false)
    {
			initGame();
			console.log("onetime");
      oneTime = true;
    }
    else
    {
      game();
    }
  }
}

// Main Menu
function display()
{
	stroke(255);
	fill(255);
	strokeWeight(1);
	textSize(50);
	text("Shoot", width / 2, height / 16 * 4);

	playButton = new Button(createVector(width / 2, height / 2), "PLAY", 50, 50);
	playButton.render();

	if (playButton.collides(c))
	{
		changeState();
	}
}
// Main Menu End

// Game Things
function initGame()
{
  c = new Cursor(createVector(mouseX, mouseY), 10);
}

function game()
{
	noCursor();
	console.log("game");
  // c.render();
  // c.tick(createVector(mouseX, mouseY));
}
// Game Things End

function changeState()
{
	if (state == 0)
	{
		state = 1;
	}
	else
	{
		state = 0;
	}
}
