function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  drawTarget(width/2, height/2, 150);
}

function drawTarget(x, y, size){
  noStroke();
  push();
  fill(0, 0, 255);
  circle(x, y, size * 0.5);
  pop();

  push();  
  fill(255,0, 0);
  circle(x, y, size * 0.75);
  pop();

  push();
  fill(255);
  circle(x, y, size);
  pop();

}