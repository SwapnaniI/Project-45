class Bird {

  constructor(){
  this.x = width / 4;
  this.y = width/2 - 200
  this.r = 15;
  }
 
  update(){
  //Adding velocity
  y = y + ySpeed;

  //Making the bird jump, and collide
  gravity();

  this.y = y;

  birdObject.y = bird.y + 2;
  birdObject.x = bird.x + 8;
  }
}

