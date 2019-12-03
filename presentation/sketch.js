/*
    final project presentation
    11.19.2019
    
    sensor
    interaction
    theme
*/
var diaml=0;

var slideNumber = 0;
var totalSlides = 3;

var nextBtnX = 700;
var nextBtnY = 500;
var nextBtnSize = 50;

var prevBtnX = 100;
var prevBtnY = 500;
var prevBtnSize = 50;



function setup() {
    createCanvas(800, 600);
}

function draw() {
    background("#F3DED2");
 


    //design 

        fill("#9C95DC");//purple
        ellipse(650, 480, 300);
        fill("#75DDDD");//green-ish
        ellipse(200, 200, 250);
        fill("#E174BF");//pink
        ellipse(30, 100, 90);
        fill("#F4AC45");//yellow
        ellipse(500, 300, 400);
        fill("#8A4F7D");//dark purple
        ellipse(400, 50, 150); 
        fill("brown");
        ellipse(300, 550, 170); 
        fill("purple");
        ellipse(32, 380,300);
        fill("orange");
        ellipse(730, 80,220);
    
    if (slideNumber == 0) {
        // content for slide number 0
        fill(0);
        textSize(50);
        textAlign(CENTER, CENTER);
        text(" Project Pitch", width/2, height/2);
        
        textSize(30);
        text("by Lisseth", width/2, height/2 + 50);
        
    } else if (slideNumber == 1) {
        // content for slide number 1
        
        fill(0);
        textSize(50);
        textAlign(CENTER, CENTER);
        text("Christmas lights", width/2, 100);
        
        textSize(20);
        text("The user will be able to control when the christmas light", width/2, height - 400);
        text("will appear using the photocell sensor to manage the lighting.", width/2, height - 350);
    
    } else if (slideNumber == 2) {
        // content for slide number 2


        
        background("#72B5E8");
        textFont("New times roman");
        fill(255);
        textSize(50);
        text("Click the Lights", 450,150);
        
  //christmas tree 
        
        //truck tree	
        fill("#7c501a"); 
        strokeWeight(1);
        noStroke();
	    rect(280, 390, 75, 150);	
       
         //TREE
        fill("#034B1A");
        noStroke();  
	    triangle(315, 200, 150, 400, 480, 400); //third
  	    triangle(315, 150, 180, 330, 450, 330); //second
  	    triangle(315, 100, 220, 250, 410, 250); //first 
     
        
        //lights
        strokeWeight(1);
        noStroke(); 	
        fill ("#43FCFA") //blue
        ellipse(310, 320, diaml,diaml);
        fill("#FF0000") //red
        ellipse(405, 350, diaml,diaml);	
        fill("#FF6F00") // orange
        ellipse(325, 190, diaml,diaml);
        fill("#00FF00") //green
        ellipse(265, 245, diaml,diaml);
        fill("#FC43BE") //pink
        ellipse(235, 360, diaml,diaml);
        fill("#F1C40F")//mustard
        ellipse(365, 260, diaml,diaml);
        fill("#FFFF00") //yellow
        noStroke(); 
           
        push();
        translate(width * 0.8, height * 0.5); 
        star(-323, -200, 20, 40, 5);
        pop();
               
}

   /* drawing buttons */
    
    // next btn
    if (slideNumber < totalSlides - 1) {
        fill(1);
        noStroke();
        ellipse(nextBtnX, nextBtnY, nextBtnSize);
        fill(300);
        textSize(20);
        textAlign(CENTER, CENTER);
        text("Next", nextBtnX, nextBtnY);
    }
    
    
    // prev btn
    if (slideNumber > 0) {
       fill(1);
        noStroke();
        ellipse(prevBtnX, prevBtnY, prevBtnSize);
        fill(300);
        textSize(20);
        textAlign(LEFT, TOP);
        text("Back", prevBtnX - 22, prevBtnY - 10);  
    }
   

}

function star(x, y, radius1, radius2, npoints) {
        
    var angle = TWO_PI / npoints;
    var halfAngle = angle/2.0; 
        beginShape();
            
    for (var a = 1; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius2;
    var sy = y + sin(a) * radius2;
        vertex(sx, sy);
        sx = x + cos(a+halfAngle) * radius1;
        sy = y + sin(a+halfAngle) * radius1;
        vertex(sx, sy);
    }

  endShape(CLOSE);

}

function mousePressed() {
    
    // next btn
    var d = dist(mouseX, mouseY, nextBtnX, nextBtnY);
    if (d < nextBtnSize/2 && slideNumber < totalSlides - 1) {
        slideNumber++;    
    }
    
    // prev btn
    if (mouseX > prevBtnX &&
       mouseX < prevBtnX + prevBtnY &&
       mouseY > prevBtnY &&
       mouseY < prevBtnY + prevBtnX &&
       slideNumber > 0) {
        slideNumber--;    
    }
    // lights
     if(diaml>25){
                diaml=0;
            }else{
                diaml=diaml+5;
            }

}
