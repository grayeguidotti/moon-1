function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  drawTarget(width/2, height/2);
}

function drawTarget(x,y){
ellipse(width/2, height/2, 10, 10)
}