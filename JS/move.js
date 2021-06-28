function moveTop(){
    prevWall=wall;
    wall=4;
    playClickSound();
    drawWall();
}
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
    document.getElementById("backgroundImg").style.display="block";
    document.getElementById("dimmnesBox").style.display="none";
    
    wall=prevWall;
    playClickSound();
    drawWall();
}

