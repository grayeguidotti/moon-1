function setup() {
  createCanvas(800, 800);
  //describe(a sketch that has a drawMoon function, uses phase (0, 30) using an image of a 
  // moon and a black ellipse moving in front of the image to give waxing and waning moon)
}

function draw() {
  background(0);
  drawMoonShadow(width/2, height/2, 150);
}

function drawMoonShadow(x, y, size){
  push();     // draw black "shadow""
  stroke(255)
  fill(0);
  strokeWeight(1);
  circle(x, y, size);
  pop();
}

//move black shadow over 
