class Box {
    constructor(x,y,width,height){
    var options = {
    isStatic:false,
    restitution:0.3,
    friction:1,
    density:0.05
    }
    this.body = Bodies.rectangle(x,y,width,height,options)
    World.add (world,this.body)
    this.width = width
    this.height = height
    }
    display(){
        push()
        translate(this.body.position.x,this.body.position.y)
        rotate(this.body.angle)
       rectMode(CENTER)
       fill('blue')
       rect(0,0,this.width,this.height)
       pop()
    }
  }