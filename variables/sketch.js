/*
    self portrait with variables 
    by lisseth
    9/17/19
*/
var y = 150;
var x = 300;
var  faceSize = 300;
var hair = 200

function setup() {
	createCanvas(900, 1800);
}

function draw() {
	background("lightblue");
  
    
    //hair
    fill('#0F0F0F');
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
    fill('#ECB3C5')
    arc(x + 30,y + 200,50,20,PI,0); // right arc
    arc(x - 20,y + 200,50,20,PI,0); //left arc
    arc(x + 5,y + 200,100,40,0,PI); // bottom arc

    
}