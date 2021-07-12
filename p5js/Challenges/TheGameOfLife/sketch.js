// let grid;
// let cols;
// let rows;
// let rez = 50;
//
// function setup() {
//   createCanvas(1000, 800);
//   cols = width / rez;
//   rows = height / rez;
//   grid = make2DArray(cols, rows);
//   for (let i = 0; i < cols; i++) {
//     for (let j = 0; j < cols; j++) {
//       grid[i][j] = floor(random(2));
//     }
//   }
// }
//
// function make2DArray(cols_, rows_) {
//   let cols = cols_;
//   let rows = rows_;
//   let arr = new Array(cols);
//   for (let i = 0; i < arr.length; i++) {
//     arr[i] = new Array(rows);
//   }
//   return arr;
// }
//
// function count(grid, x, y) {
//   let sum = 0;
//   for (let i = -1; i < 2; i++) {
//     for (let j = -1; j < 2; j++) {
//       let col = (x + i);
//       let row = (y + j);
//       sum += grid[col][row];
//     }
//   }
//   sum -= grid[x][y];
//   return sum;
// }
//
// function draw() {
//   background(0);
//
//   for (let i = 0; i < cols; i++) {
//     for (let j = 0; j < rows; j++) {
//       let x = i * rez;
//       let y = j * rez;
//       if (grid[i][j] == 1) {
//         fill(255);
//         stroke(0);
//         rect(x, y, rez - 1, rez - 1);
//       }
//     }
//   }
//
//   let next = make2DArray(cols, rows);
//
//   for (let i = 0; i < cols; i++) {
//     for (let j = 0; j < rows; j++) {
//       let state = grid[i][j];
//       let sum = 0;
//       let neighbors = count(grid, i, j);
//
//       if (state == 0 && neighbors == 3) {
//         next[i][j] = 1;
//       } else if (state == 1 && (neighbors < 2 || neighbors > 3)) {
//         next[i][j] = 0;
//       } else {
//         next[i][j] = state;
//       }
//     }
//   }
//
//   grid = next;
// }

function make2DArray(cols, rows) {
  let arr = new Array(cols);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(rows);
  }
  return arr;
}

let grid;
let cols;
let rows;
let resolution = 10;

function setup() {
  createCanvas(600, 400);
  cols = width / resolution;
  rows = height / resolution;

  grid = make2DArray(cols, rows);
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      grid[i][j] = floor(random(2));
    }
  }
}

function draw() {
  background(0);

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x = i * resolution;
      let y = j * resolution;
      if (grid[i][j] == 1) {
        fill(255);
        stroke(0);
        rect(x, y, resolution - 1, resolution - 1);
      }
    }
  }

  let next = make2DArray(cols, rows);

  // Compute next based on grid
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let state = grid[i][j];
      // Count live neighbors!
      let sum = 0;
      let neighbors = countNeighbors(grid, i, j);

      if (state == 0 && neighbors == 3) {
        next[i][j] = 1;
      } else if (state == 1 && (neighbors < 2 || neighbors > 3)) {
        next[i][j] = 0;
      } else {
        next[i][j] = state;
      }
    }
  }

  grid = next;
}

function countNeighbors(grid, x, y) {
  let sum = 0;
  for (let i = -1; i < 2; i++) {
    for (let j = -1; j < 2; j++) {
      let col = (x + i + cols) % cols;
      let row = (y + j + rows) % rows;
      sum += grid[col][row];
    }
  }
  sum -= grid[x][y];
  return sum;
}