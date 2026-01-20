function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  drawTarget(width/2, height/2);
}

function drawTarget(x, y,){
fill(0)
ellipse(width/2, height/2, 10, 10)
//fill(255)
//ellipse(width/2, height/2, 25, 25)
}