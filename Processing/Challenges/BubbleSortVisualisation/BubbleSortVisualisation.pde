float[] values;

int i = 0;
int j = 0;

void setup() {
  size(100, 100);
  values = new float[width];
  for (int m = 0; m < values.length; m++) {
    values[i] = random(height);
  }
  // values = sort(values);
  // for (int i = 0; i < values.length; i++) {
  //   for (int j = 0; j < values.length - i - 1; j++) {
  //   }
  // }
}

void draw() {
  for (int i = 0; i < 50; i++) {
    background(51);

    float a = values[j];
    float b = values[j + 1];
    if (a > b) {
      swap(values, j, j+1);
    }
    if (i < values.length) {
      j = j + 1;
      if (j >= values.length - i - 1) {
        j = 0;
        i = i + 1;
      }
    } else {
      println("finished");
      noLoop();
    }

    for (int k = 0; k < values.length; k++) {
      stroke(255);
      line(k, height, k, height - values[k]);
    }
  }
}

void swap(float[] arr, int i, int j) {
  float temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
