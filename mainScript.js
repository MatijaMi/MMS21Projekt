var wall = -1;
var prevWall =0;
var zoomedIn =false;
var inventory=[];
var itemSelected=-1;
var currentinteractibles;
var currentItems;

function showIntroScreen(){
    document.getElementById("introStartButton").style.display="block";
    document.getElementById("IntroVideo").style.display="inline-block";
    document.getElementById("StartVideo").style.display="none";
    document.getElementById("startButton").style.display="none";
    document.getElementById("StartVideo").pause();
    document.getElementById("backgroundMusic").volume=0.1;
    document.getElementById("backgroundMusic").play();
    document.getElementById("IntroVideo").play(); 
}

function startGame(){
    //All the needed Items and scenes saved in arrays so game can easily be restarted in case of failure
    var allItems=[["Screwdriver","riddle-1-a","riddle-3-a","riddle-3-b"],[],["riddle-4-hint"],["riddle-1-c","riddle-2-hint"]];
    var allInteractibles=[["toriddle1Lock","toriddle2Lock"],["toPeriodicTable","toRiddle4Lock","toVentScene"],["toRiddle3Lock"],["toComputerRiddle","toExperimentRiddle"]];
    
    //Removing parts that won't be needed anymore
    document.getElementById("startButton").style.display="none";
    document.getElementById("StartVideo").style.display="none";
    document.getElementById("restartButton").style.display="none";
    document.getElementById("IntroVideo").style.display="none";
    document.getElementById("introStartButton").style.display="none";
    document.getElementById("GameOverVideo").style.display="none";
    
    wall=0;
    inventoryPointer=0;
    
    riddle1Solved = false;
    riddle2Solved = false;
    riddle3Solved = false;
    riddle4Solved = false;
    computerRiddleSolved = false;
    
    unlockedVent = false;
    TopRightScrew = true;
    TopLeftScrew = true;
    BottomRightScrew = true;
    BottomLeftScrew = true;
    screwsLeft = 4;
    ventHintPickedUp =false;
    
    valves =[0,0,0];
    enteredCombination =""
    
    //Hiding hidden items offscreen
    document.getElementById("riddle-1-c").style.top="-20%";
    document.getElementById("riddle-3-b").style.top="-20%";
    document.getElementById("riddle-3-a").style.top="-20%";
    document.getElementById("riddle-4-hint").style.top="-20%";
    document.getElementById("riddle-2-hint").style.top="-20%";
    
    //Reseting the inputed codes for the riddles
    document.getElementById("riddle1TextField").innerHTML="_ _ _";
    document.getElementById("riddle2TextField").innerHTML="_ _ _";
    document.getElementById("riddle3TextField").innerHTML="_ _ _";
    document.getElementById("riddle4TextField").innerHTML="_ _ _";
    
    //Reseting the items and interactibles
    currentItems=allItems.slice();
    currentinteractibles=allInteractibles.slice();
    
    //Reseting the inventory
    var slots =document.getElementsByClassName("inventorySlot");
    for(var i =0; i<slots.length;i++){
            slots[i].style.backgroundImage="";
    }
    
    
    
    //Showing parts needed for the game
    document.getElementById("inventory").style.display="inline-flex";
    document.getElementById("countdownClock").style.display="block";
    document.getElementById("bottomArrow").style.display="block";
    document.getElementById("rightArrow").style.display="block";
    document.getElementById("leftArrow").style.display="block";
    document.getElementById("backgroundImg").style.display="block"; 
    
    inventory=[];
    document.getElementById("backgroundMusic").volume=0.1;
    document.getElementById("backgroundMusic").play();
    startCountdown();
    drawWall();
}


//Function that ends the game in case the time runs out
function gameOver(){
    document.getElementById("mainDiv").style.backgroundColor="black";
    document.getElementById("backgroundImg").style.display="none";  
    document.getElementById("restartButton").style.display="block";  
    document.getElementById("inventory").style.display="none";
    document.getElementById("countdownClock").style.display="none";
    document.getElementById("GameOverVideo").style.display="inline-block";
    document.getElementById("GameOverVideo").volume=0.2;
    document.getElementById("GameOverVideo").play();
    document.getElementById("toPeriodicTable").style.display="none";
    document.getElementById("dimmnesBox").style.display="none";
    document.getElementById("toComputerRiddle").style.display="none";
    document.getElementById("toExperimentRiddle").style.display="none";
    document.getElementById("toWinningScreen").style.display="none";
    document.getElementById("bottomArrow").style.display="none";
    document.getElementById("rightArrow").style.display="none";
    document.getElementById("leftArrow").style.display="none";
    //Hiding the items
    var parts =document.getElementsByClassName("grabableItems");
    for(var i =0; i <parts.length;i++){
        parts[i].style.display="none";
    }
    
    //Hiding the to scene buttons
    var sceneButtons =document.getElementsByClassName("SceneButton");
    for(var i =0; i<sceneButtons.length;i++){
            sceneButtons[i].style.display="none";
    }

    //Hiding the scenes
    var scenes =document.getElementsByClassName("SceneParts");
    for(var i =0; i<scenes.length;i++){
            scenes[i].style.display="none";
    }
}

//Function in case the player manages to beat the game
function gameWin(){
    clearTimeout(timeOut);
    document.getElementById("mainDiv").style.backgroundColor="black";
    document.getElementById("backgroundImg").style.display="none";  
    document.getElementById("inventory").style.display="none";
    document.getElementById("countdownClock").style.display="none";
    document.getElementById("toPeriodicTable").style.display="none";
    document.getElementById("toVentScene").style.display="none";
    document.getElementById("toRiddle4Lock").style.display="none";
    document.getElementById("toWinningScreen").style.display="none";
    document.getElementById("bottomArrow").style.display="none";
    document.getElementById("rightArrow").style.display="none";
    document.getElementById("leftArrow").style.display="none";
    document.getElementById("GameWinVideo").style.display="inline-block";
    document.getElementById("GameWinVideo").volume=0.2;
    document.getElementById("GameWinVideo").play();
    var parts =document.getElementsByClassName("grabableItems");
    for(var i =0; i <parts.length;i++){
        parts[i].style.display="none";
    }
    
}




