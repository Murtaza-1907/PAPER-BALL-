class Paper{

constructor(x,y,radius)
{
    var options = {
        restitution:0.3,
        density:1.2,
        friction:0.5,
        isStatic:false
    }
this.x = x
this.y = y 
this.radius = radius
this.body = Matter.Bodies.circle(100,500,50,options)
World.add(world,this.body)
this.image = loadImage("paper.png")
}
display()
{
imageMode(CENTER)
image(this.image,this.body.position.x,this.body.position.y,this.body.radius)

}


}