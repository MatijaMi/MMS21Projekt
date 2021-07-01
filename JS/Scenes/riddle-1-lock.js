var riddle1Combination = "7 4 0";
var riddle1Solved = false;
//The code for these keypads could be a lot less redundant but due to time constraints it will stay in this state
function drawRiddle1Scene(){
    prevWall =wall;
    document.getElementById("riddle1Lock").style.display="block";
    document.getElementById("dimmnesBox").style.display="block";
    showArrow("left",false);
    showArrow("right",false);
    showArrow("bottom", true);
    drawInteractibles(wall);
}


function riddle1KeypadClick(number){
    if(riddle1Solved==false){
        playkeypadButton();
        var text= document.getElementById("riddle1TextField").innerHTML;
        var newText = text.replace("_",number);
        if(newText.includes("_")==false){
            if(newText==riddle1Combination){
                riddle1Solved=true;
                playSuccesSound();
                playUnlockSound();
                document.getElementById("backgroundImgLeftHalf").src = 'Images/Final/wall-n-l-2.png';
                document.getElementById("toriddle1Lock").style.display="none";
                document.getElementById("riddle-3-a").style.top="77.5%";
                var index = currentinteractibles[wall].indexOf("toriddle1Lock");
                if(index>-1){
                    currentinteractibles[wall].splice(index,1);
                }
            }else{
                newText="_ _ _";
                playFailureSound();
            }
        }
        document.getElementById("riddle1TextField").innerHTML = newText;
    }
}