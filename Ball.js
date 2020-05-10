class Ball {
    constructor(x,y,radius){
        var ball_options = {

            restitution : 1.0,
            density : 1.0
          
          }
         this.body  = Bodies.circle(x,y,radius,ball_options);
          this.radius = radius;
          World.add(world,this.body);
    }
    display(){
        var pos =this.body.position;
        translate(pos.x, pos.y);
        fill("blue");
        ellipseMode(RADIUS);
        ellipse(0,0,this.radius,this.radius);
    }
};