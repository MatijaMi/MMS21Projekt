// Script to handle inventory, used to be a lot bigger but a lot of the inventory features got scrapped
var inventoryPointer=0;
function pickupItem(){
    playPickupSound();
    var item = event.srcElement.id;
    document.getElementById(item).style.display="none";
    var index = currentItems[wall].indexOf(item);
    if(index>-1){
            currentItems[wall].splice(index,1);
    }else{
        if(item="riddle-1-b"){
            ventHintPickedUp=true;
        }
    }
    inventory.push(item);
    
    var slots =document.getElementsByClassName("inventorySlot");
    for(var i =0; i<slots.length;i++){
        if(i<inventory.length){
            slots[slots.length-i-1].style.backgroundImage="url(Images/Final/" + inventory[inventoryPointer+i] +".png)";
        }
    }
}