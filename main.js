var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

canvas.width = window.innerWidth-100;
canvas.height = window.innerHeight-100;

var dino ={
    x:10,
    y:200,
    width:50,
    height:50,
    draw(){
        ctx.fillStyle='green';
        ctx.fillRect(this.x,this.y,this.width,this.height);
    }
}

dino.draw();

class Cactus {
    constructor(){
        this.x = 450;
        this.y = 250;
        this.width = 50;
        this.height = 50;
    }
    draw(){
        ctx.fillStyle='red';
        ctx.fillRect(this.x,this.y,this.width,this.height);
    }
}

var cactus = new Cactus();
cactus.draw()

var timer = 0;
var cactusmix = [];

function byFrame(){
    requestAnimationFrame(byFrame);
    timer++;

    ctx.clearRect(0,0, canvas.width, canvas.height);

    if(timer%120===0){
        var cactus = new Cactus();
        cactusmix.push(cactus);
    }

    cactusmix.forEach((a, i, o)=>{ 
        //x좌표가 0 미만이면(=화면 밖으로 나감) 제거되게
        if(a.x < (0-a.width)){
            o.splice(i,1)
        }
        a.x--;
        a.draw();
    })

    if(jumping==true){
        dino.y--;
        jumpingTime++;
    }

    if(jaumpingTime > 100){
        jumping = false;
    }

    dino.draw();
}

byFrame();

var jumping = false;
document.addEventListener('ketdown', function(e){
    if(e.code==='Space'){
        jumping = true;
    }
})