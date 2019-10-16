/* interactive meme 
oct 15,2019
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
    background("white");
    
    var michiY =0;
    var michiY = heigth/2;
    
    if(mousePressed){
        michiY = heigth/2
        michiY = 0
    }
    
    image(michi, 0, 0, width ,height/2);
    image(michi, 0, heigth/2, width, heigth/2); 
   
    
   var caption = "Im karen";
    
    if(mouseX > width/2 && mouseY < heigth/2);{
        caption = "im a different karen"
    }
    
    textAlign(CENTER);
    textSize(100);
    textFont("Comic Sans MS");
    fill("green");
    stroke("white");
    strokeWeigth(8);
    
    text(caption, width/2, heigth/2);