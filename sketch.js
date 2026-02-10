function setup() {
  createCanvas(400, 400);
  //describe(a sketch that has a drawMoon function, uses phase (0, 30) using an image of a 
  // moon and a black ellipse moving in front of the image to give waxing and waning moon)
}

function draw() {
  background(0);
  drawMoonShadow(width/2, height/2, 150);
}

function drawMoonShadow(x, y, size){
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


