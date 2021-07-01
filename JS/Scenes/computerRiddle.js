var computerRiddleSolved = false;
var melodyCombination = "312";
var enteredCombination =""

function drawComputerRiddle(){
    enteredCombination =""
    prevWall =wall;
    document.getElementById("computerRiddleScreen").style.display="block";
    document.getElementById("dimmnesBox").style.display="block";
    document.getElementById("backgroundMusic").volume=0.0;
    showArrow("left",false);
    showArrow("right",false);
    showArrow("bottom", true); 
}

//Function that plays melody based on which button is pressed and stops the rest so it can be heard uninterupted
function playMelody(melody){
    //Reset
    document.getElementById("melody1").pause();
    document.getElementById("melody1").currentTime=0;
    document.getElementById("melody2").pause();
    document.getElementById("melody2").currentTime=0;
    document.getElementById("melody3").pause();
    document.getElementById("melody3").currentTime=0;
    document.getElementById("completeMelody").pause();
    document.getElementById("completeMelody").currentTime=0;
    
    switch(melody){
        case 0:
            document.getElementById("completeMelody").volume=0.4;
            document.getElementById("completeMelody").play();
            break;
        case 1:
            document.getElementById("melody2").volume=0.4;
            document.getElementById("melody2").play();
            break;
        case 2:
            document.getElementById("melody3").volume=0.4;
            document.getElementById("melody3").play();
            break;
        case 3:
            document.getElementById("melody1").volume=0.4;
            document.getElementById("melody1").play();
            break;
    }
    //Checking for correct input
    if(melody>0){
        enteredCombination+=melody;
        if(enteredCombination.length==3){
            if(enteredCombination=="312"){
                playSuccesSound();
                playUnlockSound();
                computerRiddleSolved=true;
                document.getElementById("backgroundImgLeftHalf").src = 'Images/Final/wall-w-l-2.png';
                document.getElementById("riddle-1-c").style.top= "53.5%";
                document.getElementById("riddle-2-hint").style.top = "53.5%";
            }else{
                playFailureSound();
                enteredCombination="";
            }
        }
    }
}

