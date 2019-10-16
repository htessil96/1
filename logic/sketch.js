/* logo version 1 
oct 3,2019
*/
var michi;

//var grace;


function preload (){
    michi = loadImage ("michi.jpg");
    //grace = loadImage ("grace.jpg");
}

function setup () {
    var canvas = createCanvas (900,360);
    canvas.drawingContext.miterLimit = 2;
}

function draw() {
    
    image(michi, 0, 0, width/4, height);
    image(michi, width/4 *2, 0, width/4,height); 
    image(michi, width/4 *3, 0, width/4,height);
    image(michi, width/4 ,0, width/4,height);
    
   //textSize(50);
    textSize(32);
    stroke("white");
    strokeWeight(5);
    

    /*conditional statement*/
    if (mouseIsPressed) {
        textSize(80);
        textFont("Arial Black");
        stroke("blue");
        strokeWeight(5);
        fill("pink");
        textAlign(CENTER);
    }
    
    text("karen",30,45);
        
 /* } else if (mouseY > height/2){
        textSize(30);
        textFont("Cosmic Sans MS");
        fill ("black");
        noStroke();
      
  } else if (mouseIsPressed && mouseX > width/2){
        textSize(40);
        textAlign (LEFT, BOTTOM);
        text ("good morning",width/2, height/2,);
      
  } else (mouseY > height/2){
        textSize(82);
        fill("lightblue");
        stroke("blue");
        strokeWeight(10);
        textFont("Mansalva");
   } 
   */ 	
	
}