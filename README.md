# moon-1

if a file was added

`git add .`

to make a commit/save point:

`git commit -am'useful message here'`

to push/upload:

`git push`

Notes:
Function will be drawMoonShadow - since I will be using the black ellipse to create a crescent moon effect.
From Assignment: "Phase should be a number from 0 - 30, where 0 is a new moon, 15 is a full moon, and 30 is an almost new moon." 
0 will be the the black circle will completely covering the image (xlocation of black circle will be the same as the image)
1 will be the image beneath the black circle showing a tiny sliver on the left
15 will be the black circle not on the image at all
30 will be black circle almost 'off' the image showing a tiny sliver of the image on the right

The mouseX and mouseY will determine how far the black circle will be left to right and how much of the ‘phase’

Things I need to determine;
Size of the image to make the black circle match diameter of image.
The if statement that will work with the map of the dark circle 'moving' over the image. 
If statement:                       
 ````javascript
 if phase = (0, 14) {                       //get help from Jessie about this one!
    map()
 
}else{
    map()
}
 ````



Things I need to make:
Moon image (reference from cool tshirt)
Ellipse with black Fill
Draw Moon Function
Phase 

References:
Mapping for location of black ellipse Reference: 
    `map(value, start1, stop1, start2, stop2, [withinBounds])`
    `stroke();`
Function https://p5js.org/reference/p5/function/
If Statement: https://p5js.org/reference/p5/if/ 


```javascript
function drawMoonShadow(x, y, phase) {                    //draws the circle that passes in front of the  image
    Let xLoc = map(phase, 0, 30, 0, width);				//phase 0-30
    ellipse(xLoc, height, 100, 100)                     //black circle
}
```
