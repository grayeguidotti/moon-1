# moon-1

if a file was added

`git add .`

to make a commit/save point:

`git commit -am'useful message here'`

to push/upload:

`git push`

Notes:
https://p5js.org/reference/p5/function/ 

Function will be draw moon

function drawMoon(x, y, phase) {                    //draws the circle that passes in front of the  image
Let xLoc = map(phase, 0, 30, 0, width);				//phase 0-30
ellipse(xLoc, height, 100, 100)                     //black circle
}

From Assignment: "Phase should be a number from 0 - 30, where 0 is a new moon, 15 is a full moon, and 30 is an almost new moon." 
0 will be the the black circle will completely covering the image

The mouseX and mouseY will determine how far the black circle will be left to right and how much of the ‘phase’

Things I need to determine;
Size of the image to make the black circle match diameter of image.

Things I need to make:
Moon image (reference from cool tshirt)
Ellipse with black Fill
Draw Moon Function
Phase 
