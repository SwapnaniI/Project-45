function gravity() {
  //Restricting movement beyond ground

  if (y >= height + 50 - 216/2 - bird.r) {
    ySpeed = 0;
    y = height + 50 - 216/2 - bird.r;
   
  }  //Otherwise move downwards;
  else {
    ySpeed = ySpeed + 0.48;
  }
}

function keyPressed() {
  if(bird.y > 10 + bird.r){
  //Making bird jump when spacebar is pressed and bird is inside screen
    if (keyCode === 32) {
      ySpeed = -7.5;
    }
  }

}

function ground() {
  //Making ground

  push();
  imageMode(CENTER);
  
  image(image1, xPos, height + 50, width + 4, 216);
  image(image2, xPos + 663, height + 50, width + 4, 216);

  xPos -= pipeSpeed;

  if(xPos <= -320){
    bird.y = 200;
    xPos = 664/2 - 2
  }

  pop();
}

function showDeathScreen(){
  background(15);

  fill(235,255,240);
  textSize(75);

  textFont('Courier New')
  text("Game Over!", 100, height/2);
  //Showing score
  textSize(40)
  text("Score:" + Math.round(score), 220, height/2 + 60);
}

function drawScore(){
  push();

  score+=0.2;

  fill(235,255,120);
  textSize(20);
  textFont('Courier New')
  text("Score: " + Math.round(score), 500,50);

  pop();
}

function drawEdges(){
  push();

  strokeWeight(4)
  fill(250,150,100);

  //Drawing top
  line(0,2,width,2);

  //Drawing bottom
  line(0,height - 2,width,height -2);

  //Drawing right
  line(width - 2 ,0, width - 2,height);

  //Drawing left
  line(2,0, 2,height);

  pop();
}


function spawnPipes() {
if(frameCount % 40 == 0 ){

  //Spawning pipes

    rectMode(CENTER);

    var xPos = width + 60;
    var spacing = 180;

    var upY,downY;

    upY = random(50,height/2 - 180)

    var total = upY + upY + spacing;
    var downWidth = (height - total)/2;

    //Creating top array
      
        var topHeight = (upY - 0);

        topArray.push(new Pipe(xPos,upY,topHeight*2));   

    //Creating bottom array
        downY = total + downWidth;

        bottomArray.push(new Pipe(xPos,downY,downWidth*2));     
      
  }

}


function pipeFunctions(){
  imageMode(CENTER);

  for(var i = topArray.length - 1; i >= 0; i--){ 
   topArray[i].update(-pipeSpeed);
   //Drawing the image
   image(pTop,topArray[i].x,topArray[i].y,topArray[i].w,topArray[i].h);

   //Ending game
   if(topArray[i].isTouching(bird) === true){
     gameState = 2;
   }
   //Rmoving when complete
   if(topArray[i].complete() === true){
    topArray.splice(i,1);
  }

  }

  for(var i = bottomArray.length - 1; i >= 0; i--){
    bottomArray[i].update(-pipeSpeed);
    //Drawing the image
    image(pBottom,bottomArray[i].x,bottomArray[i].y,bottomArray[i].w,bottomArray[i].h);

    //Ending game
    if(bottomArray[i].isTouching(bird) === true){
      gameState = 2;
    }
    //Rmoving when complete
    if(bottomArray[i].complete() === true){
      bottomArray.splice(i,1);
    }
  }


}

function spawnEnemy(x,y){
  enemy = createSprite(x,y,20,20);
  enemy.addAnimation("tag",enemyAnimation);
  enemy.scale = 0.7;
}
function enemyFunctions(){

enemy.y= Math.round(enemy.y) + (Math.round(bird.y) - Math.round(enemy.y))/8;
  console.log(enemy.y-bird.y)

}

function displayStory(){
  push();

  background(0)
  textSize(23)
  text("𝔜𝔬𝔲 𝔞𝔯𝔢 𝔞 𝔩𝔦𝔱𝔱𝔩𝔢 𝔟𝔦𝔯𝔡, 𝔴𝔥𝔬 𝔪𝔲𝔰𝔱 𝔯𝔲𝔫 𝔣𝔯𝔬𝔪 𝔱𝔥𝔢 𝔰𝔠𝔞𝔯𝔶 𝔡𝔯𝔞𝔤𝔬𝔫𝔰 𝔱𝔬 𝔰𝔲𝔯𝔳𝔦𝔳𝔢.",2,200);
  text("𝔘𝔰𝔢 𝔶𝔬𝔲𝔯 𝔰𝔭𝔞𝔠𝔢 𝔟𝔞𝔯 𝔱𝔬 𝔠𝔬𝔫𝔱𝔯𝔬𝔩 𝔱𝔥𝔢 𝔟𝔦𝔯𝔡, 𝔞𝔫𝔡 𝔱𝔯𝔶 𝔫𝔬𝔱 𝔱𝔬 𝔥𝔦𝔱 𝔱𝔥𝔢 𝔭𝔦𝔭𝔢𝔰!",24,250);
  text("𝔗𝔯𝔶 𝔱𝔬 𝔰𝔱𝔞𝔶 𝔞𝔩𝔦𝔳𝔢 𝔣𝔬𝔯 𝔞𝔰 𝔩𝔬𝔫𝔤 𝔞𝔰 𝔶𝔬𝔲 𝔠𝔞𝔫, 𝔰𝔲𝔯𝔳𝔦𝔳𝔬𝔯!",80,300);
  text("𝔓𝔯𝔢𝔰𝔰 𝔶𝔬𝔲𝔯 𝔰𝔭𝔞𝔠𝔢𝔟𝔞𝔯 𝔱𝔬 𝔠𝔬𝔫𝔱𝔦𝔫𝔲𝔢",160,400);

  pop();
}



