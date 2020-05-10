class Ground{
    constructor(x,y,width,height){
        var ground_options={
            isStatic : true
          }
          this.body = Bodies.rectangle(x,y,width,height,ground_options);
          this.width = width;
          this.height = height;
          World.add(world,this.body);  
    }
    display(){
        var pos =this.body.position;
        translate(pos.x, pos.y);
        fill(0);
        rectMode(CENTER);
        rect( 0, 0, this.width, this.height);
     }
};