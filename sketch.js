function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  drawTarget(width/2, height/2, 150);
}

function drawTarget(x, y, size){
  noStroke();
  push();     //blue outer
  fill(0, 0, 255);
  circle(x, y, size);
  pop();

  push();     //white middle
  fill(255);
  circle(x, y, size * 0.65);
  pop();
  
  push();     //red center
  fill(255, 0, 0);
  circle(x, y, size * 0.25);
  pop();


}