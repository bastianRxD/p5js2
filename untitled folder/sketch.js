function setup() {
// createCanvas (width, height)
  createCanvas(500, 500);
}

function draw() {
  //background(red, green, blue);
  /// each parameter (0-255);
background(0,100,50);
// ellipse( x position, y position, width , height)
fill(100,50,0);
strokeWeight(10);
stroke(255,0,0);
ellipse(mouseX, mouseY, 50, 100);

strokeWeight(5);
fill(50,150,30);
rect(100, 250, 80, 40);


textSize(50);
strokeWeight(10);
stroke(0,0,255);
fill(255,255,255);
text("Welcome", 250, 100);


}
