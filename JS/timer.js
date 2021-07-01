//Code for the countdown clock used to make the game ever so slightly more exciting
var timeOut;

function startCountdown(){
    document.getElementById("countdownClock").style.opacity="100%";
    document.getElementById("countdownClock").innerHTML="20:00";
    playTimeBeep();
    setTimeout(updateCountdown,1000);
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
    if((minutes==20 || minutes==15 || minutes==10) && seconds ==0){
        playTimeBeep();
    } 
    if(minutes =="00" && seconds<=30){
            playTimeBeep();
    }
    timeOut =setTimeout(updateCountdown,1000);
}
    
