var riddle3Combination = "7 4 0";
var riddle3Solved = false;
function drawRiddle3Scene(){
    document.getElementById("riddle3Lock").style.display="block";
    document.getElementById("dimmnesBox").style.display="block";
    showArrow("left",false);
    showArrow("right",false);
    showArrow("bottom", true);
    drawInteractibles(wall);
}


function riddle3KeypadClick(number){
    if(riddle3Solved==false){
        playkeypadButton();
        var text= document.getElementById("riddle3TextField").innerHTML;
        var newText = text.replace("_",number);
        if(newText.includes("_")==false){
            if(newText==riddle3Combination){
                riddle3Solved=true;
                playSuccesSound();
                playUnlockSound();
                document.getElementById("backgroundImgLeftHalf").src = 'Images/Final/wall-n-l-2.png';
                document.getElementById("toRiddle3Lock").style.display="none";
                var index = currentinteractibles[wall].indexOf("toRiddle3Lock");
                if(index>-1){
                    currentinteractibles[wall].splice(index,1);
                }
            }else{
                newText="_ _ _";
                playFailureSound();
            }
        }
        document.getElementById("riddle3TextField").innerHTML = newText;
    }
}