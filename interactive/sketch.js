/*
    interactive self portrait 
    by lisseth
    9/24/19
*/
var y = 150;
var x = 300;
var  faceSize = 300;
var hair = 200;


function setup() {
	createCanvas(900, 900);
}

function draw() {
	background("lightblue");
    
 var r = map(mouseX, 0, width, 0, 255);  // red;
	var g = (0); // green
	var b = map(mouseY, 0, height, 0, 255); // blue
	fill(r, g, b);
    //hair
    fill('black');
  ellipse(x,y + 150,hair + 150,hair + 350);
    
    //head
    fill('#F7CD91');
     ellipse(x,y + 130,faceSize,faceSize);
    //eyes
    fill('#FFFFFF')
    ellipse(x - 50,y + 100,70,40); //left
    ellipse(x + 50,y + 100,70,40); // right
    fill('#9B7C5B')
    ellipse(x - 50,y + 100,30,30); //left eye color
    ellipse(x + 50,y + 100,30,30); // right eye color
    strokeWeight (4);
    //lips
   fill(r, g, b);
    arc(x + 30,y + 200,50,20,PI,0); // right arc
    arc(x - 20,y + 200,50,20,PI,0); //left arc
    arc(x + 5,y + 200,100,40,0,PI); // bottom arc
    

    
}
function mousePressed () {
 hair+= 10;    
}
