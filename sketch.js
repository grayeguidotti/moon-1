let img;
//let phase;

function preload(){
  img = loadImage('Assets/moonCopy.png');     //load image
}     

function setup() {                            // a sketch that has a drawMoon function, uses phase (0, 30) using an image of a moon and a black ellipse moving in front of the image to give waxing and waning moon)
  createCanvas(1200, 800);
}

let p = 0;

function draw() {
  
  p = p + .01;   
  p = p % 30;                                          //draw black "shadow"

  background(0);
  push();
  imageMode(CENTER);
  image(img, width/2, height/2, 500, 500);                  //draw the image, in the center 500 pixels big
  describe('an image of a pixelated moon');
  pop();            

  // push();
  drawMoonShadow(p, 400);  
  // pop();     
  //console.log (p);
}

function drawMoonShadow(phase, size){                   //create shadow function that maps the x location to phase numbers
  stroke(255)
  fill(0);
  //strokeWeight(1);
  noStroke();
  let xLoc
  if (phase <= 15) {
    xLoc = map(phase, 0, 15, width/2, width)
  }

  if (phase > 15) {
    xLoc = map(phase, 16, 30, width/2, 0)
  }
  
  circle(xLoc, height/2, size);             

}


                                                                
//move black shadow over image using key pressed N = new moon (phase = 0), F = full moon (phase = 30)
//move black shadow over image using key pressed 


