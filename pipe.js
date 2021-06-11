class Pipe {
  constructor(x, y, h) {
    this.x = x;
    this.y = y;
    this.w = 60;
    this.h = h;
    //this.image1 = loadImage('Images/p1.png');
   // this.image2 = loadImage('Images/p2.png');
  }

  update(speed) {
    this.x += speed;
  }

  isTouching(ball) {
    if (
      ball.x - this.x < this.w / 2 + ball.r*2 + 4 &&
      this.x - ball.x < this.w / 2 + ball.r*2 + 4  &&
      ball.y - this.y < this.h / 2 + ball.r*2 + 4 &&
      this.y - ball.y < this.h / 2 + ball.r*2 + 4
    ) {
      
      return true;
    } else {
      return false;
    }
  }

  complete(){
    if(this.x < 0-this.w){
      return true;
    }
  }
}
