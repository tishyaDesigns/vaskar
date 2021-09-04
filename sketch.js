var climber,climberImg, attacker, attackerImg;
var scene,sceneImg, ladder,ladderImg;
var scorepoint=0;
var PLAY=1;
var END=0;
var gameState=PLAY;

function preload(){
sceneImg= loadImage("Importedpiskel.png");
climberImg=loadImage("Imported piskel (2).gif");
//attackerImg= loadAnimation("imported piskel(2).gif");
ladderImg= loadImage("ladder.png");

}



function setup(){
  
  createCanvas(windowWidth,windowHeight);
// Moving ladder
ladder=createSprite(width/2,200);
ladder.addImage(ladderImg);
ladder.velocityY = 4;
ladder.scale=0.8
//creating boy running
climber = createSprite(width/2,height-20,20,20);
climber.addAnimation("nothing",climberImg);
climber.scale=0.5;
  
  

}

function draw() {
  background(sceneImg);
  if(gameState===PLAY){
 
  
  //code to reset the background
  if(ladder.y > 500 ){
    ladder.y = height/2;
  }
  
    
  drawSprites();
 
}

}




