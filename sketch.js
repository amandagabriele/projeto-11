var path, Runner_1, Runner_2;
var pathImage, Runner_1Image, Runner_2Image, coinImage,bombImage, energyDrinkImage, boyImage; 

var score=0;

function preload(){
  //imagens pré-carregadas
 pathImage = loadImage("path.png");
 boyImage = loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
  createCanvas(400,400);
  //crie sprite aqui
  path = createSprite(200,200);
  path.addImage(pathImage);
  path.velocityY = 4;
  path.scale = 1.2;

  boy = createSprite(180,340,30,30);
  boy.scale = 0.08;
  boy.addAnimation("meninoCorrendo",boyImage);
 
  leftBoundary = createSprite(0,0,100,800);
  leftBoundary.visible = false;
  rightBoundary = createSprite(410,0,100,800);
  rightBoundary.visible = false
 }

function draw() {
  background("0");

  path.velocityY = 4;
  boy.x = World.mouseX;
  edges = createEdgeSprites();
  boy.collide(edges[3]);
  boy.collide(leftBoundary);
  boy.collide(rightBoundary);
 
 if(path.y > 400 ) {

  path.y = height/2;
 }

 
  console.log();
  drawSprites();
}

