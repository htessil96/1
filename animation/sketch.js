/* Animation meme  
oct 17,2019
*/
var michi;
var s = 10;
var speed = 2;
var r = 0;
var c = 1;
var x = 100;
var y = 100;


function preload (){
    michi = loadImage ("michi.jpg");
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
    
    textSize(50);
    textFont("Arial Black");
    stroke("white");
    strokeWeight(5);
    fill("pink");
    text("karen ",s,3,65);
    s += speed;
    noStroke();
    textSize(70);
    fill(r, 0, 100);
    text ("turn on the heater",100,350);
    r += c;

    
    if (r > 255 || r < 0) {
        c *= -1;
    }
    if (s > width/4 || s < 0) {
        speed *= -1;
    }
}

