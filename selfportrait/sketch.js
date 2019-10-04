function setup() {
	createCanvas(900, 1800);
}

function draw() {
	background("lightblue");
    
    //hair
    fill('#0F0F0F');
  ellipse(300,300,350,550);
    //head
    fill('#F7CD91');
     ellipse(300,280,300,350);
    //eyes
    fill('#FFFFFF')
    ellipse(250,250,70,40);
    ellipse(350,250,70,40);
    fill('#9B7C5B')
    ellipse(250,250,30,30);
    ellipse(350,250,30,30);
    //lips
    fill('#ECB3C5')
    arc(330,350,50,20,PI,0);
    arc(280,350,50,20,PI,0);
    arc(305,350,100,40,0,PI);
    //eyebrows
    fill('#505A5B')
  stroke(0);
  strokeWeight (5);
  
    
}