let img;
//let phase;

function preload(){
  img = loadImage('Assets/moonCopy.png');     //load image
}     

function setup() {                            // a sketch that has a drawMoon function, uses phase (0, 30) using an image of a moon and a black ellipse moving in front of the image to give waxing and waning moon)
  createCanvas(800, 800,);
}

function draw() {
  background(0);
  push();
  imageMode(CENTER);
  image(img, width/2, height/2, 600, 600);                  //draw the image, in the center 500 pixels big
  describe('an image of a pixelated moon');
  pop();            

  // push();
  drawMoonShadow(18, 500);  
  // pop();                                                 //draw black "shadow"
}

function drawMoonShadow(phase, size){                   //create shadow function that maps the x location to phase numbers
  stroke(255)
  fill(0);
  strokeWeight(1);
  let xLoc = map(phase, 30, 0, -width/2, width/2)
  circle(xLoc, height/2, size);             

}
                                                                
//move black shadow over image using key pressed N = new moon (phase = 0), F = full moon (phase = 30)
//move black shadow over image using key pressed 


// let phaseAnimation = 0;

// function setup() {
//   createCanvas(400, 400, WEBGL);
// }

// function draw() {
//   background(0);
//   lights();
//   phaseAnimation += 0.1;
//   phaseAnimation = phaseAnimation % 30;
//   for(let i = 0; i < 30; i++){
//     drawMoon(i, -height/2);
//   }
//   drawMoon(phaseAnimation, 0);
//   text("moonphase: "+phaseAnimation, width/2, 100);
//   fill(255, 0, 0);
//   ellipse(0, 0, 200, 200);
  
// }

// function drawMoon(phase, h) { //phase 0-30
//   fill(255, 255, 0);
//   let xLoc = map(phase, 0, 30, -width/3, width/3);
//   console.log(xLoc);
//   push();
//   noStroke();
//   translate(xLoc, h, 0);
//   sphere(50, 6, 6);
//   pop();
// }