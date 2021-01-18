var gameobject2, gameobject1;

function setup() {
  createCanvas(1200,800);
  gameobject2 = createSprite(400, 100, 50, 80);
  gameobject2.shapeColor = "green";
  gameobject2.debug = true;

  gameobject1 = createSprite(400, 800,80,30);
  gameobject1.shapeColor = "green";
  gameobject1.debug = true;

  gameobject1.velocityY = -5;
  gameobject2.velocityY = +5;
}

function draw() {
  background(0,0,0);  
bounceOff(gameobject1, gameobject2);
 
  drawSprites();
}

function bounceOff(object1, object2){
  if (object1.x - object2.x <= object2.width/2 + object1.width/2
    && object2.x - object1.x <= object2.width/2 + object1.width/2) {
  object1.velocityX = object1.velocityX * (-1);
  object2.velocityX = object2.velocityX * (-1);
}
if (object1.y - object2.y <= object2.height/2 + object1.height/2
  && object2.y - object1.y <= object2.height/2 + object1.height/2){
  object1.velocityY = object1.velocityY * (-1);
  object2.velocityY = object2.velocityY * (-1);
}
}