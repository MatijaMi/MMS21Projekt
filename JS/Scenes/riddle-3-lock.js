var riddle3Combination = "1 7 2";
var riddle3Solved = false;

function drawRiddle3Scene(){
    prevWall =wall;
    document.getElementById("riddle3Lock").style.display="block";
    document.getElementById("dimmnesBox").style.display="block";
    showArrow("left",false);
    showArrow("right",false);
    showArrow("bottom", true);
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
                document.getElementById("backgroundImgRightHalf").src = 'Images/Final/wall-s-r-2.png';
                document.getElementById("backgroundImgLeftHalf").src = 'Images/Final/wall-s-l-2.png';
                document.getElementById("toRiddle3Lock").style.display="none";
                document.getElementById("riddle-4-hint").style.top="44.5%";
                removeItem("riddle-3-a");
                removeItem("riddle-3-b");
            }else{
                newText="_ _ _";
                playFailureSound();
            }
        }
        document.getElementById("riddle3TextField").innerHTML = newText;
    }
}