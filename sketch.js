var x = 300;
var y = 200;
var speed = 3;
var size=[10,20,30,40];

function setup(){
   createCanvas(600,400);
   background(0);
} 

function draw(){
    ellipse(300, 200, 50, 50);
    if(mouseIsPressed){
        background(54,30,114);
    }
    else{
        background(0);
    }
    anna(x,y);
}
  
function anna(x,y){
    noStroke();
    fill(255,150,200);
    ellipse(x+10,y-10,35,35);
    ellipse(x+10,y+10,35,35);
    ellipse(x-10,y-10,35,35);
    ellipse(x-10,y+10,35,35);
} 

 
 