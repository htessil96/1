/* Interactive meme (Logic) version 1 
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
    

    /*conditional statement*/
    
    if (mouseX > width/2) { //right TOP
        textSize(70);
        textFont("Arial Black");
        stroke("blue");
        strokeWeight(5);
        fill("pink");
        text("karen ",30,65);
    
} else if (mouseX < width/2){ //left top
        textSize(90);
        textFont("Cosmic Sans MS");
        fill ("lightgreen");
        noStroke();
       text("karen ",30, 65);

} if (mouseIsPressed && mouseY > height/2){ //top
        textSize(50);
        text ("good morning",width/2, height/2,);
      
} else if (mouseIsPressed && mouseY < height/2){ //bottom
        textSize(60);
        fill("lightblue");
        stroke("blue");
        strokeWeight(3);
        textFont("Cosmic Sans MS");
        text ("turn on the heater",340, height/2,);
    
}
}