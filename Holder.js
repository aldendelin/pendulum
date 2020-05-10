class Holder{
constructor(x,y,width,height){
    var holder_options={
        isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,holder_options);
      this.width = width;
        this.height = height;
      World.add(world,this.body);
}
display(){
    var pos =this.body.position;
    translate(pos.x, pos.y);
    fill ("brown");
    rectMode(CENTER);
    rect( 0, 0, this.width, this.height);
    
}

};