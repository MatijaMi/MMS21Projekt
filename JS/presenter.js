function drawRoom(){
    var img = new Image();
    switch (wall){
        case 0:
            img.src = 'Images/NorthWall.png';
            break;
        case 1:
            img.src = 'Images/EastWall.png';
            break;
        case 2:
            img.src = 'Images/SouthWall.png';
            break;
        case 3:
            img.src = 'Images/WestWall.png';
            break;
        case 4:
            img.src = 'Images/Ceiling.png';
            break;
        case 5:
            img.src = 'Images/Ceiling.png';
            break;
        case 6:
            img.src = 'Images/Ceiling.png';
            break;
        case 7:
            img.src = 'Images/Ceiling.png';
            break;
        case 8:
            img.src = 'Images/Ceiling.png';
            break;
        case 9:
            img.src = 'Images/Ceiling.png';
            break;
    }
    
    img.onload = function() {
        document.getElementById("backgroundImg").src=img.src;
        document.getElementById("backgroundImg").style.width="100vw"
        document.getElementById("backgroundImg").style.height="100vh";
        document.getElementById("mainDiv").style.backgroundColor="#ffff";
        drawItemsOnWall(wall);
        drawUI();
    };
    
}

function drawUI(){    
    showArrow("left",(wall%5)<4);
    showArrow("right",(wall%5)<4);
    showArrow("top",(wall%5)<4);
    showArrow("bottom", !((wall%5)<4));
    document.getElementById("topArrow").addEventListener("click",moveTop);
    document.getElementById("bottomArrow").addEventListener("click",moveBottom);
    document.getElementById("leftArrow").addEventListener("click",moveLeft);
    document.getElementById("rightArrow").addEventListener("click",moveRight);
}

function showArrow(arrow,show){
    if(show){
        document.getElementById(arrow+"Arrow").style.opacity="100%";
    }else{
        document.getElementById(arrow+"Arrow").style.opacity="0%";
    }
}

function drawZoomedInScene(){
    var scene = event.srcElement.id;
    prevWall =wall;
    wall = 19;
    drawUI();
    document.getElementById("backgroundImg").src="Images/Scenes/" +scene +".png";
    drawItemsOnWall(wall);
}

function drawItemsOnWall(wall){
    for(var i =0; i< currentItems.length;i++){
        for(var j =0; j <currentItems[i].length;i++){
            var item = currentItems[i][j];
            if(j==wall){
                document.getElementById(item).style.display="block";
                document.getElementById(item).addEventListener("click",pickupItem);
            }else{
                document.getElementById(item).style.display="none";
                document.getElementById(item).removeEventListener("click",pickupItem);
            }
        }
        
    }
}