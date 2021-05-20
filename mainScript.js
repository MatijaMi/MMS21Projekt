var wall = -1;
var room = -1;
var prevWall =0;
var zoomedIn =false;

function setupCanvas() {
    let dpi = window.devicePixelRatio;
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    let style_width = +getComputedStyle(canvas).getPropertyValue("width").slice(0, -2);
    let style_height = +getComputedStyle(canvas).getPropertyValue("height").slice(0, -2);
    canvas.setAttribute('height', style_height * dpi);
    canvas.setAttribute('width', style_width * dpi);
    canvas.addEventListener('click', determineClick, false);
    drawStartScreen(ctx);
}

function drawStartScreen(ctx){
    ctx.font = '64px serif';
    ctx.fillText("Welcome to the Lab", 670, 250);
    
    ctx.fillRect(880,400,100,60);
    ctx.font = '44px serif';
    ctx.fillStyle= 'rgb(0,0,255)';
    ctx.fillText("Start", 887, 445);
    
}

function drawRoom(){
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    var img = new Image();
    
    switch (wall){
        case 0:
            img.src = 'NorthWall.png';
            break;
        case 1:
            img.src = 'EastWall.png';
            break;
        case 2:
            img.src = 'SouthWall.png';
            break;
        case 3:
            img.src = 'WestWall.png';
            break;
        case 4:
            img.src = 'Ceiling.png';
            break;
    }
    
    img.onload = function() {
        ctx.drawImage(img, 0, 0);
        drawUI(ctx);
    };
}

function drawUI(ctx){
    drawInventory(ctx);
    
    ctx.fillStyle="rgb(0,0,0)";
    
    if(wall<4){
        drawLeftArrow(ctx);
        drawRightArrow(ctx);
        drawTopArrow(ctx);
        
    }else{
        drawBottomArrow(ctx);
    }
}

function determineClick(event){
    var x = event.pageX;
    var y = event.pageY;
    console.log(y);
    console.log(x);
    if(inBounds(x,y,880,980,400,460) && room<0){
        room =0;
        wall =0;
        drawRoom();
    }
    
    if(inBounds(x,y,10,30,400,500)){
        if(wall==0){
            wall=3;
        }else{
            wall-=1;
        }
        drawRoom();
    }
    
    if(inBounds(x,y,1890,1910,400,500)){
        wall = (wall +1)%4;
        drawRoom();
    }
    
    if(inBounds(x,y,880,980,10,30)){
        prevWall=wall;
        wall=4;
        drawRoom();
    }
    
    if(inBounds(x,y,880,980,930, 950) && wall==4){
        wall = prevWall;
        drawRoom();
        
    }
    if(inBounds(x,y,880,980,930, 950) && zoomedIn==true){
        drawRoom();
        zoomedIn=false;
        
    }
    if(wall==0 && zoomedIn==false && inBounds(x,y,1490,1660,225,385)){
        drawClock();
    }
        
}

function inBounds(x,y, x1,x2,y1,y2){
    return x>=x1 && x<=x2 && y>=y1 && y<=y2;
}
    

function drawInventory(ctx){
    var width =600;
    var height =80;
    ctx.strokeStyle= "rgb(0,0,0)";
    ctx.lineWidth = 6;
    ctx.strokeRect(20,860,width,height);
    ctx.fillStyle="rgb(120,120,10)";
    ctx.fillRect(20,860,width, height);
    
    ctx.fillStyle="rgb(255,120,40)";
    for(var i =0; i <9; i++){
        ctx.fillRect(28 + 65*i, 870, 60, 60);
        
    }
}

function drawLeftArrow(ctx){
    ctx.beginPath();
    ctx.moveTo(30,400);
    ctx.lineTo(30,500);
    ctx.lineTo(10,450);
    ctx.fill();
}

function drawRightArrow(ctx){
    ctx.beginPath();
    ctx.moveTo(1890,400);
    ctx.lineTo(1890,500);
    ctx.lineTo(1910,450);
    ctx.fill(); 
}

function drawTopArrow(ctx){
    ctx.beginPath();
    ctx.moveTo(880,30);
    ctx.lineTo(980,30);
    ctx.lineTo(930,10);
    ctx.fill();
}

function drawBottomArrow(ctx){
    ctx.fillStyle="rgb(0,0,0)";
    ctx.beginPath();
    ctx.moveTo(880,930);
    ctx.lineTo(980,930);
    ctx.lineTo(930,950);
    ctx.fill();
}

function drawClock(){
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    var img = new Image();
    img.src="Clock.png";
    img.onload = function() {
        ctx.drawImage(img, 600, 100); 
    };
    zoomedIn=true;
    drawInventory(ctx);
    drawBottomArrow(ctx);
}
