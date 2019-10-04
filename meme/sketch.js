/* logo version 1 
oct 3,2019
*/
var michi;
var grace;


function preload (){
    michi = loadImage ("michi.jpg");
    grace = loadImage ("grace.jpg");
}

function setup () {
    var canvas = createCanvas (640,460);
    canvas.drawingContext.miterLimit = 2;
}

function draw() {
    //background("white");
    //fill('black');
    
    image(michi, 0, 0, width,height);
    image(grace,mouseX,mouseY, 200,150 );
     
    fill ("lightyellow");
    noStroke();
    rect (20,350,600,100);
    
    fill ("pink");
    noStroke ();
    ellipse (70,390,250,250)
    
    fill("white");
    strokeWeight (10);
    ellipse (70,390,200,200);
    
      fill("lightblue");
    textFont ("LibreBaskerville");
    textSize(150);
    text("G",60,330,50,200);
    
    fill("lightblue");
    textFont ("BreeSerif");
    textAlign (CENTER);
    textSize(50);
    text("Baby Clothes",50,380,600,100);
    
}