let backColor;
let d;

let sizeArray = [];
let colorArray = [];
let positionArray = [];

function setup() {
  colorMode(RGB, 255);
  backColor = color(14, 14, 14);
  d = 1;

  createCanvas(windowWidth, windowHeight, WEBGL);
  angleMode(DEGREES);
  textAlign(CENTER, CENTER);

  // Static random colors and positions generated once during setup
  for (let x = -width / 2 + 60; x < width / 2 - 60; x += 120) {
    for (let y = -height / 2 + 60; y < height / 2 - 60; y += 120) {
      let colors = [
        random(["#6480FF", "#29EADA", "#00B271", "#A3CD74", "#CD74A0"]),
        random(["#6480FF", "#29EADA", "#00B271", "#A3CD74", "#CD74A0"]),
        random(["#6480FF", "#29EADA", "#00B271", "#A3CD74", "#CD74A0"]),
        random(["#6480FF", "#29EADA", "#00B271", "#A3CD74", "#CD74A0"]),
        random(["#6480FF", "#29EADA", "#00B271", "#A3CD74", "#CD74A0"]),
        random(["#6480FF", "#29EADA", "#00B271", "#A3CD74", "#CD74A0"]),
        random(["#6480FF", "#29EADA", "#00B271", "#A3CD74", "#CD74A0"])
      ];

      let sizes = [
        random(0,120),random(0,120),random(0,120),random(0,120),random(0,120),random(0,120),random(0,120)
      ]
      sizeArray.push(sizes);
      colorArray.push(colors);
      positionArray.push({ x: x, y: y });
    }
  }
}

function draw() {
  background(backColor);
  d = 1;

  for (let i = 0; i < positionArray.length; i++) {
    //162 elements - will be generated and placed in corresponding array
    let pos = positionArray[i];
    let colors = colorArray[i];
    let sizes = sizeArray[i];
    
    // print(sizeArray.length);

    push();
    translate(pos.x, pos.y, 0);

    if (d == 1) {
      noStroke();
      rotateX(frameCount / 3);
      drawLetterC(colors[0], colors[1], colors[2], colors[3], colors[4], colors[5], colors[6],sizes[1],sizes[2],sizes[3],sizes[4],sizes[5],sizes[6],sizes[7]);
      fill(0);
      d = -1;

    } else {
      noStroke();
      rotateY(frameCount / 3);
      fill(150, 150, 150);
      text("1", 0, 0);
      d = 1;
    }
    pop();
  }
}

function drawLetterC(col1, col2, col3, col4, col5, col6, col7,s1,s2,s3,s4,s5,s6,s7) {
  push();
  fill(col1);
  translate(60, -60, 0);
  box(s1);
  pop();

  push();
  fill(col2);
  translate(30, -60, 0);
  box(s2);
  pop();

  push();
  fill(col3);
  translate(0, -30, 0);
  box(s3);
  pop();

  push();
  fill(col4);
  translate(0, 0, 0);
  box(s4);
  pop();

  push();
  fill(col5);
  translate(0, 30, 0);
  box(s5);
  pop();

  push();
  fill(col6);
  translate(30, 60, 0);
  box(s6);
  pop();

  push();
  fill(col7);
  translate(60, 60, 0);
  box(s7);
  pop();
}
