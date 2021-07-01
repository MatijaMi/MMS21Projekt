var riddle2Combination = "1 2 9";
var riddle2Solved = false;

function drawRiddle2Scene(){
    prevWall =wall;
    document.getElementById("riddle2Lock").style.display="block";
    document.getElementById("dimmnesBox").style.display="block";
    showArrow("left",false);
    showArrow("right",false);
    showArrow("bottom", true);
    drawInteractibles(wall);
}


function riddle2KeypadClick(number){
    if(riddle2Solved==false){
        playkeypadButton();
        var text= document.getElementById("riddle2TextField").innerHTML;
        var newText = text.replace("_",number);
        if(newText.includes("_")==false){
            if(newText==riddle2Combination){
                riddle2Solved=true;
                playSuccesSound();
                playUnlockSound();
                document.getElementById("backgroundImgRightHalf").src = 'Images/Final/wall-n-r-2.png';
                document.getElementById("toriddle2Lock").style.display="none";
                document.getElementById("riddle-3-b").style.top="50.5%";
                var index = currentinteractibles[wall].indexOf("toriddle2Lock");
                if(index>-1){
                    currentinteractibles[wall].splice(index,1);
                }
                removeItem("riddle-2-hint");
            }else{
                newText="_ _ _";
                playFailureSound();
            }
        }
        document.getElementById("riddle2TextField").innerHTML = newText;
    }
}