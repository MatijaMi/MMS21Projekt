var wall = -1;
var room = -1;
var prevWall =0;
var zoomedIn =false;

function startGame(){
   if(document.getElementById("startButton")!=null){ document.getElementById("startButton").parentElement.removeChild(document.getElementById("startButton"));
    document.getElementById("startText").parentElement.removeChild(document.getElementById("startText"));
    }
    if(document.getElementById("endButton")!=null){
        document.getElementById("endButton").parentElement.removeChild(document.getElementById("endButton"));
        document.getElementById("gameOverText").parentElement.removeChild(document.getElementById("gameOverText"));
    }
    wall=0;
    room=0;
    drawRoom();
    startCountdown();
}
function drawRoom(){
    var img = new Image();
    switch (wall){
        case 0:
            img.src = 'Images/NorthWall.png';
            break;
        case 1:
            img.src = 'Images/EastWall.png';
            break;
        case 2:
            img.src = 'Images/SouthWall.png';
            break;
        case 3:
            img.src = 'Images/WestWall.png';
            break;
        case 4:
            img.src = 'Images/Ceiling.png';
            break;
    }
    
    img.onload = function() {
        document.getElementById("backgroundImg").src=img.src;
        document.getElementById("backgroundImg").style.width="100vw"
        document.getElementById("backgroundImg").style.height="100vh";
        document.getElementById("mainDiv").style.backgroundColor="#ffff";
        document.getElementById("Screwdriver").src="Images/Screwdriver.svg";
        document.getElementById("Screwdriver").addEventListener("click",pickupScrewdriver);
        drawUI();
    };
    
}

function pickupScrewdriver(){
    document.getElementById("Screwdriver").style.top="90%";
    document.getElementById("Screwdriver").style.left="5%";
}

function drawUI(){
    drawInventory();    
    showArrow("left",wall<4);
    showArrow("right",wall<4);
    showArrow("top",wall<4);
    showArrow("bottom", !(wall<4));
     document.getElementById("topArrow").addEventListener("click",moveTop);
    document.getElementById("bottomArrow").addEventListener("click",moveBottom);
    document.getElementById("leftArrow").addEventListener("click",moveLeft);
    document.getElementById("rightArrow").addEventListener("click",moveRight);
}

function showArrow(arrow,show){
    if(show){
        document.getElementById(arrow+"Arrow").style.opacity="100%";
    }else{
        document.getElementById(arrow+"Arrow").style.opacity="0%";
    }
}

function drawInventory(){
   document.getElementById("inventory").style.opacity="100%";
}
function moveTop(){
    prevWall=wall;
    wall=4;
    drawRoom();
}
function moveLeft(){
    console.log("left")
    if(wall==0){
        wall=3;
    }else{
        wall-=1;
    }
    drawRoom();
}
function moveRight(){
    console.log("right")
    wall=(wall+1)%4;
    drawRoom();
}
function moveBottom(){
    wall=prevWall;
    drawRoom();
}

function drawClock(){
    var img = new Image();
    img.src="Clock.png";
    img.onload = function() {
       document.getElementById("mainDiv").style.backgroundImage="url("+ img.src +")";
    };
    zoomedIn=true;
    drawInventory();
    drawBottomArrow();
}
function addListeners(){
    document.getElementById("startButton").addEventListener("click",startGame);
}
function gameOver(){
    document.getElementById("mainDiv").innerHTML+="<p id='gameOverText'>GAME OVER</p><br><button id='endButton'>Restart</button>";
    document.getElementById("mainDiv").style.backgroundColor="#000";
    document.getElementById("backgroundImg").src="";
    document.getElementById("backgroundImg").style.width=0;
    document.getElementById("backgroundImg").style.height=0;
    document.getElementById("Screwdriver").src="";
    document.getElementById("endButton").addEventListener("click",startGame);
}
function startCountdown(){
    document.getElementById("countdownClock").style.opacity="100%";
    document.getElementById("countdownClock").innerHTML="30:00";
    
    function waitaSec(){
        setTimeout(updateCountdown,1000)
    }   
    function updateCountdown(){
        var time =document.getElementById("countdownClock").innerHTML;
        var minutes =parseInt(time.substr(0,2));
        var seconds = parseInt(time.substr(3,4));
        if(seconds==0){
            if(minutes==0){
                gameOver();
                return;
            }else{
              minutes-=1;
                seconds=59;  
            }
        }else{
            seconds-=1;
        }
        if(seconds<10){
            seconds="0"+seconds;
        }
        if(minutes<10){
            minutes="0"+minutes;
        }
        document.getElementById("countdownClock").innerHTML=minutes+":"+seconds;
        waitaSec();
    }
    setTimeout(updateCountdown,1000);
}