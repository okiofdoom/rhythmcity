//The setup function only happens once
function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas
  background(0,0,0); //an RGB color for the canvas' background
}

//The draw function happens over and over again
function draw() {
  
  //circle
  fill(255,255,255);
  textFont("Courier");
  textSize(35);
  stroke(0,0,0,0);
  text('click to draw ↓', 20,50)
  text('any key to reset', 20,450)

}

function mouseDragged() {
fill(127,mouseY,mouseX,90); // an RGB color for the inside of the circle 
  ellipse(mouseX,mouseY,10,10); // center of canvas, 20px dia

}

function keyPressed() {
{
background(0,0,0); //an RGB color for the canvas' background
}

return false;

}



