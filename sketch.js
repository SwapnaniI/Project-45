var y, ySpeed;
var birdObject, groundObject;
var bird;
var topArray = [];
var bottomArray = [];
var image1,image2;
var gameState = 0;
var xPos;
var birdSprite;
var birdAnimation,enemyAnimation;
var score = 0;
var pTop,pBottom;
var pipeSpeed;
var enemy;

function preload(){
  image1 = loadImage('ground.png');
  image2 = loadImage('ground.png');
  pTop = loadImage('p1.png');
  pBottom = loadImage('p2.png');
  birdAnimation = loadAnimation('b-1.png','b-2.png','b-3.png','b-2.png');
  enemyAnimation = loadAnimation('an-1.png','an-2.png','an-3.png','an-2.png')
}

function setup() {
  createCanvas(664, 600);

  pipeSpeed = 8;
  ySpeed = 0;
  bird = new Bird();

  y = bird.y;

  birdObject = createSprite(bird.x,bird.y + 50,bird.r,bird.r);
  birdObject.addAnimation("animation",birdAnimation);
  birdObject.scale = 2.2;

  xPos = 664 / 2 - 2;

  spawnEnemy(65,height/2);


  //noCursor();

}

function draw() {
 background(52, 153, 224);

 
  if(gameState == 1){

    rectMode(CENTER);


    //Bird
    bird.update(); 

    //Pipe
    spawnPipes()
    pipeFunctions();


    //Drawing score
    drawScore();
  
    //Ground
    ground();

    drawSprites();
    //Drawing edges
    drawEdges();

    enemyFunctions();
  
  }

  else if(gameState === 2){
    showDeathScreen()
  }
  else if(gameState === 0){
    displayStory();
    
  
    if(keyWentDown("space")){
      gameState = 1;
    }

  }




}









