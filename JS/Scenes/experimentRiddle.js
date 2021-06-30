var computerRiddleSolved = false;
var melodyCombination = "33213";
var valves =[0,0,0];

function drawExperimentRiddle(){
    prevWall =wall;
    document.getElementById("experimentRiddleScreen").style.display="block";
    document.getElementById("dimmnesBox").style.display="block";
    showArrow("left",false);
    showArrow("right",false);
    showArrow("bottom", true);
}


function releaseValve(valve){
    console.log(valve);
    var index =0;
    valves[valve]= (valves[valve]+1)%2;
    
    index= valves[0]*4 + valves[1]*2 + valves[2];
    switch(index){
        case 0:
            index=1;
            break;
        case 1:
            index=4;
            break;
        case 2:
            index=3;
            break;
        case 3:
            index=6;
            break;
        case 4:
            index=2;
            break;
        case 5:
            index=7;
            break;
        case 6:
            index=5;
            break;
        case 7:
            index=8;
            break;  
    }
    playFluidSound();
    document.getElementById("experimentScreenImage").src="Images/Final/experiment-"+index +".png";
}