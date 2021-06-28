var riddle4Combination = "1 2 3";
var riddle4Solved = false;
function drawRiddle4Scene(){
    document.getElementById("riddle4Lock").style.display="block";
    document.getElementById("dimmnesBox").style.display="block";
    showArrow("left",false);
    showArrow("right",false);
    showArrow("bottom", true);
    drawInteractibles(wall);
}


function riddle4KeypadClick(number){
    if(riddle4Solved==false){
        playkeypadButton();
        var text= document.getElementById("riddle4TextField").innerHTML;
        var newText = text.replace("_",number);
        if(newText.includes("_")==false){
            if(newText==riddle4Combination){
                riddle4Solved=true;
                playSuccesSound();
                playUnlockSound();
                document.getElementById("backgroundImgRightHalf").src = 'Images/Final/wall-n-r-2.png';
                document.getElementById("toRiddle4Lock").style.display="none";
                var index = currentinteractibles[wall].indexOf("toRiddle4Lock");
                if(index>-1){
                    currentinteractibles[wall].splice(index,1);
                }
            }else{
                newText="_ _ _";
                playFailureSound();
            }
        }
        document.getElementById("riddle4TextField").innerHTML = newText;
    }
}