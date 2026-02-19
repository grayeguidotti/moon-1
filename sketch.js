let img;

function preload(){
  img = loadImage('assets/moonCopy.png');     //load image
}     

function setup() {                            // a sketch that has a drawMoon function, uses phase (0, 30) using an image of a moon and a black ellipse moving in front of the image to give waxing and waning moon)
  createCanvas(1200, 800);
}

let p = 0;

function draw() {
  p = p + .05;   
  p = p % 30;                                          
  background(0);
  
  //push();
  //pop();            
  // push();
  drawMoon(p, width/2, height/2, 400,);       //draw the image, in the center 400 pixels 
  // pop();     
  //console.log (p);
   for(let i = 0; i < 30; i++){
      drawMoon(i, i*50, height/10, 100);        //this would draw 30 moons 10 pixels apart horizontally
    }
}

function drawMoon(phase, locx, locy, size){
  imageMode(CENTER);
  image(img, locx, locy, size, size);                  
  describe('an image of a pixelated moon');
  stroke(255)
  fill(0);
  //strokeWeight(1);
  noStroke();
  let xLoc
  if (phase <= 15) {
    xLoc = map(phase, 0, 15, locx, width)
    }
  if (phase > 15) {
    xLoc = map(phase, 15, 30, locx, 0)
    }
  circle(xLoc, locy, size);                                 //draw black "shadow"
}

// // function drawMoonShadow(phase, size){                   //create shadow function that maps the x location to phase numbers
// //   stroke(255)
// //   fill(0);
// //   //strokeWeight(1);
// //   noStroke();
// //   let xLoc
// //   if (phase <= 15) {
// //     xLoc = map(phase, 0, 15, width/2, width)
// //   }

//   if (phase > 15) {
//     xLoc = map(phase, 15, 30, width/2, 0)
//   }
  
//   circle(xLoc, height/2, size);             

// }


                                                                
          //move black shadow over image using key pressed N = new moon (phase = 0), F = full moon (phase = 30)



