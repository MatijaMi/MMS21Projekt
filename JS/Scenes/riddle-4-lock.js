var riddle4Combination = "3 7 8";
var riddle4Solved = false;

function drawRiddle4Scene(){
    prevWall =wall;
    document.getElementById("riddle4Lock").style.display="block";
    document.getElementById("dimmnesBox").style.display="block";
    showArrow("left",false);
    showArrow("right",false);
    showArrow("bottom", true);
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
                document.getElementById("backgroundImgRightHalf").src = 'Images/Final/wall-e-r-2.png';
                document.getElementById("toRiddle4Lock").style.display="none";
                //Add win button once final puzzle has been solved
                currentinteractibles[1].push("toWinningScreen");
                removeItem("riddle-4-hint");
            }else{
                newText="_ _ _";
                playFailureSound();
            }
        }
        document.getElementById("riddle4TextField").innerHTML = newText;
    }
}