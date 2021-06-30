function drawWall(){
    var leftHalf = new Image();
    var rightHalf = new Image();
    
    switch (wall){
        case 0:
            if(riddle1Solved){
                leftHalf.src = 'Images/Final/wall-n-l-2.png';
            }else{
                leftHalf.src = 'Images/Final/wall-n-l-1.png';
            } 
            if(riddle2Solved){
                rightHalf.src = 'Images/Final/wall-n-r-2.png';
            }else{
                rightHalf.src = 'Images/Final/wall-n-r-1.png';
            }
            
            break;
        case 1:
            if(unlockedVent){
                leftHalf.src = 'Images/Final/wall-e-l-2.png';
            }else{
                leftHalf.src = 'Images/Final/wall-e-l-1.png';
            }
            if(riddle4Solved){
                rightHalf.src = 'Images/Final/wall-e-r-2.png';
            }else{
                rightHalf.src = 'Images/Final/wall-e-r-1.png';
            }
            break;
        case 2:
            if(riddle3Solved){
                leftHalf.src = 'Images/Final/wall-s-l-2.png';
                rightHalf.src = 'Images/Final/wall-s-r-2.png';
            }else{
                leftHalf.src = 'Images/Final/wall-s-l-1.png';
                rightHalf.src = 'Images/Final/wall-s-r-1.png';
            }
            break;
        case 3:
            if(computerRiddleSolved){
                leftHalf.src='Images/Final/wall-w-l-2.png'
            }else{
                leftHalf.src = 'Images/Final/wall-w-l-1.png';   
            }
            rightHalf.src = 'Images/Final/wall-w-r-1.png';
            break;
    }
    
    rightHalf.onload = function() {
        document.getElementById("backgroundImgLeftHalf").src=leftHalf.src;
        document.getElementById("backgroundImgLeftHalf").style.width="50vw"
        document.getElementById("backgroundImgLeftHalf").style.height="100vh";
        document.getElementById("backgroundImgRightHalf").src=rightHalf.src;
        document.getElementById("backgroundImgRightHalf").style.width="50vw"
        document.getElementById("backgroundImgRightHalf").style.height="100vh";
        document.getElementById("mainDiv").style.backgroundColor="#ffff";
        drawItemsOnWall(wall);
        drawInteractibles(wall);
        drawUI();
    };
    
}

function drawUI(){    
    showArrow("left",(wall%5)<4);
    showArrow("right",(wall%5)<4);
    showArrow("bottom", !((wall%5)<4));
}

function showArrow(arrow,show){
    if(show){
        document.getElementById(arrow+"Arrow").style.opacity="100%";
    }else{
        document.getElementById(arrow+"Arrow").style.opacity="0%";
    }
}

function drawItemsOnWall(wall){
    for(var i =0; i< currentItems.length;i++){
        for(var j =0; j <currentItems[i].length;j++){
            var item = currentItems[i][j];
            if(i==wall){
                document.getElementById(item).style.display="inline-block";
            }else{
                document.getElementById(item).style.display="none";
            }
        }  
    }
}

function drawInteractibles(wall){
    for(var i =0; i< currentinteractibles.length;i++){
        for(var j =0; j <currentinteractibles[i].length;j++){
            var item = currentinteractibles[i][j];
            if(i==wall){
                document.getElementById(item).style.display="block";
            }else{
                document.getElementById(item).style.display="none";
            }
        }
    }
}