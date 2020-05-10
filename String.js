class String{
    constructor(bodyA,bodyB){
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness: 0.004,
            length : 100
          }
          this.string = Constraint.create(options);
          World.add(world,this.string);
          
          
    }
    display(){
        var pointA = this.string.bodyA.position;
        var pointB = this.string.bodyB.position;
        strokeWeight(8);
        stroke("white");
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
};