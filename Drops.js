class createDrop{
    constructor(x,y){
        var options = {
            friction: 0.001,
            restitution:0.3           
        }
        this.rain = Bodies.circle(x,y,3,options)
        this.radius = 3;
        World.add(world, this.rain);
    }

    updateY(){     
        if(this.rain.position.y > height){

            Matter.Body.setPosition(this.rain, {x:random(0,400), y:random(-10,400)})
        }
    }

    showDrop(){
        fill("blue")
        ellipseMode(RADIUS);
        ellipse(this.rain.position.x,this.rain.position.y,random(2,5),random(2,5));
    }
}