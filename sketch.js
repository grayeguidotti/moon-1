let img;

function preload(){
  img = loadImage('Assets/moonCopy.png');     //load image
}     

function setup() {                            // a sketch that has a drawMoon function, uses phase (0, 30) using an image of a moon and a black ellipse moving in front of the image to give waxing and waning moon)
  createCanvas(fullscreen);
  

}

function draw() {
  background(0);
  imageMode(CENTER);
  image(img);                  //display the image
  describe('an image of a pixelated moon');                 
  // drawMoonShadow(width/2, height/2, 150);
}

// function drawMoonShadow(x, y, size){
//   push();                                       // draw black "shadow""
//   stroke(255)
//   fill(0);
//   strokeWeight(1);
//   circle(x, y, size);
//   pop();
// }

//move black shadow over 
