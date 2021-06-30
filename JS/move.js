//Functions used by the arrows to move the player around in the room
function moveLeft(){
    if(wall==0){
        wall=3;
    }else{
        wall-=1;
    }
    playClickSound();
    drawWall();
}
function moveRight(){
    wall=(wall+1)%4;
    playClickSound();
    drawWall();
}
function moveBottom(){
    var parts =document.getElementsByClassName("SceneParts");
    for(var i =0; i <parts.length;i++){
        parts[i].style.display="none";
    }
    
    document.getElementById("riddle-1-b").style.display="none";
    document.getElementById("dimmnesBox").style.display="none";
    document.getElementById("backgroundMusic").volume=0.1;
    document.getElementById("melody1").pause();
    document.getElementById("melody1").currentTime=0;
    document.getElementById("melody2").pause();
    document.getElementById("melody2").currentTime=0;
    document.getElementById("melody3").pause();
    document.getElementById("melody3").currentTime=0;
    document.getElementById("completeMelody").pause();
    document.getElementById("completeMelody").currentTime=0;
    
    wall=prevWall;
    playClickSound();
    drawWall();
}

