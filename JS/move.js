function moveTop(){
    prevWall=wall;
    if(room==0){
        wall=4;
    }else{
        wall=9;
    }
    playClickSound();
    drawRoom();
}
function moveLeft(){
    if(room==0){
        if(wall==0){
            wall=3;
        }else{
            wall-=1;
        }
    }else{
        if(wall==5){
            wall=8;
        }else{
            wall-=1;
        }
    }
    playClickSound();
    drawRoom();
}
function moveRight(){
    wall=(wall+1)%4+5*room;
    playClickSound();
    drawRoom();
}
function moveBottom(){
    wall=prevWall;
    playClickSound();
    drawRoom();
}

