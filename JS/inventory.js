function pickupItem(){
    playPickupSound();
    var item = event.srcElement.id;
    document.getElementById(item).style.display="none";
    var index = currentItems[wall].indexOf(item);
    if(index>-1){
            currentItems[wall].splice(index,1);
    }else{
        console.log(item);
        handleItemPickup(item);
    }
    inventory.push(item);
    
    var slots =document.getElementsByClassName("inventorySlot");
    for(var i =0; i<slots.length;i++){
        if(i<inventory.length){
        slots[i].style.backgroundImage="url(Images/Final/" + inventory[inventoryPointer+i] +".png)";
        }
    }
}

function moveInventoryLeft(){
     var slots = document.getElementsByClassName("inventorySlot");
    if(inventory.length>6){
   
    if(inventoryPointer<inventory.length-6){
        inventoryPointer++;
    }
    
    for(var i =0; i<slots.length;i++){
        slots[i].style.background="url(Images/Inventory/" + inventory[inventoryPointer+i] +".svg)";
        }
    }
}

function moveInventoryRight(){
    var slots =document.getElementsByClassName("inventorySlot");
    if(inventory.length>6){
   
    if(inventoryPointer>0){
        inventoryPointer--;
    }
    
    for(var i =0; i<slots.length;i++){
        slots[i].style.background="url(Images/Inventory/" + inventory[inventoryPointer+i] +".svg)";
        }
    }
}

function chooseItem(event){
    var slotNumber = event.srcElement.id.charAt(event.srcElement.id.length-1);
    var slots = document.getElementsByClassName("inventorySlot");
    
    if(itemSelected>=0){
        //Click on already clicked item in the inventory
        if(itemSelected==slotNumber){
            slots[itemSelected].style.backgroundColor="white"; 
            itemSelected=-1;
            removeClass("inspectButton");
            itemInHand="";
            
        }else{
            //Click on different inventory slot while a different one is still selected
            slots[itemSelected].style.backgroundColor="white"; 
            slots[slotNumber].style.backgroundColor="orange";
            itemSelected=slotNumber;
            removeClass("inspectButton");
            if(slots[slotNumber].style.backgroundImage.length>0){
                slots[slotNumber].innerHTML="<button class='inspectButton' id='inspectButton" +slotNumber + "'>Inspect</button>";
                document.getElementById("inspectButton"+slotNumber).addEventListener("click", function(){
                inspectItem(slotNumber)});
                var imageUrl =slots[slotNumber].style.backgroundImage;
                var item = imageUrl.substr(imageUrl.indexOf("Final/")+6);
                itemInHand= item.substr(0,item.indexOf("."));
            }
        }
    }else{
        //Click on an inventory slot if there are not other slots selected
        slots[slotNumber].style.backgroundColor="orange";
        if(slots[slotNumber].style.backgroundImage.length>0){
            slots[slotNumber].innerHTML="<button class='inspectButton' id='inspectButton" +slotNumber + "'>Inspect</button>";
        document.getElementById("inspectButton"+slotNumber).addEventListener("click", function(event){
            inspectItem();
        });
        }
        var imageUrl =slots[slotNumber].style.backgroundImage;
        var item = imageUrl.substr(imageUrl.indexOf("Final/")+6);
        itemInHand= item.substr(0,item.indexOf("."));
        itemSelected=slotNumber;
    }
    
}


function inspectItem(){
    event.stopPropagation();
    var slotNumber = event.srcElement.id.charAt(event.srcElement.id.length-1);
    var image =document.getElementById("inventorySlot"+slotNumber).style.backgroundImage;
    image=image.substr(image.indexOf("(")+2);
    image = image.substr(0,image.indexOf(")")-1);
    document.getElementById("inspectionScreen").style.display="block";
    document.getElementById("dimmnesBox").style.display="block";
    document.getElementById("leaveInspectButton").addEventListener("click", leaveInspectScreen);
    document.getElementById("inspectionImage").src=image;
}

function leaveInspectScreen(){
    document.getElementById("inspectionScreen").style.display="none";
    document.getElementById("dimmnesBox").style.display="none";
}

function removeClass(className){
    var classInst = document.getElementsByClassName(className);
    while(classInst[0]) {
        classInst[0].parentNode.removeChild(classInst[0]);
        }
}


function handleItemPickup(item){
    switch(item){
        case "riddle-1-b":
            ventHintPickedUp=true;
            break;
    }
}