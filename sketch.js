var PLAY = 1;
var END = 0;
var gameState = PLAY;

var bus,busImg;
var llama,llamaImg;
var backgroundImg;
var invisibleGround;
var score=0;
var ground,groundImg

function preload(){
busImg =loadImage("Bus.png");
llamaImg = loadImage("Llama.png");
backgroundImg =loadImage("ground.jpg");
groundImg = loadImage("ground.png");
}

function setup() {
    createCanvas(windowWidth, windowHeight);
   //corredor
    bus = createSprite(50,70,20,50);
    bus.addImage("volar", busImg)
    bus.scale = 0.1

    invisibleGround = createSprite(width/2,height-10,width,125);  
    invisibleGround.shapeColor = "#f4cbaa";

    ground = createSprite(width/2,height,width,2);
    ground.x = width/2
    ground.addImage("piso",groundImg)
    ground.velocityX = -(6 + 3*score/100);
}  

function draw() {
 background(backgroundImg)
 textSize(20);
 fill("black")
 text("Puntuación: "+ score,400,50);
if (gamestate == PLAY){
 ground.velocityX = -(6 + 3*score/100);

    if((touches.length > 0 || keyDown("SPACE")) && bus.y  >= height-120) {
        bus.velocityY = -10;
         touches = [];
      }

      bus.collide(invisibleGround);

 if(llama.isTouching(bus)){
    gamestate = END

    spawnObstacles();
 }
}
 
drawSprites();
}
function spawnObstacles() {
    if(frameCount % 60 == 0) {
       llama = createSprite(600,height-95,20,30);
      llama.setCollider('circle',0,0,45)
    llama.addImage("obstsculo",llamaImg)
    llama.velocityX = -(6 + 3*score/100);
    llama.scale = 0.3;
    llama.lifetime = 300;
    llama.depth = trex.depth;
    llama.depth +=1;
    }
}