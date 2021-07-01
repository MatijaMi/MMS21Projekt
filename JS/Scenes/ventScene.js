var unlockedVent = false;
var TopRightScrew = true;
var TopLeftScrew = true;
var BottomRightScrew = true;
var BottomLeftScrew = true;
var screwsLeft = 4;
var ventHintPickedUp =false;

//Function for drawing the vent, depending on what state it's in and how many screws are left
function drawVentScene(){
    if(screwsLeft>0){
        if(!unlockedVent){
            document.getElementById("VentCoverImage").style.display="block";
            document.getElementById("VentCoverImage").src='Images/Final/ventSceneClosed.png';
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
    //Setting the wall behind for going back
    prevWall =wall;
    document.getElementById("dimmnesBox").style.display="block";
    showArrow("left",false);
    showArrow("right",false);
    showArrow("bottom", true);
}


//Function to remove screws, due to changes in development the player only needs to have the screw in their inventory to remove the screws
function removeScrew(){
    if(inventory.includes("Screwdriver")){
        var screw = event.srcElement.id;
        playUnscrewAudio();
        document.getElementById(screw).style.display="none";
        screwsLeft--;
        if(screwsLeft==0){
            unlockedVent=true;
            var newVent = new Image();
            newVent.src='Images/Final/ventSceneOpen.png';
            newVent.onload = function(){
                document.getElementById("VentCoverImage").src=newVent.src;
                document.getElementById("backgroundImgLeftHalf").src="Images/Final/wall-e-l-2.png";
                document.getElementById("riddle-1-b").style.display="block";
            }
            removeItem("Screwdriver");
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