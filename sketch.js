let img;
//let phase;

function preload(){
  img = loadImage('Assets/moonCopy.png');     //load image
}     

function setup() {                            // a sketch that has a drawMoon function, uses phase (0, 30) using an image of a moon and a black ellipse moving in front of the image to give waxing and waning moon)
  createCanvas(1200, 800);
}

function draw() {
  background(0);
  push();
  imageMode(CENTER);
  image(img, width/2, height/2, 500, 500);                  //draw the image, in the center 500 pixels big
  describe('an image of a pixelated moon');
  pop();            

  // push();
  drawMoonShadow(20, 400);  
  // pop();                                                 //draw black "shadow"
}

function drawMoonShadow(phase, size){                   //create shadow function that maps the x location to phase numbers
  stroke(255)
  fill(0);
  strokeWeight(1);
  let xLoc = map(phase, 30, 0, width, width/2)
  circle(xLoc, height/2, size);             

}


                                                                
//move black shadow over image using key pressed N = new moon (phase = 0), F = full moon (phase = 30)
//move black shadow over image using key pressed 


