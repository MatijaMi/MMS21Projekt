var wall = -1;
var prevWall =0;
var zoomedIn =false;
var inventory=[];
var inventoryPointer=0;
var itemSelected=-1;
var itemInHand="";

var currentinteractibles;
var currentItems;

function startGame(){
    var allItems=[["Screwdriver","riddle-3-hint-A","riddle-3-hint-C"],[],[],["riddle-3-hint-B"],[],[],[],[],[],[]];
    var allInteractibles=[["toRiddle3Lock","toRiddle4Lock"],[],["VentScene"],["toComputerRiddle","toExperimentRiddle"],[],[],[],[],[],[]];
    if(document.getElementById("startButton")!=null){ document.getElementById("startButton").parentElement.removeChild(document.getElementById("startButton"));
    if(document.getElementById("StartVideo")){
        document.getElementById("StartVideo").parentElement.removeChild(document.getElementById("StartVideo"));
    }
    }
    if(document.getElementById("restartButton")!=null){
        document.getElementById("restartButton").style.display="none";
    }
    document.getElementById("inventory").style.display="inline-flex";
    document.getElementById("inventoryArrowLeft").addEventListener("click",moveInventoryLeft);
    document.getElementById("inventoryArrowRight").addEventListener("click",moveInventoryRight);
    var slot = document.getElementsByClassName("inventorySlot");
    for(var i =0; i <slot.length;i++){
       
        document.getElementById("inventorySlot"+i).addEventListener("click",function(event){
            chooseItem(event);
        });
    }
    document.getElementById("GameOverVideo").style.display="none";
    document.getElementById("countdownClock").style.display="block";
    document.getElementById("backgroundImg").style.display="block";  
    wall=0;
    
    startCountdown();
    
    inventoryPointer=0;
    riddle3Solved = false;
    unlockedVent = false;
    topRightScrew = true;
    TopLeftScrew = true;
    BottomRightScrew = true;
    BottomLeftScrew = true;
    screwsLeft = 4;
    lensePickedUp =false;
    currentItems=allItems.slice();
    currentinteractibles=allInteractibles.slice();
    itemInHand=""; 
    var slots =document.getElementsByClassName("inventorySlot");
    for(var i =0; i<slots.length;i++){
        if(i<inventory.length){
            slots[i].style.backgroundImage="";
        }
    }
    inventory=[];
    drawWall();
}



function gameOver(){
    document.getElementById("mainDiv").style.backgroundColor="black";
    document.getElementById("backgroundImg").src="";
    document.getElementById("backgroundImg").style.display="none";  
    document.getElementById("restartButton").style.display="block";  
    document.getElementById("inventory").style.display="none";
    document.getElementById("countdownClock").style.display="none";
    document.getElementById("GameOverVideo").style.display="inline-block";
    document.getElementById("GameOverVideo").volume=0.2;
    document.getElementById("GameOverVideo").play();
    
    var parts =document.getElementsByClassName("grabableItems");
    for(var i =0; i <parts.length;i++){
        parts[i].style.display="none";
    }
}
function gameWin(){
    document.getElementById("mainDiv").style.backgroundColor="black";
    document.getElementById("backgroundImg").src="";
    document.getElementById("backgroundImg").style.display="none";  
    document.getElementById("inventory").style.display="none";
    document.getElementById("countdownClock").style.display="none";
    document.getElementById("GameWinVideo").style.display="inline-block";
    document.getElementById("GameWinVideo").volume=0.2;
    document.getElementById("GameWinVideo").play();
     var parts =document.getElementsByClassName("grabableItems");
    for(var i =0; i <parts.length;i++){
        parts[i].style.display="none";
    }
    
}




