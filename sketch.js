let img;

function preload(){
  img = loadImage('assets/moonCopy.png');     //load moon image
}     

function setup() {                            
  createCanvas(1200, 800);
}

let p = 0;

function draw() {
  p = p + .05;   
  p = p % 30;                                          
  background(0);
   for(let i = 0; i < 30; i++){
      drawMoon(i, i*80, height/10, 80);        //this would draw 30 moons 10 pixels apart horizontally, taken from the inclass example, 
    // but I couldn't get the spacing quite right, so I changed the locx and size until I had a slightly different desired effect. They aren't in the same order of phasing
    }
  //push();
  //pop();            
  // push();
  drawMoon(p, width/2, height/2, 400,);       //draw the image, in the center 400 pixels 
  // pop();     
  //console.log (p);
  
}

function drawMoon(phase, locx, locy, size){       // drawMoon function, using an image of a moon and a black ellipse moving in front of the image to give waxing and waning moon)
  imageMode(CENTER);
  image(img, locx, locy, size, size);                  
  describe('an image of a pixelated moon');
  stroke(255)
  fill(0);
  //strokeWeight(1);
  noStroke();
  let xLoc;
  if (phase <= 15) {                                //uses phase (0, 15, then 15, 30) to map the xLocation to give the effect of a shadow 'moving' across the moon 
    xLoc = map(phase, 0, 15, locx, width)
    }
  if (phase > 15) {
    xLoc = map(phase, 15, 30, locx, 0)
    }
  circle(xLoc, locy, size);                                 
}

// // function drawMoonShadow(phase, size){                   //create separate shadow function - this was the original function I was using and keeping the image drawn statically in the draw function
// //   stroke(255)
// //   fill(0);
// //   //strokeWeight(1);
// //   noStroke();
// //   let xLoc
// //   if (phase <= 15) {
// //     xLoc = map(phase, 0, 15, width/2, width)
// //   }
//      if (phase > 15) {
//      xLoc = map(phase, 15, 30, width/2, 0)
//      }
  
//   circle(xLoc, height/2, size);             

// }


                                                                
          //move black shadow over image using key pressed N = new moon (phase = 0), F = full moon (phase = 30)



