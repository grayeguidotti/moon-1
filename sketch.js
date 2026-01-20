function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  drawTarget(width/2, height/2, 150);
}

function drawTarget(x, y, size){
  noStroke();

  fill(0, 0, 255);
  circle(x, y, size * 0.5);

  fill(255,0, 0);
  circle(x, y, size * 0.75);

  fill(255);
  circle(x, y, size);

}