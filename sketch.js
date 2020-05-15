var movingRect,fixedRect,v1,v2

function setup() {
  createCanvas(800,400);
  movingRect = createSprite(400,300,40,70);
  movingRect.shapeColor="blue";
  fixedRect = createSprite(400,100,70,40);
  fixedRect.shapeColor="blue";
  
 // fixedRect.velocityY=3;
 // movingRect.velocityY=-3;
  
v1 = createSprite(200,150,30,80);
v2 = createSprite(200,50,80,80);
v1.velocityY=-3;
v2.velocityY=3;
}

function draw() {
  background(255,255,255);
  
  bounceOff(v1,v2);
  
 
  drawSprites();
}





