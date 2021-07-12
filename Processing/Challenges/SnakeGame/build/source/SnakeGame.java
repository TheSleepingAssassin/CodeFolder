import processing.core.*; 
import processing.data.*; 
import processing.event.*; 
import processing.opengl.*; 

import java.util.HashMap; 
import java.util.ArrayList; 
import java.io.File; 
import java.io.BufferedReader; 
import java.io.PrintWriter; 
import java.io.InputStream; 
import java.io.OutputStream; 
import java.io.IOException; 

public class SnakeGame extends PApplet {

Snake snake;
PVector food;
int rez = 30;
float w, h;

public void setup() {
  
  reset();
}

public void reset() {
  frameRate(17);
  w = floor(width / rez);
  h = floor(height / rez);
  snake = new Snake();
  foodLocation();
}

public void foodLocation() {
  int x = floor(random(w));
  int y = floor(random(h));
  food = new PVector(x, y);
}

public void keyPressed() {
  if (keyCode == RIGHT) {
    snake.setDir(1, 0);
  } else if (keyCode == LEFT) {
    snake.setDir(-1, 0);
  } else if (keyCode == UP) {
    snake.setDir(0, -1);
  } else if (keyCode == DOWN) {
    snake.setDir(0, 1);
  }
}

public void mousePressed() {
  loop();
  reset();
}

public void draw() {
  scale(rez);
  background(51);
  snake.render();
  snake.update();

  if (snake.eat(food)) {
    foodLocation();
  }

  if (snake.endGame()) {
    background(255, 0, 0);
    noLoop();
  }

  noStroke();
  fill(255, 0, 0);
  rect(food.x, food.y, 1, 1);
}
class Snake {
  ArrayList<PVector> body;
  float xdir, ydir, len;
  Snake() {
    this.body = new ArrayList<PVector>();
    this.body.add(new PVector(floor(w / 2), floor(h / 2)));
    this.xdir = 0;
    this.ydir = 0;
    this.len = 0;
  }

  public boolean endGame() {
    float x = body.get(body.size() - 1).x;
    float y = body.get(body.size() - 1).y;
    if (x > w - 1 || x < 0 || y > h - 1 || y < 0) {
      return true;
    }
    return false;
  }

  public void grow() {
    PVector head = body.get(body.size() - 1).copy();
    len++;
    body.add(head);
  }

  public boolean eat(PVector pos) {
    float x = body.get(body.size() - 1).x;
    float y = body.get(body.size() - 1).y;
    if (x == pos.x && y == pos.y) {
      grow();
      return true;
    }
    return false;
  }

  public void setDir(float x, float y) {
    xdir = x;
    ydir = y;
  }

  public void update() {
    PVector head = body.get(body.size() - 1).copy();
    body.remove(0);
    head.x += xdir;
    head.y += ydir;
    body.add(head);
  }

  public void render() {
    for (int i = 0; i < body.size(); i++) {
      fill(0, 255, 0);
      noStroke();
      rect(body.get(i).x, body.get(i).y, 1, 1);
    }
  }
}
  public void settings() {  size(600, 600); }
  static public void main(String[] passedArgs) {
    String[] appletArgs = new String[] { "SnakeGame" };
    if (passedArgs != null) {
      PApplet.main(concat(appletArgs, passedArgs));
    } else {
      PApplet.main(appletArgs);
    }
  }
}
