class Container {
    constructor(x,y,width,height) {
        var options = {
            isStatic: true,
            density: 1.2
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.height = height;
        this.width = width;
        World.add(world,this.body);
    }
    display() {
        fill("red");

        rect(this.body.position.x,this.body.position.y,this.width,this.height)
    }
}