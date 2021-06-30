function drawPeriodicTable(){
    prevWall =wall;
    document.getElementById("periodicTableScene").style.display="block";
    document.getElementById("dimmnesBox").style.display="block";
    showArrow("left",false);
    showArrow("right",false);
    showArrow("bottom", true);
}