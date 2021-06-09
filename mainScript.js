var wall = -1;
var room = -1;
var prevWall =0;
var zoomedIn =false;
var inventory=[];
var inventoryPointer=0;
var itemSelected=-1;
var itemInHand="";
var allItems=[["Screwdriver"],[],[],[],[],[],[],[],[],[]];
var interactibles=[[],[],[],[],[],[],[],[],[],[]];
var currentItems=[[]];

function startGame(){
   if(document.getElementById("startButton")!=null){ document.getElementById("startButton").parentElement.removeChild(document.getElementById("startButton"));
    if(document.getElementById("StartVideo")){
        document.getElementById("StartVideo").parentElement.removeChild(document.getElementById("StartVideo"));
    }
    }
    if(document.getElementById("endButton")!=null){
        document.getElementById("endButton").parentElement.removeChild(document.getElementById("endButton"));
        document.getElementById("gameOverText").parentElement.removeChild(document.getElementById("gameOverText"));
    }
    document.getElementById("inventory").style.display="block"
    document.getElementById("inventoryArrowLeft").addEventListener("click",moveInventoryLeft);
    document.getElementById("inventoryArrowRight").addEventListener("click",moveInventoryRight);
    var slot = document.getElementsByClassName("inventorySlot");
    for(var i =0; i <slot.length;i++){
       
        document.getElementById("inventorySlot"+i).addEventListener("click",function(event){
            chooseItem(event);
        });
    }
    
    wall=0;
    room=0;
    drawRoom();
    startCountdown();
    inventory=[];
    inventoryPointer=0;
    currentItems=allItems;
    itemInHand="";   
}



function gameOver(){
    document.getElementById("mainDiv").innerHTML+="<p id='gameOverText'>GAME OVER</p><br><button id='endButton'>Restart</button>";
    document.getElementById("mainDiv").style.backgroundColor="#000";
    document.getElementById("backgroundImg").src="";
    document.getElementById("backgroundImg").style.width=0;
    document.getElementById("backgroundImg").style.height=0;
    document.getElementById("")
    document.getElementById("endButton").addEventListener("click",startGame);
}

function gameWin(){
    
    
}




