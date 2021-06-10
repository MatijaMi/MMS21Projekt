var unlocked = false;
var TopRightScrew = true;
var TopLeftScrew = true;
var BottomRightScrew = true;
var BottomLeftScrew = true;
var screwsLeft = 4;
var lensePickedUp =false;
function drawVentScene(){
    document.getElementById("backgroundImg").src="Images/Scenes/VentScene.png";
    if(screwsLeft>0){
        if(!unlocked){
            document.getElementById("VentCoverImage").style.display="block";
        }
        if(TopRightScrew){
            document.getElementById("TopRightScrew").style.display="block";
        }
        if(TopLeftScrew){
            document.getElementById("TopLeftScrew").style.display="block";
        }
        if(BottomLeftScrew){
            document.getElementById("BottomLeftScrew").style.display="block";
        }
        if(BottomRightScrew){
            document.getElementById("BottomRightScrew").style.display="block";
        }
        document.getElementById("VentCover").style.display="block";
    }else{
        if(!lensePickedUp){
            document.getElementById("Lense").style.display="block";
        }
    }
    prevWall =wall;
    wall = 19;
    drawUI();
    drawItemsOnWall(wall);
    drawInteractibles(wall);
}



function removeScrew(){
    if(itemInHand=="Screwdriver"){
    var screw = event.srcElement.id;
    playUnscrewAudio();
    document.getElementById(screw).remove();
    screwsLeft--;
    if(screwsLeft==0){
        document.getElementById("VentCover").style.display="none";
        document.getElementById("Lense").style.display="block";
    }
    switch(screw){
        case "TopRightScrew":
            TopRightScrew=false;
            break;
        case "TopLeftScrew":
            TopLeftScrew=false;
            break;
        case "BottomLeftScrew":
            BottomLeftScrew=false;
            break;
        case "BottomRightScrew":
            BottomRightScrew=false;
            break;
            
    }
    }else{
        playFailureSound();
    }
}