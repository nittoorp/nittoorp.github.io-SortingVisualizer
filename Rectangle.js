class Rectangle {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }

  show() {
    stroke(0,0,120);
    strokeWeight(1);
    fill(0,0,120,100);
    rect(this.x,this.y,this.w,this.h);
  }

  selected() {
    stroke(0,0,120);
    strokeWeight(1);
    fill(0,120,0,100);
    rect(this.x,this.y,this.w,this.h);
  }

  correctOrder() {
    stroke(0,0,120);
    strokeWeight(1);
    fill(0,120,120,100);
    rect(this.x,this.y,this.w,this.h);
  }
}
