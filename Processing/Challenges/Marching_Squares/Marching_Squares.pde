int[][] field;
int rez = 10;
int rows, cols;

void setup() {
  size(600, 600);
  cols = 1 + width / rez;
  rows = 1 + height / rez;
  field = new int[cols][rows];
  for (int i = 0; i < cols; i++) {
    for (int j = 0; j < rows; j++) {
      field[i][j] = floor(random(2));
    }
  }
}

void draw() {
  background(127);
  for (int i = 0; i < cols; i++) {
    for (int j = 0; j < rows; j++) {
      stroke(field[i][j] * 255);
      strokeWeight(rez * 0.4);
      point(i * rez, j * rez);
    }
  }
  for (int i = 0; i < cols-1; i++) {
    for (int j = 0; j < rows-1; j++) {
      float x = i * rez;
      float y = j * rez;
      PVector a = new PVector(x + rez*0.5, y          );
      PVector b = new PVector(x + rez    , y + rez*0.5);
      PVector c = new PVector(x + rez*0.5, y + rez    );
      PVector d = new PVector(x          , y + rez*0.5);
      int state = getState(field[i][j], field[i + 1][j], field[i + 1][j + 1], field[i][j + 1]);
      stroke(255);
      strokeWeight(1);
      switch(state) {
        case 1:
          line(c, d);
          break;
        case 2:
          line(b, c);
          break;
        case 3:
          line(b, d);
          break;
        case 4:
          line(a, b);
          break;
        case 5:
          line(a, d);
          line(b, c);
          break;
        case 6:
          line(a, c);
          break;
        case 7:
          line(a, d);
          break;
        case 8:
          line(a, d);
          break;
        case 9:
          line(a, c);
          break;
        case 10:
          line(a, b);
          line(c, d);
          break;
        case 11:
          line(a, b);
          break;
        case 12:
          line(b, d);
          break;
        case 13:
          line(b, c);
          break;
        case 14:
          line(c, d);
          break;
      }
      line(a.x, a.y, b.x, b.y);
    }
  }
}

int getState(int a, int b, int c, int d) {
  return a * 8 + b * 4 + c * 2 + d * 1;
}

void line(PVector v1, PVector v2) {
  line(v1.x, v1.y, v2.x, v2.y);
}
