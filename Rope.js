class Rope{
    constructor(bodyA, pointB){
        var options = {
            bodyA : bodyA,
            pointB : pointB,
            stiffness : 1,
            length : 250
        }
        this.pointB = pointB
        this.rope = Constraint.create(options)
        World.add(world, this.rope);
    }
    display(){
        strokeWeight(3)
        var pointA = this.rope.bodyA.position;
        var pointB = this.pointB
        line(pointA.x, pointA.y, pointB.x, pointB.y)
    }
}