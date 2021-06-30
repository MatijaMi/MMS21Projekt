var unlockedVent = false;
var TopRightScrew = true;
var TopLeftScrew = true;
var BottomRightScrew = true;
var BottomLeftScrew = true;
var screwsLeft = 4;
var ventHintPickedUp =false;

function drawVentScene(){
    if(screwsLeft>0){
        if(!unlockedVent){
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
        document.getElementById("ventScene").style.display="block";
    }else{
        document.getElementById("ventScene").style.display="block";
        document.getElementById("VentCoverImage").src='Images/Final/ventSceneOpen.png';
        if(!ventHintPickedUp){
            document.getElementById("riddle-1-b").style.display="block";
        }
    }
    
    prevWall =wall;
    document.getElementById("dimmnesBox").style.display="block";
    showArrow("left",false);
    showArrow("right",false);
    showArrow("bottom", true);
}



function removeScrew(){
    if(itemInHand=="Screwdriver"){
    var screw = event.srcElement.id;
    playUnscrewAudio();
    document.getElementById(screw).remove();
    screwsLeft--;
    if(screwsLeft==0){
        unlockedVent=true;
        document.getElementById("VentCoverImage").src='Images/Final/ventSceneOpen.png';
        document.getElementById("backgroundImgLeftHalf").src="Images/Final/wall-e-l-2.png";
        document.getElementById("riddle-1-b").style.display="block";
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