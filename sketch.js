let img;
let phase;

function preload(){
  img = loadImage('Assets/moonCopy.png');     //load image
}     

function setup() {                            // a sketch that has a drawMoon function, uses phase (0, 30) using an image of a moon and a black ellipse moving in front of the image to give waxing and waning moon)
  createCanvas(800, 800);
}

function draw() {
  background(0);
  // push();
  imageMode(CENTER);
  image(img, width/2, height/2, 600, 600);                  //draw the image, in the center 500 pixels big
  describe('an image of a pixelated moon');
  // pop();            

  // drawMoonShadow(width/2, height/2, 500);                 //draw black "shadow"" 500 pixels big to cover moon image
}

function drawMoonShadow(x, y, size, phase){                   //create shadow function that maps the x location to phase numbers
  stroke(255)
  fill(0);
  strokeWeight(1);
  circle(x, y, size);
  let xLoc = map(phase, 0, 30, 0, width)             
}
                                                                
//move black shadow over image using key pressed N = new moon (phase = 0), F = full moon (phase = 30)
